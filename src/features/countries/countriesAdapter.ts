import { createEntityAdapter } from '@reduxjs/toolkit';
import { getManyCountries, getOneCountry, getOneCountryId } from 'features/api';
import type { Country, ManyCountries, OneCountry } from 'types/apis';

export const countriesAdapter = createEntityAdapter<Country>({
  selectId: country => country._id,
  sortComparer: (a, b) => b.createdAt.localeCompare(a.createdAt),
});

export const countriesInitialState = countriesAdapter.getInitialState();

/** @returns Saved to redux countries from countriesAdapter */
export const saveManyCountries = (result?: ManyCountries) => {
  const countries = getManyCountries(result);
  return countriesAdapter.setAll(countriesInitialState, countries);
};

/** @returns Saved to redux countries from countriesAdapter */
export const saveOneCountry = (result?: OneCountry) => {
  const country = getOneCountry(result);
  return country ? countriesAdapter.upsertOne(countriesInitialState, country) : undefined;
};

/** @returns Saved to redux countries from countriesAdapter */
export const removeCountry = (result?: OneCountry) => {
  const id = getOneCountryId(result);
  return id ? countriesAdapter.removeOne(countriesInitialState, id) : undefined;
};
