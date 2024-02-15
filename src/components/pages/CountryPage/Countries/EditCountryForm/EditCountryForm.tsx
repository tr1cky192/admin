import type { ChangeEvent, FormEvent } from 'react';
import { useCallback, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'App';
import { toast } from 'react-toastify';
import type { EditCountry } from 'types/apis';
import { selectCountryById, setActiveCountryId, useEditCountryMutation } from 'features/countries';
import type { EntityId } from '@reduxjs/toolkit';
import {
  selectActiveLangCode,
  selectActiveLanguageId,
  selectIsEnglishActiveLang,
} from 'features/languages';
import { EditButton } from 'components/shared/Buttons';
import { useCloseOnOutsideClick } from 'common/hooks';
import {
  CountryInputLabel,
  EditCountryFormStyled,
  EditCountryInput,
} from './EditCountryForm.styled';

export type EditCountryFormType = {
  countryItem: {
    countryId: EntityId;
    closeCountriesList: () => void;
    setIsEditingCountry: (arg: boolean) => void;
    isEditingCountry: boolean;
    isLoading: boolean;
  };
};

export const EditCountryForm = ({
  countryItem: { countryId, closeCountriesList, isEditingCountry, setIsEditingCountry, isLoading },
}: EditCountryFormType) => {
  const [editCountry, { isLoading: isLoadingEditedCountry }] = useEditCountryMutation();

  const countryObj = useAppSelector(state => selectCountryById(state, countryId));
  const activeLangId = useAppSelector(selectActiveLanguageId);
  const activeLangCode = useAppSelector(selectActiveLangCode);
  const isEng = useAppSelector(selectIsEnglishActiveLang);
  const [localCountryName, setLocalCountryName] = useState(countryObj?.country);
  const [inputDisabled, setInputDisabled] = useState(true);
  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(true);

  const formRef = useRef<HTMLFormElement>(null);

  const appDispatch = useAppDispatch();

  const startEditing = useCallback(() => {
    if (isEditingCountry) return;

    setIsEditingCountry(true);
    setInputDisabled(false);
    setIsSubmitButtonDisabled(false);
  }, [isEditingCountry, setIsEditingCountry]);

  const stopEditing = useCallback(() => {
    if (!isEditingCountry) return;

    setIsEditingCountry(false);
    setInputDisabled(true);
    setIsSubmitButtonDisabled(true);
  }, [isEditingCountry, setIsEditingCountry]);

  const onClickSetActiveCountryId = useCallback(async () => {
    if (isEditingCountry) return;

    appDispatch(setActiveCountryId(countryObj?._id));
    closeCountriesList();
  }, [isEditingCountry, appDispatch, countryObj?._id, closeCountriesList]);

  const resetName = useCallback(() => {
    setLocalCountryName(countryObj?.country);
  }, [countryObj?.country]);

  useCloseOnOutsideClick({ isEditing: !inputDisabled, cb: resetName, stopEditing, formRef });

  if (!countryObj) return null;
  const { _id: id, country, international, langCode } = countryObj;

  const isPending = isLoading || isLoadingEditedCountry;
  const isDisabledEdit = !inputDisabled || isPending;
  const isDisabledSubmit =
    !country ||
    !international ||
    isSubmitButtonDisabled ||
    isPending ||
    !activeLangId ||
    !activeLangCode;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isDisabledSubmit || !localCountryName?.trim()) return;
    const editedCountryName = localCountryName.trim();
    if (!editedCountryName) return;

    const editedCountry: EditCountry = {
      _id: id,
      country: editedCountryName,
      langCode: activeLangCode,
      international,
    };

    try {
      const editedResponse = await editCountry(editedCountry).unwrap();
      if (!editedResponse) return;

      const updatedName = editedResponse.entities[countryObj._id]?.country;
      if (!updatedName) return;

      toast.success(`Country ${updatedName}  updated!`);
    } catch (error) {
      toast.error(JSON.stringify(error));
      setLocalCountryName(countryObj.country);
    } finally {
      setInputDisabled(true);
      setIsSubmitButtonDisabled(true);
    }
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => setLocalCountryName(e.currentTarget.value);

  const isFirstEdit = langCode === 'EN' && !isEng;

  const editCountryFormInterface = (
    <CountryInputLabel onClick={onClickSetActiveCountryId}>
      <EditCountryInput
        className={inputDisabled ? 'disabled' : ''}
        type="text"
        value={localCountryName}
        onChange={onChange}
        name="editedCountryName"
      />
    </CountryInputLabel>
  );

  const showOverlay = (
    <>
      {inputDisabled && (
        <EditButton onClick={startEditing} $isFirstEdit={isFirstEdit} disabled={isDisabledEdit} />
      )}

      {!isSubmitButtonDisabled && (
        <button type="submit" disabled={isDisabledSubmit}>
          Done
        </button>
      )}
    </>
  );

  return (
    <EditCountryFormStyled onSubmit={handleSubmit} ref={formRef}>
      {editCountryFormInterface}
      {showOverlay}
    </EditCountryFormStyled>
  );
};
