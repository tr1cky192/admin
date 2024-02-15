import styled from 'styled-components/macro';

export const List = styled.ul`
  margin: 0;
  padding: 0;
`;
export const Item = styled.li`
  position: relative;
  width: 115px;
  height: 115px;
  border-radius: 5px;

  &:first-child {
    margin-bottom: 14px;
  }
`;
export const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
`;

