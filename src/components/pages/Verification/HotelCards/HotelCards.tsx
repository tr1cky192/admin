import { Card, CardPhoto } from './HotelCards.styled';
import { Image } from "./Image";
import { Location } from "./Location";

type ICard = {
  city: string;
  hotel: string;
  address: string;
  style?: React.CSSProperties;
};
export const HotelCards = ({ city, hotel, address, style }: ICard & { style?: React.CSSProperties }) => (
  <Card style={style}>
    <CardPhoto>
      <Image alt="picture" />
    </CardPhoto>

    <div>
      <Location city={city} hotel={hotel} address={address} />
    </div>
  </Card>
);