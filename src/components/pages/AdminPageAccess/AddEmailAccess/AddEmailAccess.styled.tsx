import styled from 'styled-components/macro';

export const MainDiv = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-top: 50px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: 80px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-top: 100px;
  }
  display: flex;
  justify-content: center;
  z-index: 2;
  position: relative;
`;

export const AddEmailAccessMainDiv = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: block;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: flex;
  }
  background: #ffffff;
  box-shadow: 0px 0px 9px 2px rgba(0, 0, 0, 0.25);
  border-radius: 9px;
  padding: 20px 38px;
  margin-right: 100px;
  display: flex;
`;

export const AddEmailAccessStyled = styled.div`
  margin-right: 65px;

  & p {
    font-family: 'Segoe UI';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: #4c4c4c;
  }
`;
export const AddEmailAccessInput = styled.input`
  background: #ebedfe;
  border: 1.33987px solid #a5a5a5;
  border-radius: 5px;
  margin: 10px 0px;
  width: 204px;
  height: 32px;
  &:focus {
    outline: none;
    border: 1px solid #6dbffe;
  }
`;

export const AddEmailAccessButtonStyled = styled.button`
  width: 204px;
  height: 39px;
  background: #0090ff;
  border: none;
  border-radius: 3px;
  font-family: 'Segoe UI';
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
  text-align: center;
  color: #ffffff;
  margin-top: 23px;
  :hover {
    background-color: #0090ffb2;
  }
  :active {
    background-color: #006bbe;
  }
`;
