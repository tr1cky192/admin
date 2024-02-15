import type { EntityId } from '@reduxjs/toolkit';
import { Cities } from '../../Cities';
import { EditStateForm } from '../EditStateForm';
import { StateItemStyled } from './StatesList.styled';

type StateItemType = {
  stateId: EntityId;
};

export const StateItem = ({ stateId }: StateItemType) => (
  <StateItemStyled>
    <EditStateForm stateId={stateId} />

    <Cities stateId={stateId} />
  </StateItemStyled>
);
