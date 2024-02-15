import type { RootState } from 'App/store';
import { createSelector } from '@reduxjs/toolkit';
import { countriesAdapter, countriesInitialState } from './countriesAdapter';
import { selectCountriesResult } from './countriesApi';
import { selectActiveCountryId } from './countriesSlice';

/** Creates memoized selector
 * returns normalized state object with ids and entities */
const selectCountriesData = createSelector(selectCountriesResult, result => result.data);

export const {
  selectEntities: selectCountriesEntities,
  selectById: selectCountryById,
  selectIds: selectCountriesIds,
} = countriesAdapter.getSelectors<RootState>(
  state => selectCountriesData(state) ?? countriesInitialState
);

export const selectActiveCountry = createSelector(
  selectCountriesEntities,
  selectActiveCountryId,
  (countriesEntities, id) => (id ? countriesEntities[id] : undefined)
);

export const selectActiveCountryName = createSelector(
  selectActiveCountry,
  activeCountry => activeCountry?.country
);

export const selectActiveCountryInternational = createSelector(
  selectActiveCountry,
  activeCountry => activeCountry?.international
);
