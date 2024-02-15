import { createEntityAdapter } from '@reduxjs/toolkit';
import { getManyStates, getOneState, getOneStateId } from 'features/api';
import type { ManyStates, OneState, StateWithCitiesIds } from 'types/apis';

export const statesAdapter = createEntityAdapter<StateWithCitiesIds>({
  selectId: state => state._id,
  sortComparer: (a, b) => b.createdAt.localeCompare(a.createdAt),
});

export const statesInitialState = statesAdapter.getInitialState();

/** @returns object { ids; entities } saved to RTK Query endpoint via statesAdapter.setAll */
export const saveManyStates = (result?: ManyStates) => {
  const states = getManyStates(result);

  const statesWithoutNestedCities = states.map(({ cities, ...state }) => ({
    ...state,
    cities: cities.map(({ _id }) => _id),
  }));

  return statesAdapter.setAll(statesInitialState, statesWithoutNestedCities);
};

export const saveOneState = (result?: OneState) => {
  const state = getOneState(result);
  const saved = state ? statesAdapter.upsertOne(statesInitialState, state) : undefined;
  return saved;
};

export const removeState = (result?: OneState) => {
  const id = getOneStateId(result);
  return id ? statesAdapter.removeOne(statesInitialState, id) : undefined;
};
