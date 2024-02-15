import { useDispatch, useSelector } from 'react-redux';
import { fetchBonus } from 'features/hoteliers/hoteliersOperation';
import type { Dispatch} from 'react';
import { useState} from 'react';
// import { useEffect} from 'react';
import { selectorBonusHoteliers } from 'features/hoteliers/hoteliersSelectors';
import {
  Button,
  Inner,
  Input,
  SecondaryText,
  SubTitle,
  Text,
  Title,
  Wrapper,
  Form,
  Error,
} from './AccountHotelier.styled';

type AccountHotelierProps = {
  id: string,
}

type DataBonus = {
  id: string;
  amount: number;
};

export const AccountHotelier: React.FC<AccountHotelierProps> = ({ id }) => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
    type DispatchAction = Dispatch<any>;
  const dispatch: DispatchAction = useDispatch();
  const data = useSelector(selectorBonusHoteliers);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
   event.preventDefault()
   const form = event.currentTarget;
    const inputElement = form.elements.namedItem('input') as HTMLInputElement | null;
    const value = Number(inputElement?.value) 
     if (value <= 0) {
       setErrorMessage('You cannot enter a negative value.');
       return;
     }
    if (inputElement && inputElement.value !== '') {
      const dataToPatch: DataBonus = {
        id,
        amount: Number(inputElement.value),
      };
      dispatch(fetchBonus(dataToPatch));
    }
    form.reset()
    setErrorMessage(null);
  };

  const hotelierData = data.find(hotelier => hotelier.owner === id)?.finances;
  

  return (
    <Wrapper>
      <Inner>
        <Title>Total in your account now:</Title>
        <Text>{hotelierData?.total}</Text>
        <Text>{hotelierData?.currency}</Text>
      </Inner>
      <SubTitle>detailed deposit:</SubTitle>
      <Inner>
        <SecondaryText>Total bonus:</SecondaryText>
        <Text>{hotelierData?.bonus}</Text>
        <Text>{hotelierData?.currency}</Text>
      </Inner>
      <Inner>
        <SecondaryText>Total money:</SecondaryText>
        <Text>{hotelierData?.money}</Text>
        <Text>{hotelierData?.currency}</Text>
      </Inner>
      {errorMessage && <Error>{errorMessage}</Error>}
      <Form onSubmit={handleSubmit}>
        <Input type="number" name="input" />
        <Text>{hotelierData?.currency}</Text>
        <Button>Send BONUS now</Button>
      </Form>
    </Wrapper>
  );
};
