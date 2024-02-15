import { ReactSVG } from "react-svg";
import { useState } from "react";
import { StatisticsHeader } from "../StatisticsHeader/StatisticsHeader";
import { Wrapper, WrapperArrow } from "./Hoteliers.styled";
import { HoteliersList } from "./HoteliersList/HoteliersList";
import arrow from '../../../../assets/icons/arrowHoteliers.svg'


type Prop = {
  page?: string;
};

export const Hoteliers: React.FC<Prop> = ({ page }) => {
     const [isShowHotelier, setIsShowHotelier] = useState<number | null>(null);
     const [isClicked, setIsClicked] = useState<boolean>(false);
    const closeAccount = () => {
      setIsShowHotelier(null);
      setIsClicked(false)
    };

  return (
    <Wrapper padding={typeof isShowHotelier === 'number'}>
      {typeof isShowHotelier === 'number' && (
        <WrapperArrow onClick={closeAccount}>
          <ReactSVG src={arrow} />
        </WrapperArrow>
      )}
      <StatisticsHeader type="Hoteliers" isShowHotelier={isShowHotelier} />
        <HoteliersList
          type={page}
          isShowHotelier={isShowHotelier}
          setIsShowHotelier={setIsShowHotelier}
          isClicked={isClicked}
          setIsClicked={setIsClicked}

        />
    </Wrapper> 
  );
      };