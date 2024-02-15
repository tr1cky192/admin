import styled from 'styled-components/macro';


export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 19px;

  max-width: 320px;
  height: 380px;

  padding: 17px 16px 24px;

  background:${({ theme }) => theme.colors.bgColorChat};
  border-radius: 0px 0px 10px 10px;
`;








