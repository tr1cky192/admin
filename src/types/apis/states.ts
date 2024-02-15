import type { EntityId, EntityState } from '@reduxjs/toolkit';
import type { City } from './cities';

export type State = {
  countryId: EntityId;
  international: string;

  _id: EntityId;
  stateName: string;
  stateInternational: string;
  stateCode: string;
  statePhotoURL: string;
  statePhotoAlt: string;

  cities: City[];
  langCode: string;
  dbLangCode: string;

  createdAt: string;
  updatedAt: string;
};

export type StateWithCitiesIds = Omit<State, 'cities'> & {
  cities: EntityId[];
};

export type AddState = Omit<State, '_id' | 'cities' | 'dbLangCode' | 'createdAt' | 'updatedAt'>;
export type EditState = Omit<State, 'cities' | 'dbLangCode' | 'createdAt' | 'updatedAt'>;

export type MaybeStatesEntity = EntityState<StateWithCitiesIds> | undefined;
export type DeleteState = EntityId;
