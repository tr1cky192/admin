import { useState } from 'react';
import { Wrapper, Button, Country, Text, Object, Span } from './ObjectCard.styled';

type ObjectType = {
  country: string;
  objects: number;
  onClick: () => void;
  components: string[];
};
export const ObjectCard = ({ country, objects, onClick, components }: ObjectType) => {
  const [pendingObjects, setPendingObjects] = useState(objects);

  const addCardOnHandleClick = () => {
     if (components.length < 3) {
         setPendingObjects(prevState => prevState - 1);
         onClick();
     }

  };

  return (
    <Wrapper>
      <Country>{country}</Country>
      <Text>pending verification</Text>
      <Object>
        <Span>Objects</Span>
        <Span>{pendingObjects}</Span>
      </Object>
      <Button onClick={addCardOnHandleClick} type="button">
        Take one object for verification
      </Button>
    </Wrapper>
  );
};
