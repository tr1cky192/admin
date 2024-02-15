import { fetchHoteliers } from 'features/hoteliers/hoteliersOperation';
import type { Dispatch } from 'redux';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { InputEmail } from '../Access/InputEmail';
import { Inner, Wrapper } from './Statistics.styled';
import { StatisticsBody } from './StatisticsBody/StatisticsBody';
import { StatisticsHeader } from './StatisticsHeader/StatisticsHeader';
import { Hoteliers } from './Hoteliers/Hoteliers';
import { Users } from './Users/Users';

export const StatisticsPage = () => {
  const [isShowPage, setIsShowPage] = useState<boolean>(false);
  const [isShowUsersPage, setIsShowUsersPage] = useState(false);
  // eslint-disable-next-line
  type DispatchAction = Dispatch<any>;
  const dispatch: DispatchAction = useDispatch();

  useEffect(() => {
    dispatch(fetchHoteliers());
     
  }, [dispatch]);

  return (
    <Wrapper>
      <Inner>
        <StatisticsHeader type="Statistic" />
        <StatisticsBody
          setIsShowPage={setIsShowPage}
          isShowPage={isShowPage}
          isShowUsersPage={isShowUsersPage}
          setIsShowUsersPage={setIsShowUsersPage}
        />
      </Inner>
      {isShowPage && <Hoteliers />}
      {isShowUsersPage && <Users isShowUsersPage={isShowUsersPage} />}
    </Wrapper>
  );
};

export const Statistics = () => (
  <div>
    <InputEmail component={StatisticsPage} />
  </div>
);
