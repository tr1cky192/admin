import React from 'react';

import { DivRating, DivRatComp } from './Components.styled';

type RatingComponentProps = {
  rating: number | null;
};
export const RatingComponent: React.FC<RatingComponentProps> = ({ rating }) => (
  <DivRating>
    <DivRatComp>{rating}</DivRatComp>
  </DivRating>
);
