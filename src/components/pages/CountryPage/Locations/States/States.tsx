import type { ReactNode } from 'react';
import { useGetCitiesQuery } from 'features/cities';
import { useGetDistrictsQuery } from 'features/districts';
import { useGetStatesQuery } from 'features/states';
import { StatesStyled } from './States.styled';

export const States = ({ children }: { children?: ReactNode }) => {
  useGetStatesQuery();
  useGetCitiesQuery();
  useGetDistrictsQuery();

  return <StatesStyled>{children}</StatesStyled>;
};
