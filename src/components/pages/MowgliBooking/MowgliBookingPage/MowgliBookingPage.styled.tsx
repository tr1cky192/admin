import styled from 'styled-components';


export const MowgliBookingMainPage = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(170.93deg, #B1E2A6 6.88%, rgba(81, 142, 68, 0) 94.72%);
`;

export const MowgliList = styled.li `
    list-style-type: none;
    display: flex;
    
`

export const MowgListBlock = styled.div`
  width: 290px;
  height: 290px;
  top: 74px;
  left: 93px;
  border-radius: 9px;
  border: 1px;
  background-color: white;
  margin-left: 80px;
  margin-top: 70px;
  color: #4c4c4c;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  :hover {
    background-color: #e0fbd7;
    border: 1px solid #569541;
  }
  :active {
    background-color: #b6efa3;
    border: 1px solid #569541;
    color: #4c4c4c;
    text-decoration: none;
  }

  h1 {
    font-family: Roboto;
    font-size: 27px;
    font-weight: 500;
    line-height: 32px;
    letter-spacing: 0em;
    text-align: center;
    margin-bottom: 50px;
  }
`;

export const VerificationList = styled.div`
  display: flex;
  justify-content: space-around;
  p {
    font-family: Roboto;
    font-size: 15px;
    font-weight: 300;
    line-height: 18px;
    letter-spacing: 0em;
   margin-left:20px;
  }
  span {
    font-family: Roboto;
    font-size: 15px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    color: #569541;
  }
`;

export const StaticBlock = styled.div`
 display: block;
 flex-direction: column;
`;
export const StaticLine = styled.div`
display: flex;
justify-content: space-between;
  p {
    font-family: Roboto;
    font-size: 21px;
    font-weight: 300;
    line-height: 25px;
    letter-spacing: 0em;
    margin-right: 20px;
    margin-bottom: 15px;
  }
  span {
    font-family: Roboto;
    font-size: 21px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: right;
    color: #569541;
  }
`;

