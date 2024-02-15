import styled from 'styled-components/macro';

export const Img = styled.img`
  width: 48px;
  height: 48px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  /* margin-left: 47px; */
  margin: 0 auto;
`;

export const Text = styled.span`
  font-family: 'Segoe UI';
  font-style: normal;
  font-weight: 400;
  font-size: 9px;
  line-height: 12px;
  display: flex;
  justify-content: center;
  color: #4c4c4c;
`;
export const ListWrapper = styled.div`
  margin-top: 5px;
  margin-bottom: 12px;
`;
export const List = styled.ul`
  max-width: 230px;
  gap: 18px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
export const Item = styled.li`
  width: 64px;
  height: 64px;
`;
