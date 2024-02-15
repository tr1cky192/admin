import React from 'react';
import cash from 'assets/icons/cash.svg';
import visa from 'assets/icons/visa.svg';
import { DivPayment, DivPaymentComp } from './Components.styled';

const PaymentComponent: React.FC = () => (
  <DivPayment>
    <DivPaymentComp>
      <img style={{ marginRight: '10px' }} src={cash} alt="icon payment" /> Оплата на месте
      наличными
    </DivPaymentComp>
    <DivPaymentComp>
      <img style={{ marginRight: '10px' }} src={visa} alt="icon payment" /> Оплата на месте картой
      Visa или MasterCard
    </DivPaymentComp>
    <DivPaymentComp>
      <img style={{ marginRight: '10px' }} src={visa} alt="icon payment" /> Оплата на месте картой
      UnionPay
    </DivPaymentComp>
    <DivPaymentComp>
      <img style={{ marginRight: '10px' }} src={visa} alt="icon payment" />
      Оплата на месте картой JCB
    </DivPaymentComp>
  </DivPayment>
);

export default PaymentComponent;
