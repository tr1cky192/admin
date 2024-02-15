import styled from 'styled-components/macro';

export const PasswordFieldWrapper = styled.div`
  margin-top: 16px;
`;

export const Input = styled.input`
  width: 265px;
  height: 39px;
  padding-left: 15px;
  margin: 2px 0;
  font-weight: 600;
  font-size: 22px;
  line-height: 29px;
  color: #4c4c4c;
  background: #ffffff;
  border: 1px solid #4c4c4c;
  border-radius: 3px;
`;

export const EnterPass = styled.p`
  width: 265px;
  height: 32px;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  color: #006bbe;
`;

export const VerifPass = styled.p`
  position: absolute;
  width: 265px;
  height: 15px;
  text-align: center;
  font-weight: 600;
  font-size: 11px;
  line-height: 15px;
  color: #006bbe;
`;

export const NotVerifPass = styled.p`
  width: 265px;
  height: 16px;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  color: #ed1e1e;
`;
