import React, { useState } from 'react';
import OptionComponent from './OptionComponent';
import photo3 from '../img/3.png';
import photo4 from '../img/4.png';
import order from '../../../../../assets/icons/order.svg';
import { DivListTitle } from './Components.styled';

const NoOptionsComponent: React.FC = () => (
  <div>
    <div>Варианты бронирования еще не добавлены отельером.</div>
  </div>
);
const ListOptionComponent: React.FC = () => {
  const [optionsExist, setOptionsExist] = useState(true);

  const cards = [
    {
      photos: [photo3, photo4, photo3, photo4, photo3, photo4],
      animal: ['smallDog', 'mediumDog', 'raccoon', 'notPredator', 'largeDog', 'cat'],
      maxPrice: 1000,
      minPrice: 10000,
      area: 77,
    },
    {
      photos: [photo3, photo4, photo3, photo4, photo3, photo4],
      animal: [],
      maxPrice: 100,
      minPrice: 1000,
      area: 50,
    },
    {
      photos: [photo3, photo4, photo3, photo4, photo3, photo4],
      animal: ['smallDog', 'mediumDog', 'largeDog', 'cat'],
      maxPrice: 100,
      minPrice: 100,
      area: 10,
    },
  ];
  const changeOptionsExist = () => {
    setOptionsExist(!optionsExist);
  };
  return (
    <div>
      <DivListTitle>
        <img style={{ position: 'relative', marginRight: '20px' }} src={order} alt="" />
        Варианты бронирования:
        <button type="button" onClick={changeOptionsExist}>
          Временный переключатель: есть или нет вариантов бронирования
        </button>
      </DivListTitle>

      {optionsExist ? (
        <div>
          {cards.map(card => (
            <OptionComponent
              gallery={card.photos}
              animals={card.animal}
              maxPrice={card.maxPrice}
              minPrice={card.minPrice}
              area={card.area}
            />
          ))}
        </div>
      ) : (
        <NoOptionsComponent />
      )}
    </div>
  );
};

export default ListOptionComponent;
