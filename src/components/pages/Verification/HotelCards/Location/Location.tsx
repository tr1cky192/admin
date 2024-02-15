import apartHotelIcon from 'assets/icons/apartHotelIcon.svg';
import {
  Wrapper,
  Header,
  Address,
  CityWrapper,
  CityName,
  CityNameXs,
  HotelName,
  HotelNameXs,
} from './Location.styled';

type City = {
  city: string;
  hotel: string;
  address: string;
};
export const Location = ({ city, hotel, address }: City) => (
  
    <Wrapper>
      <Header>
        <img src={apartHotelIcon} alt="apart hotel" />
        {hotel.length < 10 ? <HotelName>{hotel}</HotelName> : <HotelNameXs>{hotel}</HotelNameXs>}
      </Header>
      <CityWrapper>
        {city.length < 10 ? <CityName>{city}</CityName> : <CityNameXs>{city}</CityNameXs>}
      </CityWrapper>
      <Address>{address}</Address>
    </Wrapper>
);
