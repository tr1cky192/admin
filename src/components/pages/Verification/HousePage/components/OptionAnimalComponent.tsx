import React from 'react';

import animal_dog_small from 'assets/icons/animal/animal_dog_small.svg';
import animal_dog_medium from 'assets/icons/animal/animal_dog_medium.svg';
import animal_dog_big from 'assets/icons/animal/animal_dog_big.svg';
import animal_cat from 'assets/icons/animal/animal_cat.svg';
import animal_raccoon from 'assets/icons/animal/animal_raccoon.svg';
import animal_other from 'assets/icons/animal/animal_other.svg';
import { DivAnimal, ImgAnimal } from './Components.styled';

type OptionAnimalComponentProps = {
  animals: string[];
};

const OptionAnimalComponent: React.FC<OptionAnimalComponentProps> = ({ animals }) => (
  <ul>
    {animals.map((animal, index) => {
      switch (animal) {
        case 'smallDog':
          return (
            // eslint-disable-next-line react/no-array-index-key
            <li key={index}>
              <ImgAnimal src={animal_dog_small} alt="animal_dog_small" />
              <DivAnimal>Маленьким псом</DivAnimal>
            </li>
          );
        case 'mediumDog':
          return (
            // eslint-disable-next-line react/no-array-index-key
            <li key={index}>
              <ImgAnimal src={animal_dog_medium} alt="animal_dog_medium" />
              <DivAnimal>Средним псом</DivAnimal>
            </li>
          );
        case 'largeDog':
          return (
            // eslint-disable-next-line react/no-array-index-key
            <li key={index}>
              <ImgAnimal src={animal_dog_big} alt="animal_dog_big" />
              <DivAnimal>Большим псом</DivAnimal>
            </li>
          );
        case 'cat':
          return (
            // eslint-disable-next-line react/no-array-index-key
            <li key={index}>
              <ImgAnimal src={animal_cat} alt="animal_cat" />
              <DivAnimal> Котом</DivAnimal>
            </li>
          );
        case 'raccoon':
          return (
            // eslint-disable-next-line react/no-array-index-key
            <li key={index}>
              <ImgAnimal src={animal_raccoon} alt="animal_raccoon" />
              <DivAnimal>Енотом</DivAnimal>
            </li>
          );
        case 'notPredator':
          return (
            // eslint-disable-next-line react/no-array-index-key
            <li key={index}>
              <ImgAnimal src={animal_other} alt="animal_other" />
              <DivAnimal>
                Не хищным животным,
                <p> меньше кота</p>
              </DivAnimal>
            </li>
          );
        default:
          return null;
      }
    })}
  </ul>
);

export default OptionAnimalComponent;
