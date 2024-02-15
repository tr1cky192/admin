import React, { useState } from 'react';
import { CheckboxLabel, ImgCheckBox, InputBox } from './Components/Compinents.styled';
import done from '../../../assets/icons/done.svg';
import { useObjectHistoryState } from './state/ObjectHistoryState';
import { ButtonSubmit, DivItemsOption, ButtonTranslation } from './ObjectHistory.styled';
import { VerifInfo } from './Components/VerifInfo';
import type { ObjectInfoOption } from './ObjectHistory.type';
import {AddTranslationButton} from "./Components/AddTranslationButton";


export const ObjectHistoryOption: React.FC<ObjectInfoOption> = ({
  verifInfoStart,
  verifInfoFinish,
}) => {
  const { checkedItems, itemsOption, isSubmitted, setIsSubmitted, setCheckedItems } =
    useObjectHistoryState();

  const [, setIsDataSubmitted] = useState(false);
  const [isVerifInfoVisible, setIsVerifInfoVisible] = useState(false);

  const handleCheckboxChange = (index: number) => {
    if (!isSubmitted) {
      setCheckedItems(prevCheckedItems => {
        const newCheckedItems = [...prevCheckedItems];
        newCheckedItems[index] = !newCheckedItems[index];
        return newCheckedItems;
      });
    }
  };

  const handleSendData = () => {
    if (!isSubmitted) {
      setIsDataSubmitted(true);
      setIsVerifInfoVisible(true);
    }
    setIsSubmitted(true);
  };

  const isAnyCheckboxSelected = checkedItems.some(isChecked => isChecked);

  return (
    <div>
      <VerifInfo values={verifInfoStart} verifFinish={false} />

      <DivItemsOption>
        {itemsOption.map((item, index) => (
          <div style={{ marginBottom: '10px' }} key={item}>
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
      </DivItemsOption>
      <ButtonTranslation>
        < AddTranslationButton />
      </ButtonTranslation>
      <ButtonSubmit
        type="button"
        onClick={handleSendData}
        disabled={isSubmitted || !isAnyCheckboxSelected}
        isSubmitted={isSubmitted}
      >
        Verify
      </ButtonSubmit>

      {isVerifInfoVisible && <VerifInfo values={verifInfoFinish} verifStart={false} />}
    </div>
  );
};
