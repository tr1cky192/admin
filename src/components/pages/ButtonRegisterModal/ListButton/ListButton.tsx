import { useState } from 'react';
import { RegisterButton } from '../RegisterButton/RegisterButton';
import { ListBtn } from './ListButton.styled';

const titleButton = ['Location Register 1', 'Location Register 2', 'Location Register 3'];

export const ListButton = (): JSX.Element => {
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
    <ListBtn onClick={handleButtonClick}>
      {titleButton.map((title, index) => (
        <RegisterButton
          key={title}
          title={title}
          index={index}
          activeButtonIndex={activeButtonIndex}
        />
      ))}
    </ListBtn>
  );
};
