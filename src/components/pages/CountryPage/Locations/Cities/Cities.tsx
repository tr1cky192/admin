import type { EntityId } from '@reduxjs/toolkit';
import { CitiesStyled } from './Cities.styled';
import { CitiesList } from './CitiesList';
import { AddCityForm } from './AddCityForm';

type CitiesProps = {
  stateId: EntityId;
};

export const Cities = ({ stateId }: CitiesProps) => (
  <CitiesStyled>
    <CitiesList stateId={stateId} />

    <AddCityForm stateId={stateId} />
  </CitiesStyled>
);
