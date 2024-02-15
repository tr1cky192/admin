import { Hoteliers } from 'components/pages/StatisticsPage/Hoteliers/Hoteliers';
import type { Dispatch} from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchHoteliers } from 'features/hoteliers/hoteliersOperation';
import { selectorHoteliers } from 'features/hoteliers/hoteliersSelectors';
import { selectorFinanceStatistic } from 'features/financeStatistic/financeSelectors';
import { Spinner } from 'components/shared/Loader';
import { fetchFinanceStatistic } from 'features/financeStatistic/financeOperation';
import s from './Finance.module.css';

export const FinanceMain: React.FC = () => {
  const g = "'";
const { hoteliers, isLoadingHoteliers } = useSelector(selectorHoteliers);
  const { finances, isLoadingFinance } = useSelector(selectorFinanceStatistic);
  const {
    bonusFundsOnHoteliersAccounts,
    fundsOnHotelierAccounts,
    grossHotelRevens,
    hoteliersHavePaid,
    hoteliersPaidWithBonuses,
  refundsOfUnspentMoneyToHoteliers
  } = finances;
  // eslint-disable-next-line
  type DispatchAction = Dispatch<any>;
  const dispatch: DispatchAction = useDispatch();

  useEffect(() => {
    if (hoteliers.length === 0) {
      dispatch(fetchHoteliers());
    }
    dispatch(fetchFinanceStatistic());
    // eslint-disable-next-line
  }, [dispatch]);


  return (
    <div className={s.wrapper}>
        <div style={{ marginTop: '60px' }} className={s.mainDiv}>
          <div className={s.greenDiv}>
            <p className={s.greenP}>All statistic</p>
          </div>
          {isLoadingFinance ? <Spinner /> : <div className={s.containerDiv}>
            <div>
              <p className={s.descP}>Funds added to hotelier accounts:</p>
              <p className={s.descP}>Bonus funds added to hoteliers{g} accounts:</p>
              <p className={s.descP}>Refunds of unspent money to hoteliers:</p>
              <p className={`${s.descP} ${s.descP3}`}>Gross hotel revens:</p>
              <p className={`${s.descP} ${s.descP2}`}>
                Hoteliers paid for our services with bonuses:
              </p>
              <p className={s.descP}>Hoteliers have paid for our services:</p>
            </div>
            <div className={s.containerDivBox2}>
              <span className={s.priseSpan}>{fundsOnHotelierAccounts},00 USD</span>
              <span className={s.priseSpan}>{bonusFundsOnHoteliersAccounts},00 USD</span>
              <span className={s.priseSpan}>{refundsOfUnspentMoneyToHoteliers},00 USD</span>
              <span className={`${s.priseSpan} ${s.priseSpan3}`}>{grossHotelRevens},00 USD</span>
              <span className={`${s.priseSpan} ${s.priseSpan2}`}>
                {hoteliersPaidWithBonuses},00 USD
              </span>
              <span className={s.priseSpan}>{hoteliersHavePaid},00 USD</span>
            </div>
          </div>}
        </div>
      {isLoadingHoteliers ? <Spinner /> : hoteliers.length > 0 && <Hoteliers page="Finance" />}
    </div>
  );
};
