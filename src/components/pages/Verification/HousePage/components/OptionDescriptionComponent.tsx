import React from 'react';
import { DivOptonDesc, DivOptonnDescription } from './Components.styled';

type OptionDescriptionComponentProps = {
  styleCard: boolean;
  description: string[];
};

const OptionDescriptionComponent: React.FC<OptionDescriptionComponentProps> = ({
  description,
  styleCard,
}) => (
  <DivOptonDesc hasList={styleCard}>
    {description.map((desc, id) => (
      // eslint-disable-next-line react/no-array-index-key
      <DivOptonnDescription key={id}>{desc}</DivOptonnDescription>
    ))}
  </DivOptonDesc>
);

export default OptionDescriptionComponent;
