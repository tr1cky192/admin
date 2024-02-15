import { createEntityAdapter } from '@reduxjs/toolkit';
import { getManyDistricts, getOneDistrict, getOneDistrictId } from 'features/api';
import type { District, ManyDistricts, OneDistrict } from 'types/apis';

export const districtsAdapter = createEntityAdapter<District>({
  selectId: district => district._id,
  sortComparer: (a, b) => b.createdAt.localeCompare(a.createdAt),
});

export const districtsInitState = districtsAdapter.getInitialState();

/** @returns object { ids; entities } saved to RTK Query endpoint via languagesAdapter.setAll */
export const saveManyDistricts = (result: ManyDistricts) => {
  const districts = getManyDistricts(result);
  return districtsAdapter.setAll(districtsInitState, districts);
};

/** @returns object { ids; entities } saved to RTK Query endpoint via languagesAdapter.upsertOne */
export const saveOneDistrict = (result: OneDistrict) => {
  const district = getOneDistrict(result);
  return district ? districtsAdapter.upsertOne(districtsInitState, district) : undefined;
};

/** @returns object { ids; entities } saved to RTK Query endpoint via languagesAdapter.removeOne */
export const removeDistrict = (result: OneDistrict) => {
  const id = getOneDistrictId(result);
  return id ? districtsAdapter.removeOne(districtsInitState, id) : undefined;
};
