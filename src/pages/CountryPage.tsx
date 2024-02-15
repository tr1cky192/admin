import { Container } from 'components/shared/Container';
import { CountriesHeader } from 'components/pages/CountryPage/Countries/CountriesHeader';
import { Locations } from 'components/pages/CountryPage/Locations';
// import { InputEmail } from 'components/pages/Access/InputEmail';

const CountryPageEl = () => (
  <Container>
    <CountriesHeader />
    <Locations />
  </Container>
);

const CountryPage = () => (
  <div>
    <CountryPageEl />
    {/* <InputEmail component={CountryPageEl} /> */}
  </div>
);

export default CountryPage;
