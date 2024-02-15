import styled from 'styled-components/macro';

import iconCheckmark from 'assets/icons/checkmark.png';

export const ShowLanguagesButton = styled.button`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  width: 100%;
  min-width: 250px;
  height: 59px;
  padding: 12px 18px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 369px;
  }

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

  &::after {
    position: absolute;
    right: 12px;
    z-index: 2;

    width: 20px;
    height: 20px;
    content: '';

    background-image: url(${iconCheckmark});
    background-repeat: no-repeat;
    background-position: center;
  }
`;
