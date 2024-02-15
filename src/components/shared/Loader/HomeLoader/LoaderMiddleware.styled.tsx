import styled from 'styled-components/macro';

export const HomeNavItem = styled.li`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  width: 290px;
  height: 290px;

  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border.list};
  border-radius: 9px;
  box-shadow: 0 0 9px 2px ${({ theme }) => theme.shadows.quarterBlack};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  font-weight: 500;
  font-size: 27px;
  line-height: 1.17;
  font-family: ${({ theme }) => theme.fonts.roboto};
  color: ${({ theme }) => theme.colors.textPrimary};
  text-align: center;
  transition: color ${({ theme }) => theme.transition[110]};
`;