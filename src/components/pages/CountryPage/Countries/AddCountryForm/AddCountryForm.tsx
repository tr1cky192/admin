import type { FormEvent } from 'react';
import type { AddCountry } from 'types/apis';
import { useAppDispatch, useAppSelector } from 'App';
import {
  setActiveCountryId,
  useAddCountryEngMutation,
  useLazyGetCountriesQuery,
} from 'features/countries';
import { selectIsEnglishActiveLang, useLazyGetLanguagesQuery } from 'features/languages';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { Spinner } from 'components/shared/Loader';
import { wait } from 'common/utils';
import {
  AddCountryButton,
  AddCountryFormStyled,
  AddCountryInput,
  AddCountryLabel,
  AddCountryText,
} from './AddCountryForm.styled';

type AddCountryFormProps = { isLoading: boolean };

export const AddCountryForm = ({ isLoading }: AddCountryFormProps) => {
  const [addCountryEng, { isLoading: isAddingCountry, error: addCountryEngMutationError }] =
    useAddCountryEngMutation();
  const [getLanguages, { isLoading: isRefetchingLanguages }] = useLazyGetLanguagesQuery();
  const [getCountries, { isLoading: isRefetchingCountries }] = useLazyGetCountriesQuery();

  const isEng = useAppSelector(selectIsEnglishActiveLang);

  const appDispatch = useAppDispatch();

  useEffect(() => {
    if (!addCountryEngMutationError || !('data' in addCountryEngMutationError)) return;

    toast.error(JSON.stringify(addCountryEngMutationError.data, null, 2));
  }, [addCountryEngMutationError]);

  const isPending = isLoading || isAddingCountry || isRefetchingLanguages || isRefetchingCountries;

  const isSubmitDisabled = isPending || isAddingCountry;

  const addCountryButtonLabel = isPending ? <Spinner /> : 'Add country';

  const onSubmitAddCountry = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitDisabled) return;

    const form = e.currentTarget;
    const formData = new FormData(form);
    const country = formData.get('newCountryName')?.toString().trim();

    if (!country) {
      toast('Kindly provide country name');
      return;
    }
    if (!isEng) {
      toast('Please select English to add countries');
      return;
    }

    const newCountry: AddCountry = {
      country,
      international: country,
      langCode: 'EN',
    };

    try {
      const addedCountry = await addCountryEng(newCountry).unwrap();
      if (!addedCountry) return;

      const newActiveCountryId = Object.values(addedCountry.entities).find(
        countryObj => countryObj?.international === country
      )?._id;
      if (!newActiveCountryId) return;

      appDispatch(setActiveCountryId(newActiveCountryId));

      toast.success(`Country ${country} added`);

      await wait(1500);
      await getLanguages();
      await getCountries();
    } catch (error) {
      toast.error("Country not added. Let's try again");
    } finally {
      form.reset();
    }
  };

  return (
    <AddCountryFormStyled onSubmit={onSubmitAddCountry}>
      <AddCountryText>You can add a country, enter the name in English</AddCountryText>

      <div>
        <AddCountryLabel>
          <AddCountryInput name="newCountryName" type="text" maxLength={20} />
        </AddCountryLabel>

        <p style={{ padding: '2px 0 0 8px' }}>name of the country in the English language</p>
      </div>

      <AddCountryButton disabled={isSubmitDisabled} type="submit">
        {addCountryButtonLabel}
      </AddCountryButton>
    </AddCountryFormStyled>
  );
};
