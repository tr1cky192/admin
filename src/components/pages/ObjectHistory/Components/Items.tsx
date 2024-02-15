import React from 'react';
import done from 'assets/icons/done.svg';
import { InputBox, CheckboxLabel, ImgCheckBox } from './Compinents.styled';

type ItemsProps = {
  items: string[];
  checkedItems: boolean[];
  handleCheckboxChange: (index: number) => void;
  isSubmitted: boolean;
};

export const Items: React.FC<ItemsProps> = ({
  items,
  checkedItems,
  handleCheckboxChange,
  isSubmitted,
}) => (
  <>
    {items.map((item, index) => (
      <div style={{ marginBottom: '20px' }} key={item}>
        <CheckboxLabel>{item}</CheckboxLabel>

        <InputBox
          type="checkbox"
          id={`checkbox-${index}`}
          checked={checkedItems[index]}
          onChange={() => handleCheckboxChange(index)}
          disabled={isSubmitted}
        />
        {checkedItems[index] && <ImgCheckBox src={done} alt="done-checkbox" />}
      </div>
    ))}
  </>
);
