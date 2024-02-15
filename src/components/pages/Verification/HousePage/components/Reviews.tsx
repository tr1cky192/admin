import React from 'react';
import { DivReviews, DivReview, DivReviewsElem } from './Components.styled';
import imgRevies from '../img/Reviews.jpg';

export const Reviews: React.FC = () => (
  <DivReview>
    <DivReviews style={{ backgroundImage: `url(${imgRevies})` }}>
      <span>Отзывы</span>
    </DivReviews>
    <DivReviewsElem>
      <span>Отзывов еще нет</span>
    </DivReviewsElem>
  </DivReview>
);
