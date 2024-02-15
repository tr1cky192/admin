import type { EntityId } from '@reduxjs/toolkit';
import { useAppSelector } from 'App';
import { selectStateById } from 'features/states';
import { CitiesListStyled } from './CitiesList.styled';
import { CityItem } from './CityItem';

type CitiesListProps = {
  stateId: EntityId;
};

export const CitiesList = ({ stateId }: CitiesListProps) => {
  const citiesIds = useAppSelector(state => selectStateById(state, stateId))?.cities;

  return (
    <CitiesListStyled>
      {citiesIds?.map(cityId => (
        <CityItem key={cityId} cityId={cityId} stateId={stateId} />
      ))}
    </CitiesListStyled>
  );
};
