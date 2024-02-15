import type { ReactNode, RefObject } from 'react';
import { useCallback, useRef, useState } from 'react';
import { useAppSelector } from 'App';
import { selectActiveCountryName, useGetCountriesQuery } from 'features/countries';
import { CountriesStyled, CountryEditorWrapper, ShowEditorButton } from './Countries.styled';
import { Dropdown } from './Drowdown';

type ExpandButtonProps = {
  toggleCountriesList: () => void;
  toggleButtonRef: RefObject<HTMLButtonElement>;
};

const ActiveCountryButton = ({ toggleCountriesList, toggleButtonRef }: ExpandButtonProps) => {
  const activeCountryName = useAppSelector(selectActiveCountryName) ?? 'Select country';

  return (
    <ShowEditorButton type="button" ref={toggleButtonRef} onClick={toggleCountriesList}>
      {activeCountryName}
    </ShowEditorButton>
  );
};

export const SelectCountries = () => {
  const { isLoading } = useGetCountriesQuery();
  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const [showCountries, setShowCountries] = useState(false);
  const closeCountriesList = useCallback(() => setShowCountries(false), []);
  const toggleCountriesList = useCallback(() => setShowCountries(show => !show), []);

  const showDropdown = showCountries && (
    <Dropdown
      closeCountriesList={closeCountriesList}
      isLoading={isLoading}
      toggleButtonRef={toggleButtonRef}
    />
  );

  return (
    <CountriesStyled>
      <CountryEditorWrapper>
        <ActiveCountryButton
          toggleCountriesList={toggleCountriesList}
          toggleButtonRef={toggleButtonRef}
        />

        {showDropdown}
      </CountryEditorWrapper>
    </CountriesStyled>
  );
};

export const Countries = ({ children }: { children?: ReactNode }) => {
  useGetCountriesQuery();

  return <div>{children}</div>;
};
