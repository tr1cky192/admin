import type { EntityId } from '@reduxjs/toolkit';
import { Districts } from '../../District';
import { EditCityForm } from '../EditCityForm/EditCityForm';
import { CityItemStyled } from './CitiesList.styled';

export type CityItemProps = {
  cityId: EntityId;
  stateId: EntityId;
};

export const CityItem = ({ cityId, stateId }: CityItemProps) => (
  <CityItemStyled>
    <EditCityForm cityId={cityId} stateId={stateId} />

    <Districts cityId={cityId} stateId={stateId} />
  </CityItemStyled>
);
