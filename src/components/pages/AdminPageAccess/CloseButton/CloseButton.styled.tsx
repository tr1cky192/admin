import styled from 'styled-components/macro';

export const CloseButtonStyled = styled.button`
  float: right;
  width: 50px;
  height: 50px;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 10px;

  :hover {
    background-color: ${({ theme }) => theme.colors.bgTransparent.buttonGoBackHover};
  }

  :active {
    background-color: ${({ theme }) => theme.colors.bgTransparent.buttonCancelDeleteHover};
  }
`;
