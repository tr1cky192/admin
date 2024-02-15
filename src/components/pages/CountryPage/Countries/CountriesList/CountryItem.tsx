import { EditCountryForm, type EditCountryFormType } from '../EditCountryForm/EditCountryForm';
import { CountryItemStyled } from './CountriesList.styled';

type CountryItemProps = EditCountryFormType;

export const CountryItem = ({ countryItem }: CountryItemProps) => (
  <CountryItemStyled>
    <EditCountryForm countryItem={countryItem} />
  </CountryItemStyled>
);
