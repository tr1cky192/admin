import { useCallback } from 'react';
import { useAppDispatch } from 'App';
import type { SelectLanguageType } from 'types/apis';
import { chooseLanguage } from 'features/languages';
import { setActiveCountryId } from 'features/countries';

export const useSetActiveLanguage = (closeModal: () => void) => {
  const appDispatch = useAppDispatch();

  const setActiveLanguage = useCallback(
    (newActiveLanguageId: SelectLanguageType) => {
      if (!newActiveLanguageId) return;

      appDispatch(chooseLanguage(newActiveLanguageId));

      appDispatch(setActiveCountryId());

      closeModal();
    },
    [appDispatch, closeModal]
  );

  return setActiveLanguage;
};
