import type { EntityId } from '@reduxjs/toolkit';
import { ListLoader } from 'components/shared/Loader/Loader';
import { useGetLanguagesQuery } from 'features/languages';
import type { SelectLangType } from 'types/apis';
import slang from '../Languages.module.scss';
import { LanguageItem } from './LanguageItem';

type LanguagesListProps = {
  setActiveLanguage: SelectLangType;
  languagesIds: EntityId[];
};

export const LanguagesList = ({ setActiveLanguage, languagesIds }: LanguagesListProps) => {
  const { isLoading } = useGetLanguagesQuery();

  const showLanguagesList = !languagesIds.length
    ? isLoading && <ListLoader height={320} />
    : languagesIds.map(languageId => (
        <LanguageItem key={languageId} languageItem={{ languageId, setActiveLanguage }} />
      ));

  return <ul className={slang.block_lang_ul}>{showLanguagesList}</ul>;
};
