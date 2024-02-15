import styled from 'styled-components/macro';

export const Div = styled.div`
  margin-left: 315px;
  margin-top: -40px;
`;

export const ButtonStyled = styled.button`
  width: 113px;
  height: 39px;
  border-radius: 3px;
  font-family: 'Segoe UI';
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
  text-align: center;
  color: #ffffff;
  background: #0090ff;
  border: none;

  &:hover {
    background: rgba(0, 144, 255, 0.8);
  }
  &:active {
    background: rgba(0, 144, 255, 0.6);
  }
`;
