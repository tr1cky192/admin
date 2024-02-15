import styled from 'styled-components/macro';

export const SendButtonStyled = styled.div`
  padding: 28px 0px;
`;

export const Button = styled.button`
  width: 265px;
  height: 39px;
  border-radius: 3px;
  font-family: 'Segoe UI';
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
  text-align: center;
  color: white;
  background: #0090ff;
  border: none;

  &:hover {
    background: rgba(0, 144, 255, 0.7);
  }
  &:active {
    background: #006bbe;
  }
`;