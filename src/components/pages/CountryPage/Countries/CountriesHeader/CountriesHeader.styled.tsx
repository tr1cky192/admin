import styled from 'styled-components/macro';

export const CountriesHeaderStyled = styled.header`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;

  margin-bottom: 16px;
  padding-top: 16px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 20px;
    margin-bottom: 28px;
    padding-top: 32px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    gap: 54px;
    margin-bottom: 28px;
  }
`;
