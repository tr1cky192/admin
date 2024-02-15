import { useState } from 'react';

export const useObjectHistoryState = () => {
  const items = [
    'Phone number and address verified',
    'Next verification date marked',
    'The right to use the premises is verified',
    'Selfie photo with document of authorized person verified',
    'Video checked and added',
    'Logic check on Google and other',
    'Point added',
    'Districts (register 3) added',
    'Description of the object - checked',
    'Description does not contain links',
    'Translation of the property description and booking options added'
  ];

  const itemsOption = ['Description does not contain links', 'There are no obscene words either'];

  const [checkedItems, setCheckedItems] = useState<boolean[]>(Array(items.length).fill(false));
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasDate, setHasDate] = useState('');
  const [phoneNumbers, setPhoneNumbers] = useState<string[]>(['', '']);
  const [noFurtherChecks, setNoFurtherChecks] = useState(false);
  const [showDateError, setShowDateError] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  return {
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
    itemsOption,
    isButtonClicked,
    setIsButtonClicked,
  };
};
