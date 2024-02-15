import type { FormEvent, RefObject } from 'react';
import type { EntityId } from '@reduxjs/toolkit';
import type { EditLanguage, SelectLangType } from 'types/apis';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useAppSelector } from 'App';
import { toast } from 'react-toastify';
import {
  selectActiveLangCode,
  selectActiveLanguageId,
  selectLanguageById,
  useEditLanguageMutation,
} from 'features/languages';
import { EditButton, SubmitAddLocationButton } from 'components/shared/Buttons';
import { Spinner } from 'components/shared/Loader';
import { isEdited } from 'common/utils';
import {
  LanguageInputLabel,
  EditLanguageFormStyled,
  EditLanguageInput,
  LanguageItemContent,
  LangCodeStyled,
} from './EditLanguageForm.styled';

export type EditLanguageFormType = {
  languageItem: {
    languageId: EntityId;
    setActiveLanguage: SelectLangType;
  };
};

type OutsideClickProps = {
  formRef: RefObject<HTMLFormElement>;
  isEditingLanguage: boolean;
  stopEditing: () => void;
};

const useOnOutsideClickClose = ({ formRef, isEditingLanguage, stopEditing }: OutsideClickProps) => {
  useEffect(() => {
    if (!isEditingLanguage) return () => undefined;

    const onOutsideFormClickReset = (e: MouseEvent) => {
      const { target } = e;
      if (!(target instanceof Node)) return;
      if (!formRef.current || formRef.current.contains(target)) return;

      formRef.current.reset();
      stopEditing();
    };

    const timer = setTimeout(() => {
      document.addEventListener('mousedown', onOutsideFormClickReset, {
        passive: true,
        capture: true,
      });
    }, 0);

    const clear = () => {
      clearTimeout(timer);
      document.removeEventListener('mousedown', onOutsideFormClickReset, { capture: true });
      stopEditing();
    };

    return clear;
  }, [formRef, isEditingLanguage, stopEditing]);
};

export const EditLanguageForm = ({
  languageItem: { languageId, setActiveLanguage },
}: EditLanguageFormType) => {
  const [editLanguage, { isLoading: isLoadingEditedLanguage }] = useEditLanguageMutation();

  const languageObj = useAppSelector(state => selectLanguageById(state, languageId));
  const activeLangId = useAppSelector(selectActiveLanguageId);
  const activeLangCode = useAppSelector(selectActiveLangCode);
  const formRef = useRef<HTMLFormElement>(null);

  const [isEditingLanguage, setIsEditingLanguage] = useState(false);
  const startEditing = useCallback(() => setIsEditingLanguage(true), []);
  const stopEditing = useCallback(() => setIsEditingLanguage(false), []);

  const onClickChooseActiveLanguageId = useCallback(async () => {
    if (isEditingLanguage) return;

    setActiveLanguage(languageObj?._id);
  }, [isEditingLanguage, languageObj?._id, setActiveLanguage]);

  useOnOutsideClickClose({ formRef, isEditingLanguage, stopEditing });

  if (!languageObj || !Object.values(languageObj).every(Boolean)) return null;

  const { _id: id, lang, code, createdAt, updatedAt } = languageObj;

  const isPending = isLoadingEditedLanguage;
  const isSubmitDisabled = !lang || !code || isPending || !activeLangId || !activeLangCode;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const editedLanguageName = formData.get('languageName')?.toString().trim();

    if (isSubmitDisabled || !editedLanguageName) {
      toast.info('Please provide language');
      return;
    }

    const editedLanguage: EditLanguage = {
      _id: id,
      lang: editedLanguageName,
      code,
    };

    try {
      const editedResponse = await editLanguage(editedLanguage).unwrap();
      if (!editedResponse) return;

      const updatedLanguageName = editedResponse.entities[languageObj._id]?.lang;
      if (!updatedLanguageName) return;

      toast.success(`Language ${updatedLanguageName} updated!`);
    } catch (error) {
      toast.error(JSON.stringify(error));
    } finally {
      stopEditing();
    }
  };

  const editLanguageFormInterface = (
    <LanguageItemContent onClick={onClickChooseActiveLanguageId}>
      <LanguageInputLabel>
        <EditLanguageInput
          type="text"
          name="languageName"
          defaultValue={lang}
          disabled={!isEditingLanguage}
        />
      </LanguageInputLabel>

      <LangCodeStyled>{code}</LangCodeStyled>
    </LanguageItemContent>
  );

  const isFirstEdit = !isEdited(createdAt, updatedAt);

  const submitAddLocationButtonLabel = isPending ? <Spinner /> : 'Done';

  const showOverlay = (
    <>
      {!isEditingLanguage && (
        <EditButton onClick={startEditing} $isFirstEdit={isFirstEdit} disabled={isSubmitDisabled} />
      )}

      {isEditingLanguage && (
        <SubmitAddLocationButton type="submit" disabled={isSubmitDisabled}>
          {submitAddLocationButtonLabel}
        </SubmitAddLocationButton>
      )}
    </>
  );

  return (
    <EditLanguageFormStyled onSubmit={handleSubmit} ref={formRef}>
      {editLanguageFormInterface}

      {showOverlay}
    </EditLanguageFormStyled>
  );
};
