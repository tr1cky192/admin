import styled from 'styled-components/macro';

export const MainWrapper = styled.div<{ containerClass?: string }>`
  margin-top: 0;
  width: 100vw;
  height: 100vh;
  background: ${(props) => (props.containerClass === 'blue-background' ? '#C1D5E4' : 'linear-gradient(170.93deg, #b1e2a6 6.88%, rgba(81, 142, 68, 0) 94.72%)')};
  padding: 30px 0;
`;
