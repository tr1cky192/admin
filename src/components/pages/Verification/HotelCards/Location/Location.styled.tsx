import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  margin-left: 17px;
  margin-top: 0;
  padding-top: 9px;
  max-width: 180px;
`;
export const Header = styled.div`
  display: flex;
  align-items: center;
`;

export const HotelName = styled.div`
  font-family: 'Segoe UI';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #656565;
`;

export const HotelNameXs = styled.div`
  font-family: 'Segoe UI';
  font-style: normal;
  font-weight: 400;
  
  color: #656565;
  font-size: 12px;
  line-height: 16px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const CityWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 14px;
  font-family: 'Segoe UI';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: #656565;
`;

export const CityName = styled.h2`
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
`;
export const CityNameXs = styled.h2`
  font-weight: 700;
  font-size: 18px;
  line-height: 16px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;


export const Address = styled.p`
  margin-left: 14px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-family: 'Segoe UI';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;

  color: #656565;
`;
