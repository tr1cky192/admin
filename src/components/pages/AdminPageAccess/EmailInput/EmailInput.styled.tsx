import styled from 'styled-components/macro';

export const EmailInputStyled = styled.div`
  padding-top: 46px;
  position: relative;
`;

export const ErrorEmail = styled.span`
  font-family: 'Segoe UI';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  color: #fe6d6d;
  position: absolute;
  top: 25px;
`;

export const Input = styled.input<{ error: boolean }>`
  height: 48px;
  width: 410px;
  font-size: 20px;
  line-height: 27px;
  font-weight: 400;
  border: 1px solid ${({ theme }) => theme.colors.textFourth};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.bg.buttonAddLocation};
  font-family: ${({ theme }) => theme.fonts.segoe};
  color: ${({ theme }) => theme.colors.textThird};
  &:focus {
    outline: none;
    border: 1px solid #6dbffe;
  }
  ${({ error }) =>
    error &&
    `
    outline: none;
    border: 2px solid red;
  `}
`;
