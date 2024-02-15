import styled from 'styled-components/macro';

export const UrlDirButtonStyled = styled.button.attrs(
  ({
    $isEnabled = false,
    variable = 'green',
  }: {
    $isEnabled?: boolean;
    variable?: 'green' | 'purple' | 'white';
  }) => ({
    $isEnabled,
    variable,
  })
)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 30px;
  font-weight: 700;
  font-size: 11px;
  line-height: 15px;
  font-family: ${({ theme }) => theme.fonts.segoe};
  text-align: center;
  border: none;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);

  ${({ variable, $isEnabled }) =>
    variable === 'green'
      ? `
      color: #fff;
      background-color: ${$isEnabled ? '#6AFF79' : '#9FC9A3'};
    `
      : `
      color: ${$isEnabled ? '#fff' : '#008AFF'};
      background-color: ${$isEnabled ? '#AFB4F1' : '#fff'};
    `};
`;
