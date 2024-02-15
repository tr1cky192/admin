import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from 'App/store';
import { districtsAdapter, districtsInitState } from './districtsAdapter';
import { selectDistrictsResult } from './districtsApi';

const selectDistrictsData = createSelector(selectDistrictsResult, result => result.data);

export const {
  selectEntities: selectDistrictsEntities,
  selectById: selectDistrictById,
  selectIds: selectDistrictsIds,
} = districtsAdapter.getSelectors<RootState>(
  state => selectDistrictsData(state) ?? districtsInitState
);
