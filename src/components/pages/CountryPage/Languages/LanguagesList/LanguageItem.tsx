import type { EntityId } from '@reduxjs/toolkit';
import type { SelectLangType } from 'types/apis';
import { EditLanguageForm } from '../EditLanguageForm';
import slang from '../Languages.module.scss';

type LanguageItemProps = {
  languageItem: {
    languageId: EntityId;
    setActiveLanguage: SelectLangType;
  };
};

export const LanguageItem = ({ languageItem }: LanguageItemProps) => (
  <li className={slang.block_lang_li}>
    <EditLanguageForm languageItem={languageItem} />
  </li>
);
