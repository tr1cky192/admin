import styled from 'styled-components/macro';

export const CardsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 25px;
  margin: 0 auto;
  margin-bottom: 24px;
  justify-content: center;

  color: #4c4c4c;
`;

export const Wrapper = styled.div`
  width: 162px;
  height: 158px;
  display: flex;
  flex-direction: column;
  font-family: 'Segoe UI';
  font-style: normal;
  font-weight: 700;
  font-size: 11px;
  line-height: 15px;
  text-align: center;
  align-items: center;
  background: #ffffff;
  /* background-color: #ebedfe; */
  border-radius: 10px;
  padding: 20px 10px;
`;
export const Country = styled.h2`
  margin-bottom: 5px;
`;
export const Text = styled.p`
  margin-bottom: 20px;
  color: #aeafbc;
`;

export const Object = styled.div`
  margin-bottom: 20px;
  display: flex;
  gap: 48px;
`;
export const Span = styled.span`
  display: block;
`;
export const Button = styled.button`
  font-family: 'Segoe UI';
  font-style: normal;
  font-weight: 700;
  font-size: 11px;
  line-height: 15px;
  background-color: #aeafbc;
  color: #ffffff;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  border-radius: 7px;
  border: none;

  &:hover {
    background-color: #9c9daf;
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.3);
  }

  &:active {
    background-color: #d0d0d0;
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.3);
  }
`;

export const Div = styled.div`
  /* display: flex;
  flex-direction: column ; */
  position: relative;
  background-color: #ebedfe;
`;

export const CardsStyle = styled.div`
/* width: 40px;
height: 0px; */
position: absolute;
left: 40%;
`