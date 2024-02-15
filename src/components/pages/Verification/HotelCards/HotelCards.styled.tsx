import styled from 'styled-components/macro';

export const Card = styled.div`
  width: 320px;
  height: 141px;
  display: flex;
  justify-content: flex-start;
  margin: 0 auto;
  margin-bottom: 5px;
  padding-left: 6px;
  padding-right: 13px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.18);
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    border: 1px solid #4c4c4c;
  }

  &:last-child {
    margin-bottom: 0px;
  }
 
`;
export const CardPhoto = styled.div`
  position: relative;

  margin-top: 14px;
`;

