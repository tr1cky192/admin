import React from 'react';
import {
  ButtonSubmit,
  DivAdressChat,
  DivContent,
  /* DivObjectHistoryMain, */
  /* HObject, */
  ImgDoneData,
  InputCheckData,
  InputData,
  LabelDataTest,
} from './ObjectHistory.styled';
import { Items } from './Components/Items';
import PhoneNumbers from './Components/PhoneNumbers';
import { DivText } from './Components/Compinents.styled';
import done from '../../../assets/icons/done.svg';
import { useObjectHistoryState } from './state/ObjectHistoryState';
import { AddAdressUrl } from './Components/addAdressUrl';
import { Address } from './Components/Adress';
import { Chat } from '../Chat';
import { Material } from './Components/Material';
import { VerifInfo } from './Components/VerifInfo';
import type { ObjectInfoInfo } from './ObjectHistory.type';

export const ObjectHistoryInfo: React.FC<ObjectInfoInfo> = ({
  verifInfoStart,
  verifInfoFinish,
  isFirst = false,
}) => {

  const {
    checkedItems,
    setCheckedItems,
    isSubmitted,
    setIsSubmitted,
    hasDate,
    setHasDate,
    phoneNumbers,
    setPhoneNumbers,
    noFurtherChecks,
    setNoFurtherChecks,
    showDateError,
    setShowDateError,
    items,
    isButtonClicked,
    setIsButtonClicked,
  } = useObjectHistoryState();

  const handleCheckboxChange = (index: number) => {
    if (!isSubmitted) {
      setCheckedItems(prevCheckedItems => {
        const newCheckedItems = [...prevCheckedItems];
        newCheckedItems[index] = !newCheckedItems[index];
        return newCheckedItems;
      });

      if (hasDate && !checkedItems[index]) {
        setHasDate('');
      }
    }
  };

  const handleSendItems = () => {
    if (!hasDate && !noFurtherChecks) {
      setShowDateError(true);
      return;
    }

    const selectedItems = items.filter((_, index) => checkedItems[index]);
    // eslint-disable-next-line no-console
    console.log(selectedItems);
    setIsSubmitted(true);

    setIsButtonClicked(true);
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!isSubmitted) {
      const inputValue = event.target.value;
      const formattedValue = inputValue
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '$1/$2')
        .replace(/(\d{2})(\d)/, '$1/$2')
        .slice(0, 10);
      setHasDate(formattedValue);
    }
  };

  const handlePhoneNumberChange = (index: number, value: string) => {
    if (!isSubmitted) {
      setPhoneNumbers(prevPhoneNumbers => {
        const newPhoneNumbers = [...prevPhoneNumbers];
        newPhoneNumbers[index] = value;
        return newPhoneNumbers;
      });
    }
  };

  return (
    <div>
      <VerifInfo values={verifInfoStart} verifFinish={false} />

      <DivContent>
        <Material />
        <div>
          <DivAdressChat>
            <Address />
            <Chat />
          </DivAdressChat>
          {isFirst && <AddAdressUrl isSubmitted={isSubmitted} />}
          <DivText>Next verification date</DivText>
          <InputData
            type="text"
            id="date-input"
            value={hasDate}
            onChange={handleDateChange}
            disabled={isSubmitted || noFurtherChecks}
            placeholder="DD/MM/YYYY"
            required
          />
        </div>
        <div>
          <InputCheckData
            type="checkbox"
            id="no-checks-checkbox"
            checked={noFurtherChecks}
            onChange={() => setNoFurtherChecks(!noFurtherChecks)}
            disabled={isSubmitted}
          />

          <LabelDataTest htmlFor="no-checks-checkbox">
            No further checks are necessary in the future:
          </LabelDataTest>
          {noFurtherChecks && <ImgDoneData src={done} alt="done-checkbox" />}
        </div>

        <PhoneNumbers
          phoneNumbers={phoneNumbers}
          handlePhoneNumberChange={handlePhoneNumberChange}
          isSubmitted={isSubmitted}
        />
        <Items
          items={items}
          checkedItems={checkedItems}
          handleCheckboxChange={handleCheckboxChange}
          isSubmitted={isSubmitted}
        />
        {showDateError && !hasDate && !noFurtherChecks && (
          <p style={{ color: 'red' }}>Please enter a date.</p>
        )}
      </DivContent>
      <ButtonSubmit
        type="button"
        onClick={handleSendItems}
        disabled={isSubmitted}
        isSubmitted={isSubmitted}
      >
        Verify
      </ButtonSubmit>
      {isButtonClicked && <VerifInfo values={verifInfoFinish} verifStart={false} />}
    </div>
  );
};
