import styled from 'styled-components/macro';

export const BackButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 70px;
  height: 49px;
  margin-right: 8px;
  padding: 10px;

  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 10px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-right: 16px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-right: 36px;
  }

  :hover {
    background-color: ${({ theme }) => theme.colors.bgTransparent.buttonGoBackHover};
  }

  :active {
    background-color: ${({ theme }) => theme.colors.bgTransparent.buttonCancelDeleteHover};
    border-color: transparent;
  }
`;
