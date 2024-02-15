import styled from 'styled-components/macro';

export const DivClose = styled.div`
  height: 43px;
  background: #000000;
  border-radius: 0;
  text-align: end;
  justify-content: center;
`;

export const ButtonClos = styled.button`
  height: 16px;
  background: none;
  border: none;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  margin-right: 46px;
  margin-top: 13px;
  color: #dbd8d8;
`;

export const Img = styled.img`
  width: 10px;
  height: 10px;
  color: #dbd8d8;
  margin-right: 3px;
`;

export const DivRating = styled.div`
  width: 63px;
  height: 37px;
  text-align: center;
  cursor: pointer;
  background: #ffffff;
  box-shadow: 0 0 7.78947px rgba(0, 0, 0, 0.25);
  border-radius: 5.47px;
  margin-top: -138px;
  margin-left: 500px;
`;

export const DivRatComp = styled.div`
  padding-top: 5px;
  font-weight: 700;
  font-size: 20.4474px;
  line-height: 27px;
  text-align: center;
  color: #0090ff;
`;

export const DivPrices = styled.div`
  margin-top: 45px;
  margin-left: 95px;
`;

export const DivCheck = styled.div`
  display: flex;
  margin-top: -20px;
  margin-left: 50px;
  margin-bottom: 20px;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  color: #4c4c4c;
`;

export const DivPrice = styled.div`
  margin-top: -40px;
  margin-left: 250px;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  color: #006bbe;
`;

export const PDescription = styled.p<{ hasStyle: boolean }>`
  margin-top: ${props => (props.hasStyle ? '0' : '-410px')};
  margin-left: ${props => (props.hasStyle ? '35px' : '65px')};

  background: #ffffff;
  border-radius: 10px;
  width: 49%;
  padding: 15px 15px 35px;
  font-style: normal;
  font-weight: 350;
  font-size: 12px;
  line-height: 16px;
  color: #000000;
`;

export const DivGalleryMain = styled.div<{ hasCard: boolean }>`
  position: relative;
  top: ${props => (props.hasCard ? '-410px' : '-210px')};
  left: ${props => (props.hasCard ? '79%' : '71.5%')};
  height: ${props => (props.hasCard ? '0' : 'auto')};
`;
export const DivGallery = styled.div<{ hasCard: boolean }>`
  width: ${props => (props.hasCard ? '18%' : '22%')};
  display: flex;
  flex-wrap: wrap;
  margin-bottom: ${props => (props.hasCard ? '20px' : '0')};
`;

export const ButtonGallery = styled.button<{ hasCard: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => (props.hasCard ? 'calc(33%)' : 'calc(25%)')};
  height: 70px;
  background: none;
  border: none;
  margin-bottom: ${props => (props.hasCard ? '8px' : '3px')};
  &:hover {
    filter: brightness(70%);
  }
`;

export const ImgGallery = styled.img`
  width: 70px;
  height: 70px;
  background: rgba(76, 76, 76, 0.4);
  border-radius: 5px;
`;

export const ImgGallerySelected = styled.img`
  width: 220px;
  height: 220px;
  position: relative;
  border-radius: 5px;
  left: -230px;
  top: -220px;
`;
export const DivOptonDesc = styled.div<{ hasList: boolean }>`
  width: 50%;
  color: ${prop => (prop.hasList ? ' #0090FF' : '#FF6000')};

  margin-top: ${props => (props.hasList ? '20px' : '-240px')};
  margin-left: ${props => (props.hasList ? '30px' : '60px')};
  display: flex;
  flex-wrap: wrap;
`;
export const DivOptonnDescription = styled.div`
  height: 20px;
  background: #ffffff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  width: fit-content;
  padding: 0 20px;
  margin: 5px 8px;
`;
export const DivPayment = styled.div`
  background: #ffffff;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin: 20px 70px;
  padding: 20px;
  width: max-content;
`;
export const DivPaymentComp = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #4c4c4c;
  margin-bottom: 10px;
`;
export const DivReview = styled.div`
  margin-left: 70%;
  margin-top: -140px;
`;
export const DivReviews = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  width: 316px;
  height: 73.97px;
  color: #ffffff;
  padding-left: 20px;
  padding-top: 35px;
`;
export const DivReviewsElem = styled.div`
  width: 316px;
  font-family: 'PT Mono';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  text-align: center;
  padding: 37px;
  color: #4c4c4c;
  background: #ffffff;
  border-radius: 5px;
`;
export const DivCardOption = styled.div`
  position: relative;

  border: 0.5px solid #aeafbc;
  margin: 3px 12px;
  padding: 32px 11px;
`;
export const DivBeds = styled.div`
  position: relative;
  margin-top: 50px;
  margin-bottom: 80px;
  display: flex;
  margin-left: 25px;
`;
export const DivBed = styled.div`
  width: 100px;
  height: 100px;
  background: #ffffff;
  box-shadow: 0 -4px 6px 1px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 11px;
`;
export const DivAnimalDesc = styled.div`
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  color: #4c4c4c;
  margin-bottom: 7px;
`;

export const ImgAnimal = styled.img`
  width: 14px;
  height: 14px;
`;

export const DivAnimal = styled.div`
  background: #ffffff;
  border-radius: 5px;
  width: 130px;
  font-style: normal;
  font-weight: 350;
  font-size: 10px;
  line-height: 13px;
  padding: 2px 10px;
  color: #006c0b;
  margin-top: -16px;
  margin-left: 18px;
`;

export const DivPriceCard = styled.div`
  width: max-content;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  color: #006bbe;
  margin-top: -20px;
`;

export const SpanAreaCard = styled.span`
  width: max-content;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  color: #a03507;
`;

export const DivAreaPriceAnimal = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  margin-left: 61%;
  margin-top: -180px;
`;

export const DivListTitle = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 21px;
  color: #008aff;
  padding: 15px 70px;
  display: flex;
  align-items: center;
`;

export const ButtonLanguage =styled.button`
  border: none;
  border-radius: 5px;
  background: #EFFDF1;
  cursor: pointer;
  margin: 5px;
  width: 46px;
  height: 34px;
`;
export const DivLanguageOriginal = styled.div`
  color: #FF6000;
  text-align: center;
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: -12px;
`;

export const DivButtonsLanguage = styled.div`
display: flex;
  margin-top: 10px;
  margin-bottom: -20px;
`;

export const DivNumberOption = styled.div`
  margin-left: auto;
  margin-right: 55px;
  margin-bottom: -30px;
  width: 54.118px;
  height: 20px;
  border: 0.5px solid #AEAFBC;
  border-radius: 4px;
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.3);
  background: #FFFFFF;
  color: #4C4C4C;
  text-align: center;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

