import { useAppSelector } from 'App';
import { selectStatesFromActiveCountry } from 'features/states';
import { StateItem } from './StateItem';
import { StatesListStyled } from './StatesList.styled';
// import { Grid } from '../virtualList';

export const StatesList = () => {
  const statesIds = useAppSelector(selectStatesFromActiveCountry);
  
  return (
    <StatesListStyled>
      {statesIds?.map(stateId => (
        <StateItem key={stateId} stateId={stateId} />
      ))}
    </StatesListStyled>
  );
};
