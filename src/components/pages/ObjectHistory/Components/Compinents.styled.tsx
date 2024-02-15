import styled from 'styled-components/macro';

export const DivText = styled.div`
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #006bbe;
  margin-left: 3rem;
  margin-top: 20px;
`;
export const InputNumber = styled.input`
  width: 284px;
  height: 32px;
  background: #ffffff;
  border: 1px solid #787878;
  border-radius: 10px;
  margin: 12px auto;
`;
export const InputBox = styled.input`
  appearance: none;
  margin-top: 2px;
  width: 12.68px;
  height: 14px;
  border: 1px solid ${({ checked }) => (checked ? '#2C6ACC' : '#CC2C2C')};
  background-color: #ffffff;
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.25);
  margin-left: 273px;
  position: relative;
  top: -15px;
`;

export const CheckboxLabel = styled.div`
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  width: 240px;
  color: #656565;
`;

export const ImgCheckBox = styled.img`
  position: relative;
  top: -16px;
  left: -11.5px;
`;

export const ButtonCustom = styled.button`
  position: absolute;
  top: 110px;
  left: 550px;
  border-radius: 7px;
  background: #0090ff;
  border: 2px solid #0090ff;
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.3);
  color: #fff;
  text-align: center;
  font-size: 12px;
  font-weight: 700;
  line-height: normal;
  width: 143px;
  height: 58px;
  &:hover {
    background: rgba(0, 144, 255, 0.7);
  }

  &:active {
    background: rgba(0, 144, 255, 0.5);
  }
`;

export const InputCostomed = styled.input`
  width: 351px;
  height: 59px;
  border-radius: 10px;
  border: 1px solid #787878;
  background: #fff;
  margin-bottom: 30px;
  margin-left: 50px;
`;

export const SpanAdress = styled.div`
  color: #006bbe;
  text-align: center;
  font-size: 10px;
  font-style: normal;
  font-weight: 350;
  line-height: normal;
  width: 202px;
  margin-bottom: 3px;
`;

export const DidAdress = styled.div`
  border-radius: 5px;
  border: 1px solid #aeafbc;
  background: #fff;
  color: #656565;
  text-align: center;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  width: 202px;
  height: 29px;
  padding-top: 5px;
  margin-bottom: 28px;
`;

export const DivMaterial = styled.div`
  border-radius: 10px;
  background: #ebedfe;
  margin-bottom: 40px;
  padding: 30px 0;
`;

export const DivMaterialMain = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 45px;
  width: 700px;
  text-align: center;
`;

export const SpanMaterial = styled.div`
  color: #4c4c4c;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 10px;
`;

export const InputMaterial = styled.input`
  border-radius: 5px;
  border: 1px solid #aeafbc;
  background: #fff;
  color: #008aff;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 5px;
  margin-top: 15px;
`;

export const DivFoldMaterial = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 7px;
`;

export const PFoldText = styled.p`
  color: #4c4c4c;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: -18px;
  margin-bottom: 10px;
`;

export const DivFoldCenter = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 30px;
`;

export const ImgFoldMaterial = styled.img`
  width: 70.841px;
  height: 75.51px;
`;

export const DivFrameCamera = styled.div`
  border: 1px solid rgba(76, 76, 76, 0.78);
  border-radius: 10px;
  width: 68px;
  padding: 10px;
  margin-left: 70px;
  margin-top: 15px;
`;

export const DivVarifStartt = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 700px;
  margin: 0 auto;
`;

export const DivVarifStartText = styled.div`
  color: #006bbe;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 20px;
  margin-left: 50px;
`;

export const ButAddAdrPen = styled.button`
  border-radius: 4px;
  background: #fff;
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.3);
  width: 39px;
  height: 39px;
  border: none;
  position: absolute;
  left: 710px;
  top: 30px;
  pointer-events: none;
`;

export const StyledButton = styled.button`
  color: #656565;
  text-align: center;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  width: 160px;
  height: 29px;
  border-radius: 5px;
  border: 1px solid #aeafbc;
  background: #fff;

  :hover {
    border: 1px solid #434348;
  }
`;

export const DivVerifInfo = styled.div`
  display: flex;
  margin-left: -20px;
  width: 280px;
`;

export const ImgVerifFinish = styled.img<{ isFinish: boolean }>`
  margin-left: ${props => (props.isFinish ? '16px' : '28px')};
`;
export const ImgVerifStart = styled.img<{ isStart: boolean }>`
  margin-right: ${props => (props.isStart ? '0' : '27px')};
`;

export const DivSalesContent = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 20px;
`;
export const ButtonSales = styled.button`
  position: sticky;
  margin-left: auto;
  width: 379px;
  height: 59px;
  border: 0.5px solid #787878;
  border-radius: 33px;
  background: #fff;
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.3);
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.3s;

  &:hover {
    background: #d1e5ca;
  }

  &:active {
    background: #81ba6d;
  }
`;

export const ButtonTranslation = styled.button`
  width: 229px;
  height: 59px;
  border-radius: 7px;
  background: #0090ff;
  border: 2px solid #0090ff;
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.3);
  color: #FFF;
  text-align: justify;
  font-size: 11px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const ButtonTranslationAdr = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
`;
