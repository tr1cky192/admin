import styled from 'styled-components/macro';

export const AppBarStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 30px;

  height: 50px;
  padding: 0 30px;
  overflow: hidden;

  font-size: calc(10px + 2vmin);
  color: white;

  background-color: ${({ theme }) => theme.colors.bg.body};
`;
