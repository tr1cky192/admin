import React, { useState } from 'react';
import { RegisterButton } from '../../ButtonRegisterModal/RegisterButton/RegisterButton';
import { SpanAdress, DidAdress } from './Compinents.styled';
import { ListBtn } from '../../ButtonRegisterModal/ListButton/ListButton.styled';

export const Address = () => {
  const [activeButtonIndex, setActiveButtonIndex] = useState<number>(-1);

  const handleButtonClick = (event: React.MouseEvent<HTMLUListElement>): void => {
    const { target } = event;
    if (target instanceof HTMLButtonElement) {
      const index = Number(target.dataset.index ?? '-1');
      setActiveButtonIndex(index === activeButtonIndex ? -1 : index);
    } else {
      setActiveButtonIndex(-1);
    }
  };

  return (
    <div style={{ paddingBottom: '25px' }}>
      <div>
        <SpanAdress>Country</SpanAdress>
        <DidAdress>Ukraine</DidAdress>
        <SpanAdress>State</SpanAdress>
        <DidAdress>Kyiv</DidAdress>
        <SpanAdress>City</SpanAdress>
        <DidAdress>Kyiv</DidAdress>
      </div>

      <div>
        <SpanAdress>Location Register 1</SpanAdress>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <DidAdress>Pechers'kyi district</DidAdress>
        <ListBtn onClick={handleButtonClick} style={{ marginBottom: '25px' }}>
          <RegisterButton
            index={0}
            key="Location Register 1"
            title="Location Register 1"
            activeButtonIndex={activeButtonIndex}
          />
        </ListBtn>
        <ListBtn onClick={handleButtonClick} style={{ marginBottom: '25px' }}>
          <RegisterButton
            index={1}
            key="Location Register 1"
            title="Location Register 1"
            activeButtonIndex={activeButtonIndex}
          />
        </ListBtn>
      </div>
    </div>
  );
};
