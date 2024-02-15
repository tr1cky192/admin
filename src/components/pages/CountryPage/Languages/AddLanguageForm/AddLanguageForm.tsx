import type { AddLanguage, SelectLangType } from 'types/apis';
import type { FormEvent } from 'react';
import { useState } from 'react';

import { toast } from 'react-toastify';
import {
  selectAllLanguagesCodes,
  selectLanguageId,
  useAddLanguageMutation,
  useLazyGetLanguagesQuery,
} from 'features/languages';
import { useAppDispatch, useAppSelector } from 'App';
import { setActiveCountryId, useLazyGetCountriesQuery } from 'features/countries';
import { useLazyGetStatesQuery } from 'features/states';
import { useLazyGetCitiesQuery } from 'features/cities';
import { useLazyGetDistrictsQuery } from 'features/districts';
import { wait } from 'common/utils';
import slang from '../Languages.module.scss';

type AddLanguageFormProps = {
  closeModal: () => void;
  setActiveLanguage: SelectLangType;
};

export const AddLanguageForm = ({ closeModal, setActiveLanguage }: AddLanguageFormProps) => {
  const [addLanguage, { isLoading: isAddingLanguage }] = useAddLanguageMutation();
  const allLanguagesCodes = useAppSelector(selectAllLanguagesCodes);
  const [getLanguages, { isLoading: isReFetchingLanguages }] = useLazyGetLanguagesQuery();
  const [getCountries, { isLoading: isReFetchingCountries }] = useLazyGetCountriesQuery();
  const [getStates, { isLoading: isReFetchingStates }] = useLazyGetStatesQuery();
  const [getCities, { isLoading: isReFetchingCities }] = useLazyGetCitiesQuery();
  const [getDistricts, { isLoading: isReFetchingDistrict }] = useLazyGetDistrictsQuery();

  const [localNewLangName, setLocalNewLangName] = useState('');
  const [localNewLangCode, setLocalNewLangCode] = useState('');
  const appDispatch = useAppDispatch();

  const isSubmitDisabled =
    isAddingLanguage ||
    isReFetchingLanguages ||
    isReFetchingCountries ||
    isReFetchingStates ||
    isReFetchingCities ||
    isReFetchingDistrict;

  const onSubmitAddLanguage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitDisabled) return;

    const lang = localNewLangName.trim();
    const code = localNewLangCode.trim().toUpperCase();
    if (!lang || !code) return;

    if (allLanguagesCodes.includes(code)) {
      toast.info(`Code ${code} exists. Enter a new one`);
      return;
    }

    const newLanguage: AddLanguage = { lang, code };

    try {
      const addedLanguage = await addLanguage(newLanguage).unwrap();
      if (!addedLanguage) return;

      const newLangId = selectLanguageId(addedLanguage, code);
      if (!newLangId) return;

      setActiveLanguage(newLangId);
      appDispatch(setActiveCountryId());

      const addedLangName = addedLanguage.entities[newLangId]?.lang;
      if (addedLangName) {
        toast.success(`${addedLangName} language added`);
      }

      await wait(1700);
      await getLanguages();
      await getCountries();
      await getStates();
      await getCities();
      await getDistricts();
    } catch (err) {
      if (err instanceof Error) {
        toast.error(`Add language error - double-check if language is added: ${err.message}`);
      }
    } finally {
      setLocalNewLangName('');
      setLocalNewLangCode('');
      closeModal();
    }
  };

  return (
    <form className={slang.block_add_lang_text} onSubmit={onSubmitAddLanguage}>
      <h5 className={slang.text_add_lang1}>
        You can add a language, enter the name of the language in the original language and its
        international designation
      </h5>

      <input
        className={slang.lang_block_input2}
        name="newLanguageName"
        type="text"
        value={localNewLangName}
        onChange={e => setLocalNewLangName(e.currentTarget.value)}
        maxLength={20}
      />

      <h5 className={slang.text_add_lang2}>name of the language in the original language</h5>

      <input
        className={slang.lang_block_input3}
        name="newLanguageCode"
        type="text"
        value={localNewLangCode}
        onChange={e => setLocalNewLangCode(e.currentTarget.value)}
        maxLength={2}
      />

      <h5 className={slang.text_add_lang3}>international designation</h5>

      <button
        className={
          isSubmitDisabled ? slang.language_btn_style_disable : slang.language_btn_style_open
        }
        disabled={isSubmitDisabled}
        type="submit"
      >
        Add language
      </button>
    </form>
  );
};
