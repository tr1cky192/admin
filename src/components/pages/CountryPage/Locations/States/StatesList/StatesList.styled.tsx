import styled from 'styled-components/macro';

export const StatesListStyled = styled.ul``;

export const StateItemStyled = styled.li`
  position: relative;

  border-bottom: 5px solid ${({ theme }) => theme.colors.border.list};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: grid;
    align-items: baseline;
    grid-template-columns: 31% 33% 36%;
  }

  /* @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {

  } */
`;

export const CitiesStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
