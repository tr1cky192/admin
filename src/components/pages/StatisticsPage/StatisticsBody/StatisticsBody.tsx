import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectorHoteliers } from 'features/hoteliers/hoteliersSelectors';
import { ListLoader } from 'components/shared/Loader';
import { ListItem, TextItem, TextSpan, WrapperBody } from './StatisticsBody.styled';


type Statistic = {
  title: string;
  value: number;
  isClicked: boolean;
};

type Prop = {
  isShowPage: boolean;
  setIsShowPage: React.Dispatch<React.SetStateAction<boolean>>;
  isShowUsersPage: boolean;
  setIsShowUsersPage: React.Dispatch<React.SetStateAction<boolean>>;
};

 const statisticsData: Statistic[] = [
   { title: 'Hoteliers:', value: 35, isClicked: false },
   { title: 'Objects:', value: 30, isClicked: false },
   { title: 'Booking Options:', value: 1555, isClicked: false },
   { title: 'Users:', value: 103, isClicked: false },
   { title: 'Completed bookings:', value: 1555, isClicked: false },
   { title: 'Agents:', value: 89, isClicked: false },
 ];

export const StatisticsBody: React.FC<Prop> = ({
  isShowPage,
  setIsShowPage,
  isShowUsersPage,
  setIsShowUsersPage,
}) => {
  const [statistics, setStatistics] = useState(statisticsData);
  const [activeIndex, setActiveIndex] = useState<number | null>(-1);
  const { hoteliers, isLoadingHoteliers } = useSelector(selectorHoteliers);

  const hoteliersAmount = hoteliers.length && hoteliers.length;
  statisticsData[0].value = hoteliersAmount;

  const handleClick = (index: number) => {
    setActiveIndex(index !== activeIndex ? index : null);
    const updatedStatistics = statistics.map((stat, i) => ({
      ...stat,
      isClicked: i === index,
    }));
    setStatistics(updatedStatistics);
  };

  const togglePage = (title: string) => {
    if (title === 'Hoteliers:') {
      setIsShowPage(!isShowPage);
    } else setIsShowPage(false);
    if (title === 'Users:') {
      setIsShowUsersPage(!isShowUsersPage);
    } else setIsShowUsersPage(false);
  };

  return (
    <div>
      <WrapperBody>
        {isLoadingHoteliers ? (
          <ListLoader />
        ) : (
          statistics.map(({ title, value, isClicked }, index) => (
            <ListItem key={title} onClick={() => handleClick(index)} isClicked={isClicked}>
              <TextItem onClick={() => togglePage(title)}>{title} </TextItem>
              <TextSpan>{value}</TextSpan>
            </ListItem>
          ))
        )}
      </WrapperBody>
    </div>
  );
};
