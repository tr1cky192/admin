import { BackButton } from '../BackButton';
import { Countries, SelectCountries } from '../Countries';
import { Languages, SelectLanguages } from '../../Languages';
import { CountriesHeaderStyled } from './CountriesHeader.styled';

export const CountriesHeader = () => (
  <CountriesHeaderStyled>
    <BackButton />

    <Countries>
      <SelectCountries />
    </Countries>

    <Languages>
      <SelectLanguages />
    </Languages>
  </CountriesHeaderStyled>
);
