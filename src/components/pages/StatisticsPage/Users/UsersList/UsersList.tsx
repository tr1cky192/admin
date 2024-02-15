import React, { useState, useEffect } from 'react';
import { Spinner } from 'components/shared/Loader';
import { Inner, TextContent, TextID, Wrapper, WrapperText, SearchButton, InputSearch, Fun, InputContainer, IconScrh, LabelFormed, ClearButtoned } from './UsersList.styled';
import pi from '../../../../../assets/icons/pict.svg';

type Prop = {
  type?: string;
  isShowUsers?: number | null;
};

export type DataProp = {
  _id: string;
  lastName: string;
  firstName: string;
};

export const UsersList: React.FC<Prop & { searchQuery?: string, onSearch: (query: string) => void }> = ({ type, isShowUsers, searchQuery, onSearch }) => {
  const [data, setData] = useState<DataProp[]>([]); 
  const [isLoading, setIsLoading] = useState(true);
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const [isClearClicked, setIsClearClicked] = useState(false);
  useEffect(() => {
    fetch('https://server-your-price-booking.onrender.com/api/acsess-to-admin/get-all-users')
      .then(response => response.json())
      .then((datae: { code: number; users: DataProp[] }) => {
        if (datae.code === 200 && datae.users && Array.isArray(datae.users)) {
          const users = datae.users.map(user => ({
            _id: user._id,
            lastName: user.lastName,
            firstName: user.firstName,
          }));
          setData(users);
          setIsLoading(false);
        } else {
          console.error('Users data is not in the expected format');
          setIsLoading(false);
        }
      })
      .catch(error => {
        console.error('Error data:', error);
        setIsLoading(false);
      });
  }, []);
 
  const handleSearchClick = () => {
    setIsSearchClicked(true);
    setIsClearClicked(true);
  };

  const handleClearClick = () => {
    setIsSearchClicked(false);
    onSearch(''); 
    setIsClearClicked(false);
  };

  const filteredData = searchQuery
    ? data.filter((item) => {
        const normalizedQuery = searchQuery.toLowerCase();
        return (
          item._id.toLowerCase().includes(normalizedQuery) ||
          item.lastName.toLowerCase().includes(normalizedQuery) ||
          item.firstName.toLowerCase().includes(normalizedQuery)
        );
      })
    : data;

  const displayData = isSearchClicked ? filteredData : data;

  return (
    <Wrapper>
      <Fun>
        <InputContainer>
          <InputSearch
            className="input"
            type="text"
            placeholder="Search ID Users or/and Name object"
            value={searchQuery}
            onChange={(e) => onSearch(e.target.value)}
            autoComplete="search" 
          />
          <LabelFormed className="label" htmlFor="input-id">Search ID Hoteliers or/and Name object</LabelFormed>
          <IconScrh src={pi} alt="Search" />
          {isClearClicked ? (
            <ClearButtoned type="button" onClick={handleClearClick}>Close</ClearButtoned>
          ) : (
            <SearchButton onClick={handleSearchClick}>Search</SearchButton>
          )}
        </InputContainer>
      </Fun>
      
      {displayData.length > 0 && 
        displayData.map((user, index) => (
          <Inner
            key={user._id}
            border={isShowUsers === index}
            hidden={isShowUsers !== index && isShowUsers !== null}
            position={isShowUsers !== null}
            tabIndex={index}
            
          >
            <TextID tabIndex={index}>ID {user._id}</TextID>
            <WrapperText tabIndex={index} typePage={type}>
              <TextContent tabIndex={index}>
                {isLoading ? (
                  <Spinner />
                ) : (
                  <div>
                  {user.lastName}
                  &nbsp;
                  {user.firstName}
                  </div>
                )}
              </TextContent>
            </WrapperText>
          </Inner>
        ))
      }
    </Wrapper>
  );
};
