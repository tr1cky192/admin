import styled from 'styled-components/macro';

export const CountryListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  gap: 12px;

  max-height: 300px;
  padding: 16px 12px;
  overflow-y: auto;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 32px 40px 32px;
  }
`;

export const CountryItemStyled = styled.li``;
