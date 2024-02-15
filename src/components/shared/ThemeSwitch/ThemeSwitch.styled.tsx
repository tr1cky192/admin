import styled from 'styled-components/macro';

export const ThemeSwitchStyled = styled.div`
  display: flex;
  gap: 8px;

  padding: 0 12px;

  opacity: 0.21;

  transition: opacity ${({ theme }) => theme.transition[160]};

  :hover,
  :focus-within {
    opacity: 0.99;
  }
`;

export const ThemeSwitchButtonLight = styled.button`
  padding: 2px 8px;
  font-size: clamp(16px, 2vw, 24px);
  background-color: #ededed;
  border-radius: 20px;
`;

export const ThemeSwitchButtonDark = styled(ThemeSwitchButtonLight)`
  background-color: #292929;
`;
