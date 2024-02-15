import React from 'react';
import money from 'assets/icons/money.svg';
import { Description } from './Description';
import OptionDescriptionComponent from './OptionDescriptionComponent';
import {
  DivAnimalDesc,
  DivAreaPriceAnimal,
  DivCardOption, DivNumberOption,
  DivPriceCard,
  SpanAreaCard,
} from './Components.styled';
import { OptionBedroom } from './OptionBedroom';
import { GalleryComponent } from './GalleryComponent';
import OptionAnimalComponent from './OptionAnimalComponent';

type CardComponentProps = {
  gallery: string[];
  animals: string[];
  maxPrice: number;
  minPrice: number;
  area: number;
};
const desc: string[] = [
  'туалетная бумага',
  'бесплатные туалетные принадлежностиx',
  'кофеварка',
  'звукоизоляция',
  'стиральная машина',
];
const CardComponent: React.FC<CardComponentProps> = ({
  gallery,
  animals,
  minPrice,
  maxPrice,
  area,
}) => (
  <DivCardOption>
    <div>
      <DivNumberOption>BG32L</DivNumberOption>

      <Description hasCard />
      <OptionDescriptionComponent styleCard description={desc} />
      <OptionBedroom />
    </div>
    <div style={{ position: 'static', top: 0 }}>
      <GalleryComponent photos={gallery} hasCard />

      <DivAreaPriceAnimal>
        <SpanAreaCard>
          Общая площадь <span style={{ marginLeft: '30px' }}> {area} м.кв. </span>
        </SpanAreaCard>
        <DivPriceCard>
          {maxPrice > 0 ? (
            <div>
              <img src={money} alt="val symbol" style={{ position: 'relative', top: '20px' }} />
              <div>
                {minPrice === maxPrice ? (
                  <p style={{ marginLeft: '30px' }}>{minPrice} UAH</p>
                ) : (
                  <p style={{ marginLeft: '30px' }}>
                    {minPrice} UAH - {maxPrice} UAH
                  </p>
                )}
              </div>
            </div>
          ) : null}
        </DivPriceCard>

        <div>
          {animals.length > 0 ? <DivAnimalDesc>Можете остановиться у нас с:</DivAnimalDesc> : null}
          {animals.length > 0 ? <OptionAnimalComponent animals={animals} /> : null}
        </div>
      </DivAreaPriceAnimal>
    </div>
  </DivCardOption>
);

export default CardComponent;
