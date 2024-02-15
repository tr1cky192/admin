import React, { useState } from 'react';
import adress from 'assets/icons/adress.svg';
import pen from 'assets/icons/pen.svg';
import {ButAddAdrPen, ButtonCustom, ButtonTranslationAdr, InputCostomed} from './Compinents.styled';
import type { AddAdressUrlProps } from '../ObjectHistory.type';
import {AddTranslationButton} from "./AddTranslationButton";

export const AddAdressUrl: React.FC<AddAdressUrlProps> = ({ isSubmitted }) => {
  const [inputText1, setInputText1] = useState('');
  const [inputText2, setInputText2] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [savedText1, setSavedText1] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [savedText2, setSavedText2] = useState('');

  const handleInputChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText1(event.target.value);
  };

  const handleInputChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText2(event.target.value);
  };

  const handleSaveButtonClick1 = () => {
    setSavedText1(inputText1);
    setInputText1('');
  };

  const handleSaveButtonClick2 = () => {
    setSavedText2(inputText2);
    setInputText2('');
  };

  return (
    <div style={{ marginBottom: '30px', position: 'relative' }}>
      <img
        src={adress}
        alt="adress"
        style={{ width: '27px', height: '39px', marginBottom: '-50px' }}
      />
      <div>
        <InputCostomed type="text" value={inputText1} onChange={handleInputChange1} />
        <div />
        <div>
          <ButtonCustom type="submit" onClick={handleSaveButtonClick1} style={{ top: '20px' }}>
            Add point
          </ButtonCustom>
          {!isSubmitted && (
            <ButAddAdrPen type="button" style={{ top: '120px' }}>
              <img src={pen} alt="pen" />
            </ButAddAdrPen>
          )}
        </div>
        <InputCostomed type="text" value={inputText2} onChange={handleInputChange2} />
        <ButtonCustom type="submit" onClick={handleSaveButtonClick2}>
          Add video to YouTube and object page
        </ButtonCustom>
        {!isSubmitted && (
          <ButAddAdrPen type="button">
            <img src={pen} alt="pen" />
          </ButAddAdrPen>
        )}
        <div />
      </div>
      <ButtonTranslationAdr>
        < AddTranslationButton />
      </ButtonTranslationAdr>
    </div>
  );
};
