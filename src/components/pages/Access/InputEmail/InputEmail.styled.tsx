import styled from 'styled-components/macro';

export const Div = styled.div<{ hasValue: boolean}>`
  padding-top: ${props => (props.hasValue ? '0px' : '160px')};
  display: flex;
  justify-content: center;
`;

export const Input = styled.input`
  width: 265px;
  height: 39px;
  border: 1px solid #4c4c4c;
  border-radius: 3px;
  background: #ffffff;
  font-weight: 600;
  font-size: 13px;
  line-height: 17px;
  padding-top: 15px;
  padding-left: 17px;
`;

export const Message = styled.span`
  position: absolute;
  top: 132px;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  color: #ed1e1e;
`;

export const Placeholder = styled.p<{ hasValue: boolean; isFocused: boolean }>`
  position: absolute;
  font-weight: 600;
  top: ${props => (props.hasValue || props.isFocused ? '163px' : '173px')};
  margin-left: ${props => (props.hasValue || props.isFocused ? '9px' : '10px')};
  font-size: ${props => (props.hasValue || props.isFocused ? '10px' : '12px')};
  color: ${props => (props.hasValue || props.isFocused ? '#787878' : '#4c4c4c')};
  transition: font-size 0.2s;
`;
