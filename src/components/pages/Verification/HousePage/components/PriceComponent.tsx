import React from 'react';

import checkInSvg from 'assets/icons/checkInSvg.svg';
import checkout from 'assets/icons/checkout.svg';
import money from 'assets/icons/money.svg';
import { DivPrices, DivCheck, DivPrice } from './Components.styled';

type PriceComponentProps = {
  minPrice: number;
  maxPrice: number;
  checkIn: string;
  checkOut: string;
}

export const PriceComponent: React.FC<PriceComponentProps> = ({
  minPrice,
  maxPrice,
  checkIn,
  checkOut,
}) => (
  <DivPrices>
    <img src={checkInSvg} alt="check in icon" />
    <DivCheck>
      <div style={{ marginRight: '22px' }}>Check In</div>
      <div>{checkIn}</div>
    </DivCheck>
    <img src={checkout} alt="check out icon" />
    <DivCheck>
      <div style={{ marginRight: '9px' }}>Check Out</div>
      <div>{checkOut}</div>
    </DivCheck>

    <DivPrice>
      {maxPrice > 0 ? (
        <div>
          <img src={money} alt="" />
          <div style={{ marginTop: '-21px', marginLeft: '37px' }}>
            {minPrice === maxPrice ? (
              <div>{minPrice} UAH</div>
            ) : (
              <div>
                {minPrice} UAH - {maxPrice} UAH
              </div>
            )}
          </div>
        </div>
      ) : (
        <div>wrong price</div>
      )}
    </DivPrice>
  </DivPrices>
);
