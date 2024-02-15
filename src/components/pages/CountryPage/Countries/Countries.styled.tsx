import styled from 'styled-components/macro';
import { slideInLeft, slideOutLeft } from 'App/App.styled';

export const CountriesStyled = styled.div`
  width: 280px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 402px;
  }

  &.page-fade-enter {
    animation: ${slideInLeft} 0.2s forwards;
  }

  &.page-fade-exit {
    animation: ${slideOutLeft} 0.2s forwards;
  }
`;

export const CountryEditorWrapper = styled.div`
  position: relative;
`;

export const ShowEditorButton = styled.button`
  width: 100%;
  min-width: 250px;
  height: 59px;
  padding: 12px 18px;

  font-size: 27px;
  line-height: 1.33;
  font-family: ${({ theme }) => theme.fonts.segoe};
  color: ${({ theme }) => theme.colors.textThird};
  text-align: start;

  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border.list};
  border-radius: 10px;

  &:active {
    border-color: ${({ theme }) => theme.colors.title};
  }

  &:hover:not(:disabled) {
    border-color: ${({ theme }) => theme.colors.title};
  }
`;
