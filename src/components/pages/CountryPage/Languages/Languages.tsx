import type { ReactNode } from 'react';
import type { EntityId } from '@reduxjs/toolkit';
import { useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from 'App';
import { useModal, useSetActiveLanguage } from 'common/hooks';
import {
  chooseLanguage,
  selectEnglishLanguageId,
  selectLanguagesIds,
  useGetLanguagesQuery,
} from 'features/languages';
import { Modal } from 'components/shared/Modal/Modal';
import { ActiveLangButtonContainer } from './AdditionalItems';
import { LanguagesList } from './LanguagesList';
import { AddLanguageForm } from './AddLanguageForm';
import slang from './Languages.module.scss';

type ModalContentProps = {
  closeModal: () => void;
  languagesIds: EntityId[];
};

const LanguageModalContent = ({ closeModal, languagesIds }: ModalContentProps) => {
  const setActiveLanguage = useSetActiveLanguage(closeModal);

  return (
    <div className={slang.container_add_lang}>
      <div className={slang.block_lang}>
        <LanguagesList languagesIds={languagesIds} setActiveLanguage={setActiveLanguage} />
      </div>

      <AddLanguageForm setActiveLanguage={setActiveLanguage} closeModal={closeModal} />
    </div>
  );
};

export const SelectLanguages = () => {
  const { showModal, openModal, closeModal } = useModal();
  const languagesIds = useAppSelector(selectLanguagesIds);

  const isModalOpen = showModal && (
    <Modal closeModal={closeModal}>
      <LanguageModalContent languagesIds={languagesIds} closeModal={closeModal} />
    </Modal>
  );

  return (
    <div>
      <ActiveLangButtonContainer openModal={openModal} />

      {isModalOpen}
    </div>
  );
};

export const Languages = ({ children }: { children?: ReactNode }) => {
  useGetLanguagesQuery();

  const appDispatch = useAppDispatch();
  const englishId = useAppSelector(selectEnglishLanguageId);
  const isDefaultSelected = useRef(false);

  useEffect(() => {
    if (isDefaultSelected.current || !englishId) return;
    appDispatch(chooseLanguage(englishId));

    isDefaultSelected.current = true;
  }, [appDispatch, englishId]);

  return <div>{children}</div>;
};
