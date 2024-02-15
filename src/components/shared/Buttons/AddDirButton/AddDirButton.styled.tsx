import styled from 'styled-components/macro';

export const AddDirButtonStyled = styled.button.attrs(
  ({ $isEnabled = false }: { $isEnabled?: boolean }) => ({
    $isEnabled,
  })
)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 48px;
  height: 30px;
  padding: 0;

  font-weight: 700;
  font-size: 10px;
  line-height: 1.3;
  font-family: ${({ theme }) => theme.fonts.segoe};
  color: #212121;

  text-align: center;

  background-color: ${({ theme, $isEnabled }) =>
    $isEnabled ? theme.colors.bg.buttonAddDirHotelier : '#9FC9A3'};

  border: 1px solid transparent;
  border-radius: 2px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
`;
