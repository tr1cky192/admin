import { createEntityAdapter } from '@reduxjs/toolkit';
import { getManyCities, getOneCity, getOneCityId } from 'features/api';
import type { CityWithDistrictsIds, ManyCities, OneCity } from 'types/apis';

export const citiesAdapter = createEntityAdapter<CityWithDistrictsIds>({
  selectId: city => city._id,
  sortComparer: (a, b) => b.createdAt.localeCompare(a.createdAt),
});

export const citiesInitState = citiesAdapter.getInitialState();

/** @returns object { ids; entities } saved to RTK Query endpoint via citiesAdapter.setAll */
export const saveManyCities = (result?: ManyCities) => {
  const cities = getManyCities(result);

  const citiesWithoutNestedDistricts = cities.map(({ districts, ...city }) => ({
    ...city,
    districts: districts.map(({ _id }) => _id),
  }));

  return citiesAdapter.setAll(citiesInitState, citiesWithoutNestedDistricts);
};

/** @returns object { ids; entities } saved to RTK Query endpoint via citiesAdapter.upsertOne */
export const saveOneCity = (result?: OneCity) => {
  const city = getOneCity(result);
  return city ? citiesAdapter.upsertOne(citiesInitState, city) : undefined;
};

/** @returns object { ids; entities } saved to RTK Query endpoint via citiesAdapter.removeOne */
export const removeCity = (result?: OneCity) => {
  const id = getOneCityId(result);
  return id ? citiesAdapter.removeOne(citiesInitState, id) : undefined;
};
