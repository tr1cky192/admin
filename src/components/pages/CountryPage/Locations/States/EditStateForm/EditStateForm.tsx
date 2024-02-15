import type { EntityId } from '@reduxjs/toolkit';
import { useAppSelector } from 'App';
import { useCloseOnOutsideClick } from 'common/hooks';
import { EditButton, SubmitAddLocationButton, ButtonsOverlay } from 'components/shared/Buttons';
import { selectActiveCountryName } from 'features/countries';
import { selectActiveLangCode, selectIsEnglishActiveLang } from 'features/languages';
import { useEditStateMutation, selectStateById } from 'features/states';
import type { FormEvent } from 'react';
import { useState, useRef, useCallback } from 'react';
import { toast } from 'react-toastify';
import type { EditState } from 'types/apis';
import {
  StateInfo,
  StateNameLabel,
  StateNameInput,
  EditStatePhotoLabel,
  EditStatePhotoURLInput,
  EditStateFormStyled,
} from './EditStateForm.styled';

type EditStateFormProps = {
  stateId: EntityId;
};

export const EditStateForm = ({ stateId }: EditStateFormProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editState, { isLoading }] = useEditStateMutation();
  const stateObj = useAppSelector(state => selectStateById(state, stateId));
  const activeLangCode = useAppSelector(selectActiveLangCode);
  const activeCountryName = useAppSelector(selectActiveCountryName);
  const isEng = useAppSelector(selectIsEnglishActiveLang);
  const formRef = useRef<HTMLFormElement>(null);

  const startEditing = useCallback(() => setIsEditing(true), []);
  const stopEditing = useCallback(() => setIsEditing(false), []);

  useCloseOnOutsideClick({
    isEditing,
    stopEditing,
    formRef,
  });

  if (!stateObj) return null;

  const {
    countryId,
    international,
    stateName,
    stateInternational,
    stateCode,
    statePhotoURL,
    langCode,
  } = stateObj;

  const isInputDisabled = !isEditing;
  const isEditButtonDisabled = isEditing || isLoading;
  const isSubmitDisabled = isLoading;
  const $isFirstEdit = langCode === 'EN' && !isEng;

  const handleSubmitEditState = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitDisabled) return;
    if (!activeLangCode || !activeCountryName) {
      toast('Please select language and country');
      return;
    }
    const form = e.currentTarget;

    const formData = new FormData(form);
    const stateNameTrimmed = formData.get('stateName')?.toString()?.trim();
    const statePhotoURLTrimmed = formData.get('statePhotoURL')?.toString()?.trim();
    if (!stateNameTrimmed || !statePhotoURLTrimmed) {
      toast('Please provide photo url and State name');
      return;
    }

    const statePhotoAltLocalLang = `${stateNameTrimmed}, ${activeCountryName}`;

    const updatedState: EditState = {
      countryId,
      _id: stateId,
      international,
      stateName: stateNameTrimmed,
      statePhotoURL: statePhotoURLTrimmed,
      statePhotoAlt: statePhotoAltLocalLang,
      langCode: activeLangCode,
      stateInternational,
      stateCode,
    };

    try {
      const edited = await editState(updatedState).unwrap();
      const editedStateName = edited?.entities[stateId]?.stateName;
      if (editedStateName) {
        toast.success(`${editedStateName} state updated!`);
      }
    } catch (error) {
      toast.error('Cannot save the State now');
    } finally {
      setIsEditing(false);
    }
  };

  const showEditStateFormInterface = (
    <StateInfo>
      <StateNameLabel>
        <span>State &nbsp;</span>
        <StateNameInput
          type="text"
          name="stateName"
          defaultValue={stateName}
          disabled={isInputDisabled}
          maxLength={30}
          minLength={2}
          required
        />
      </StateNameLabel>

      <EditStatePhotoLabel>
        <span>Photo</span>
        <EditStatePhotoURLInput
          type="url"
          name="statePhotoURL"
          defaultValue={statePhotoURL}
          disabled={isInputDisabled}
          maxLength={300}
          minLength={8}
          required
          title={statePhotoURL}
        />
      </EditStatePhotoLabel>
    </StateInfo>
  );

  const showEditButtons = !isEditing && (
    <EditButton
      $isFirstEdit={$isFirstEdit}
      onClick={startEditing}
      disabled={isEditButtonDisabled}
    />
  );

  const showSubmitButton = isEditing && (
    <SubmitAddLocationButton type="submit" disabled={isSubmitDisabled}>
      Done
    </SubmitAddLocationButton>
  );

  const showButtonsOverlay = (
    <ButtonsOverlay $isEditing={isEditing}>
      {showEditButtons}
      {showSubmitButton}
    </ButtonsOverlay>
  );

  return (
    <EditStateFormStyled onSubmit={handleSubmitEditState} ref={formRef}>
      {showEditStateFormInterface}
      {showButtonsOverlay}
    </EditStateFormStyled>
  );
};
