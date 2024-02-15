import React from 'react';
import { DivText, InputNumber } from './Compinents.styled';

type PhoneNumbersProps = {
  phoneNumbers: string[];
  handlePhoneNumberChange: (index: number, value: string) => void;
  isSubmitted: boolean;
};

const PhoneNumbers: React.FC<PhoneNumbersProps> = ({
  phoneNumbers,
  handlePhoneNumberChange,
  isSubmitted,
}) => (
  <>
    <div>
      <DivText>Contact phones: </DivText>
      <InputNumber
        type="text"
        value={phoneNumbers[0]}
        onChange={e => handlePhoneNumberChange(0, e.target.value)}
        disabled={isSubmitted}
      />
    </div>

    <div style={{ marginBottom: '50px' }}>
      <InputNumber
        type="text"
        value={phoneNumbers[1]}
        onChange={e => handlePhoneNumberChange(1, e.target.value)}
        disabled={isSubmitted}
      />
    </div>
  </>
);

export default PhoneNumbers;
