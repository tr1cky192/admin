import { createEntityAdapter } from '@reduxjs/toolkit';
import type { OneLanguageInArray } from 'features/api';
import { getManyLanguages, getOneLanguage, getOneLanguageId } from 'features/api';
import type { LanguageWithCountriesIds, ManyLanguages } from 'types/apis';

export const languagesAdapter = createEntityAdapter<LanguageWithCountriesIds>({
  selectId: language => language._id,
  sortComparer: (a, b) => b.createdAt.localeCompare(a.createdAt),
});

export const languagesInitState = languagesAdapter.getInitialState();

/** @returns object { ids; entities } saved to RTK Query endpoint via languagesAdapter.setAll */
export const saveManyLanguages = (result?: ManyLanguages) => {
  const languages = getManyLanguages(result);

  const languagesWithoutNestedCountries = languages.map(({ countries, ...language }) => ({
    ...language,
    countries: countries.map(({ _id }) => _id),
  }));

  return languagesAdapter.setAll(languagesInitState, languagesWithoutNestedCountries);
};

/** @returns object { ids; entities } saved to RTK Query endpoint via languagesAdapter.upsertOne */
export const saveOneLanguage = (result?: OneLanguageInArray) => {
  const language = getOneLanguage(result);
  return language ? languagesAdapter.upsertOne(languagesInitState, language) : undefined;
};

/** @returns object { ids; entities } saved to RTK Query endpoint via languagesAdapter.removeOne */
export const removeLanguage = (result?: OneLanguageInArray) => {
  const id = getOneLanguageId(result);
  return id ? languagesAdapter.removeOne(languagesInitState, id) : undefined;
};
