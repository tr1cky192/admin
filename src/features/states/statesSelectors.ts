import type { EntityId } from '@reduxjs/toolkit';
import type { RootState } from 'App/store';
import { createSelector } from '@reduxjs/toolkit';
import { selectActiveCountryId, selectCountriesEntities } from 'features/countries';
import { statesAdapter, statesInitialState } from './statesAdapter';
import { selectStatesResult } from './statesApi';

const selectStatesData = createSelector(selectStatesResult, result => result.data);

export const {
  selectEntities: selectStatesEntities,
  selectById: selectStateById,
  selectIds: selectStatesIds,
} = statesAdapter.getSelectors<RootState>(state => selectStatesData(state) ?? statesInitialState);

export const makeSelectStateInternational = (stateId: EntityId) =>
  createSelector(selectStatesEntities, statesEntities =>
    stateId ? statesEntities[stateId]?.stateInternational : undefined
  );

export const selectStatesFromActiveCountry = createSelector(
  selectActiveCountryId,
  selectCountriesEntities,
  (id, entities) => (id ? entities[id]?.states : undefined)
);
