import { useAppSelector } from 'App';
import { useCloseOnOutsideClick } from 'common/hooks';
import { generateStateCode, wait } from 'common/utils';
import { SubmitAddLocationButton } from 'components/shared/Buttons';
import { Spinner } from 'components/shared/Loader';
import {
  useLazyGetCountriesQuery,
  selectActiveCountryId,
  selectActiveCountryInternational,
} from 'features/countries';
import { selectIsEnglishActiveLang } from 'features/languages';
import { useAddStateMutation, useLazyGetStatesQuery } from 'features/states';
import type { FormEvent } from 'react';
import { useState, useRef, useCallback } from 'react';
import { toast } from 'react-toastify';
import {
  AddLocationButton,
  Row,
  AddStatePhotoLabel,
  AddStatePhotoInput,
  AddStateNameLabel,
  AddStateNameInput,
  AddStateFormStyled,
} from './AddStateForm.styled';

type FormData = {
  statePhotoURL: string;
  stateName: string;
};

export const AddStateForm = () => {
  const [addState, { isLoading: isAddingLoc3 }] = useAddStateMutation();
  const [getCountries, { isLoading: isLoadingStates }] = useLazyGetStatesQuery();
  const [getStates, { isLoading: isLoadingCountries }] = useLazyGetCountriesQuery();

  const activeCountryId = useAppSelector(selectActiveCountryId);
  const activeCountryInternational = useAppSelector(selectActiveCountryInternational);
  const isEng = useAppSelector(selectIsEnglishActiveLang);

  const [isRefetchingCountries, setIsRefetchingCountries] = useState(false);
  const [isAddingState, setIsAddingState] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const startAdding = useCallback(() => setIsAddingState(true), []);
  const stopAdding = useCallback(() => setIsAddingState(false), []);

  const isPending = isLoadingStates || isAddingLoc3 || isLoadingCountries || isRefetchingCountries;

  const isSubmitDisabled = !isEng || isPending || !activeCountryId || !activeCountryInternational;

  useCloseOnOutsideClick({
    isEditing: isAddingState,
    stopEditing: stopAdding,
    formRef,
  });

  const handleSubmitAddState = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitDisabled) return;

    const form = e.currentTarget;
    const formData: FormData = {
      statePhotoURL: form.statePhotoURL.value.trim(),
      stateName: form.stateName.value.trim(),
    };

    if (!formData.statePhotoURL || !formData.stateName) {
      toast('Please provide photo URL and state name');
      return;
    }

    const newState = {
      countryId: activeCountryId,
      international: activeCountryInternational,
      stateName: formData.stateName,
      stateInternational: formData.stateName,
      stateCode: generateStateCode(formData.stateName),
      statePhotoURL: formData.statePhotoURL,
      statePhotoAlt: `${formData.stateName}, ${activeCountryInternational}`,
      langCode: 'EN',
    };

    try {
      const addedStateEntities = (await addState(newState).unwrap())?.entities;
      if (!addedStateEntities) return;

      const addedStateName = Object.values(addedStateEntities).find(
        state => state?.stateInternational === formData.stateName
      )?.stateName;
      if (!addedStateName) return;

      toast.success(`State ${addedStateName} added`);

      setIsRefetchingCountries(true);
      await wait(1500);
      await getCountries();
      await getStates();
      setIsRefetchingCountries(false);
    } catch (error) {
      toast.error('State not added');
    } finally {
      setIsAddingState(false);
    }
  };

  const addLocationButtonLabel = isPending ? <Spinner /> : '+3';
  const submitAddLocationButtonLabel = isPending ? <Spinner /> : 'Add Loc 3';

  const showAddStateButton = isEng && !isAddingState && activeCountryId && (
    <AddLocationButton type="button" onClick={startAdding}>
      {addLocationButtonLabel}
    </AddLocationButton>
  );

  const showAddStateForm = isAddingState && (
    <Row>
      <AddStatePhotoLabel>
        <AddStatePhotoInput
          type="url"
          name="statePhotoURL"
          minLength={8}
          maxLength={300}
          required
          title="https://my-location.com/photo.jpg"
        />
        <p>Add photo link</p>
      </AddStatePhotoLabel>

      <AddStateNameLabel>
        <AddStateNameInput type="text" name="stateName" minLength={3} maxLength={50} required />
        <p>
          Add <b>state</b> name
        </p>
      </AddStateNameLabel>

      <SubmitAddLocationButton type="submit" disabled={isSubmitDisabled}>
        {submitAddLocationButtonLabel}
      </SubmitAddLocationButton>
    </Row>
  );

  return (
    <AddStateFormStyled onSubmit={handleSubmitAddState} ref={formRef}>
      {showAddStateButton}
      {showAddStateForm}
    </AddStateFormStyled>
  );
};
