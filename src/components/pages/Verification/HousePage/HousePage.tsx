import React from 'react';

import adress from 'assets/icons/adress.svg';
import apartHotelIcon from 'assets/icons/apartHotelIcon.svg';
import { RatingComponent } from './components/Rating';
import { PriceComponent } from './components/PriceComponent';
import { ButtonClose } from './components/ButtonClose';
import { ImgHotel, Name, ImgAsress, PAdress, DivPage, DivMain } from './HousePage.styled';
import { Description } from './components/Description';
import { GalleryComponent } from './components/GalleryComponent';
import { VideoComponent } from './components/VideoComponent';
import photo1 from './img/1.png';
import photo2 from './img/2.png';
import OptionDescriptionComponent from './components/OptionDescriptionComponent';
import { Reviews } from './components/Reviews';
import PaymentComponent from './components/PaymentComponent';
import ListOptionComponent from './components/ListOptionComponents';
import ObjectHistory from '../../ObjectHistory/ObjectHistory';

const photos: string[] = [
  photo1,
  photo2,
  photo1,
  photo2,
  photo1,
  photo2,
  photo1,
  photo2,
  photo1,
  photo2,
  photo1,
  photo2,
];
const desc: string[] = [
  'удобства для гостей с ограниченными возможностями',
  'первая линия от моря',
  'вторая линия от моря',
  'номера для некурящих',
  'доставка еды и напитков',
  'ужин включён',
  'подземный паркинг',
  'частная пакровка',
  'завтрак включен',
  'обед включен',
  'ресторан',
  'обед включен',
  'ночной бар',
  'спорт зал',
];
export const HousePage: React.FC = () => (
  <div style={{}}>
    <DivMain>
      <DivPage>
        <ButtonClose />
        <div>
          <ImgHotel src={apartHotelIcon} alt="" />
          <Name>Дом Пабло Эскобара</Name>
          <RatingComponent rating={4.4} />
          <ImgAsress src={adress} alt="" />
          <PAdress>ул. Джона Маккейна, д.88, г. Киев, Украина</PAdress>
          <PriceComponent minPrice={500} maxPrice={1000} checkIn="14:00" checkOut="15:00" />
          <GalleryComponent photos={photos} hasCard={false} />

          <Description hasCard={false} />

          <VideoComponent videoId="eoGdSempEuQ" />
          <OptionDescriptionComponent styleCard={false} description={desc} />
          <PaymentComponent />
          <Reviews />
        </div>
        <ListOptionComponent />

        <ObjectHistory />
      </DivPage>
    </DivMain>
  </div>
);
