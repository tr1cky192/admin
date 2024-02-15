import React from 'react';
import { DivBed, DivBeds } from './Components.styled';
import oneBed from '../img/1bed.png';

export const OptionBedroom: React.FC = () => (
  <DivBeds>
    <DivBed>
      <img src={oneBed} alt=" " />
      <img src={oneBed} alt=" " />
    </DivBed>
    <DivBed>
      <img src={oneBed} alt=" " />
    </DivBed>
  </DivBeds>
);
