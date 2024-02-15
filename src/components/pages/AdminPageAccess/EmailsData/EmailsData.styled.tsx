import styled from 'styled-components/macro';

export const EmailsDataPageStyled = styled.div`
  display: flex;
  margin-top: 78px;
  justify-content: center;
  overflow-y: auto;
`;
export const EmailsMainStyled = styled.div`
  background: #ffffff;
  border: 1px solid #787878;
  box-shadow: 0px 0px 9px 2px rgba(0, 0, 0, 0.25);
  border-radius: 9px;
  margin-right: 20px;
  .button-styled {
    margin: 40px 20px;
  }
`;
export const EmailMainHeaderStyled = styled.div`
  display: flex;
  border-bottom: 1px solid black;
  justify-content: space-between;
  width: 1000px;
  p {
    padding: 22px 60px;
  }
  .check-name {
    display: flex;
    margin-right: 60px;
    margin-left: 40px;
    p {
      padding: 22px 30px;
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 14px;
      text-align: center;
      color: #4c4c4c;
    }
    & p:nth-child(1) {
      margin-right: -20px;
    }
    & p:nth-child(2) {
      margin-right: -15px;
    }
    & p:nth-child(3) {
      margin-right: 15px;
    }
    & p:nth-child(4) {
      margin-right: 35px;
    }
    & p:nth-child(5) {
      margin-left: -15px;
    }
  }
`;
export const EmailMainBodyStyled = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid black;
  .email {
    width: 158px;
    height: 13px;
    margin: 43px 0px 43px 20px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 11px;
    line-height: 13px;
    color: #4c4c4c;
  }
  .checkboxs {
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      margin-right: 80px;
      width: 40px;
      height: 40px;
      border: 1px solid #6e6e6e;
      box-shadow: 0px 0px 2.94922px 0.737304px rgba(0, 0, 0, 0.25);
      -webkit-appearance: none;
      outline: none;
    }
  }
`;

export const CheckedStyle = styled.div`
  position: relative;

  ::after {
    content: '';
    position: absolute;
    left: 7px;
    top: 10px;
    width: 26px;
    height: 16px;
    border: 4px solid #0090ff;
    border-radius: 2px;
    border-top: none;
    border-right: none;
    transform: rotate(310deg);
  }
`;

export const ActiveBlock = styled.div`
  display: block;
  width: 158px;
  height: 13px;
  p {
    font-family: 'Segoe UI';
    font-style: normal;
    font-weight: 600;
    font-size: 12.2093px;
    line-height: 16px;
    color: #6aff79;
    margin-bottom: 10px;
  }
  button {
    width: 70px;
    height: 20px;
    left: 252px;
    top: 212px;
    background: #ffffff;
    box-shadow: 0px 0px 4.06977px rgba(0, 0, 0, 0.25);
    border-radius: 4.06977px;
    border: none;
    margin-bottom: 6px;
    font-family: 'Segoe UI';
    font-style: normal;
    font-weight: 600;
    font-size: 12.2093px;
    line-height: 16px;
    text-align: center;

    color: #0090ff;
  }
  .buttons {
    display: flex;
    flex-direction: column;
  }
`;

export const ButtonBan = styled.button`
  :hover {
    background: #d0d0d0;
    box-shadow: 0px 0px 4.06977px rgba(0, 0, 0, 0.25);
    border-radius: 4.06977px;
    font-family: 'Segoe UI';
    font-style: normal;
    font-weight: 600;
    font-size: 12.2093px;
    line-height: 16px;
    text-align: center;
    color: #ffffff;
  }
  :active {
    background: #ff6a6a;
    box-shadow: 0px 0px 4.06977px rgba(0, 0, 0, 0.25);
    border-radius: 4.06977px;
    font-family: 'Segoe UI';
    font-style: normal;
    font-weight: 600;
    font-size: 12.2093px;
    line-height: 16px;
    text-align: center;
    color: #ffffff;
  }
`;

export const ButtonChange = styled.button`
  :hover {
    background: #d0d0d0;
    box-shadow: 0px 0px 4.06977px rgba(0, 0, 0, 0.25);
    border-radius: 4.06977px;
    font-family: 'Segoe UI';
    font-style: normal;
    font-weight: 600;
    font-size: 12.2093px;
    line-height: 16px;
    text-align: center;
    color: #ffffff;
  }
  :active {
    background: #0090ff;
    box-shadow: 0px 0px 4.06977px rgba(0, 0, 0, 0.25);
    border-radius: 4.06977px;
    font-family: 'Segoe UI';
    font-style: normal;
    font-weight: 600;
    font-size: 12.2093px;
    line-height: 16px;
    text-align: center;
    color: #ffffff;
  }
`;

export const LiftTheBan = styled.div`
  content: 'lift the ban';
  font-family: 'Segoe UI';
  font-style: normal;
  font-weight: 600;
  font-size: 12.2093px;
  line-height: 16px;
  text-align: center;
  color: #0090ff;
  background: #ffffff;
  box-shadow: 0px 0px 4.06977px rgba(0, 0, 0, 0.25);
  border-radius: 4.06977px;
  :hover {
    font-family: 'Segoe UI';
    font-style: normal;
    font-weight: 600;
    font-size: 12.2093px;
    line-height: 16px;
    text-align: center;
    color: #6dbffe;
    background: #ffffff;
    box-shadow: 0px 0px 4.06977px rgba(0, 0, 0, 0.25);
    border-radius: 4.06977px;
    :active {
      background: #ffffff;
      box-shadow: 0px 0px 4.06977px rgba(0, 0, 0, 0.25);
      border-radius: 4.06977px;
      font-family: 'Segoe UI';
      font-style: normal;
      font-weight: 600;
      font-size: 12.2093px;
      line-height: 16px;
      text-align: center;
      color: #24a0ed;
    }
  }
`;
