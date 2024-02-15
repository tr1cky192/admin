import { useAppSelector } from 'App';
import { selectVisibleCountriesIds } from 'features/languages';
import { CountryListStyled } from './CountriesList.styled';
import { CountryItem } from './CountryItem';

type CountriesListProps = {
  isEditingCountry: boolean;
  isLoading: boolean;
  setIsEditingCountry: (arg: boolean) => void;
  closeCountriesList: () => void;
};

export const CountriesList = ({
  isEditingCountry,
  isLoading,
  setIsEditingCountry,
  closeCountriesList,
}: CountriesListProps) => {
  const countriesIds = useAppSelector(selectVisibleCountriesIds);

  return (
    <CountryListStyled>
      {countriesIds?.map(countryId => (
        <CountryItem
          key={countryId}
          countryItem={{
            countryId,
            isEditingCountry,
            isLoading,
            setIsEditingCountry,
            closeCountriesList,
          }}
        />
      ))}
    </CountryListStyled>
  );
};
