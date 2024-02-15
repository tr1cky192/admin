import { LocationsWrapper } from './Locations.styled';
import { AddStateForm, States, StatesList } from './States';
import { TableHeader } from './TableHeader';

export const Locations = () => (
  <LocationsWrapper>
    <TableHeader />

    <States>
      <StatesList />

      <AddStateForm />
    </States>
  </LocationsWrapper>
);
