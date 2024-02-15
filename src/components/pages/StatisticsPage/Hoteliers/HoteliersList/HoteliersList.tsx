import { memo, useCallback, useEffect, useState } from "react";
import {useSelector } from "react-redux";
import {fetchHotelsById } from "features/hoteliers/hoteliersOperation";
import { useAppDispatch } from 'App';
import { selectorHoteliers } from "features/hoteliers/hoteliersSelectors";
import { Spinner } from "components/shared/Loader";
import { Inner, TextContent, TextID, Wrapper, WrapperText, YellowButton, SearchInput,FunProf, ClearButton,SearchInputContainer,SearchIcon, LabelForm } from "./HoteliersList.styled";
import likeIcon from '../../../../../assets/icons/like.svg';
import pic from '../../../../../assets/icons/pict.svg';
import dislikeIcon from '../../../../../assets/icons/dislike.svg';
import { AccountHotelier } from "../AccountHotelier/AccountHotelier";

type Prop = {
  type?: string;
  isShowHotelier: number | null;
  setIsShowHotelier: React.Dispatch<React.SetStateAction<number | null>>;
  isClicked: boolean;
  setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
};

type HandleClick = (event: React.MouseEvent<HTMLUListElement>) => void;

export const HoteliersList: React.FC<Prop> = memo(
  ({
  type,
  isShowHotelier,
  setIsShowHotelier,
  isClicked,
  setIsClicked,
}) => {
  const dispatch = useAppDispatch();
    const { hoteliers, isLoadingHotels } = useSelector(selectorHoteliers);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [filteredHoteliers, setFilteredHoteliers] = useState(hoteliers);
    // const [labelVisible, setlabelvisible] = useState(false);
    const [isClearClicked, setIsClearClicked] = useState(false);

    const handleClick: HandleClick = useCallback(
      event => {
    const { target } = event;
    if (
      target instanceof HTMLDivElement ||
      target instanceof HTMLParagraphElement ||
      target instanceof HTMLLIElement
    ) {
      const index = Number(target.dataset.id);
      if (!isClicked) {
        setIsShowHotelier(index);
        setIsClicked(true);
      }
    }
  },
      [isClicked, setIsShowHotelier, setIsClicked]
    );
    const handleClear = () => {
      setSearchQuery('');
      setFilteredHoteliers(hoteliers);
      setIsClearClicked(false);
    };
  useEffect(() => {
    if (hoteliers.length > 0) hoteliers.map(({ owner }) => dispatch(fetchHotelsById(owner)));
    // eslint-disable-next-line
  }, [dispatch]);
  // const handleLabel = (e) => {
  //     const labelSearch =  labelVisible 
  // }
  const handleSearch = () => {
    const newFilteredHoteliers = searchQuery
      ? hoteliers.filter(hotelier =>
          hotelier.owner.toString().includes(searchQuery) ||
          hotelier.hotels?.some(hotel => hotel.toLowerCase().includes(searchQuery.toLowerCase()))
        )
      : hoteliers;
      setIsClearClicked(true);
    setFilteredHoteliers(newFilteredHoteliers);
  };
  

  return (
    <Wrapper onClick={handleClick}>
      <FunProf>
       <SearchInputContainer>
        <SearchInput
         className="input"
         type="text"
         placeholder= "Search ID Hoteliers or/and Name object"
         value={searchQuery}
         onChange={(e) => setSearchQuery(e.target.value)}
         />
         <LabelForm className="label" htmlFor="input-id">Search ID Hoteliers or/and Name object</LabelForm>
         <SearchIcon src={pic} alt="Search" />
       </SearchInputContainer>
        
         {isClearClicked ? (
         <ClearButton onClick={handleClear} hasText={searchQuery.length > 0}>Close</ClearButton> 
         ) :  <YellowButton onClick={handleSearch} >Search</YellowButton>}
         
         </FunProf>
      {filteredHoteliers.length > 0 &&
        filteredHoteliers.map(({ owner, hotels, status }, index) => (
          <Inner
            border={isShowHotelier === index}
            hidden={isShowHotelier !== index && isShowHotelier !== null}
            position={isShowHotelier !== null}
            key={owner}
            tabIndex={index}
          >
            <TextID tabIndex={index}>ID {owner}</TextID>
            <WrapperText tabIndex={index} typePage={type}>
              <TextContent tabIndex={index}>
                {isLoadingHotels && <Spinner />}
                {!isLoadingHotels && isShowHotelier !== index && (hotels && hotels.length > 6 ? hotels.slice(0, 6).join(' ') : hotels?.join(' '))}
                {!isLoadingHotels &&
                  isShowHotelier !== index &&
                  hotels &&
                  hotels.length > 0 &&
                  '...'}
                {isShowHotelier === index && type && type === 'Finance' && (
                  <>
                    {hotels?.join(' ')}
                    <AccountHotelier id={owner}/>
                  </>
                )}
              </TextContent>
            </WrapperText>
            <div style={{ marginLeft: 'auto', paddingLeft: '20px' }}>
              {status === 'active' ? (
                <img src={likeIcon} alt="like" width="20px" height="20px" />
              ) : (
                <img src={dislikeIcon} alt="dislike" width="20px" height="20px" />
              )}
            </div>
          </Inner>
        ))}
    </Wrapper>
  );
}
)

