import { memo, useMemo, useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { Dispatch } from 'react';
import { getStatistic } from 'features/statistic/statisticSelectors';
import { Container } from 'components/shared/Container';
import { routes } from 'routes/routesConfig';
import { LoaderMiddleware } from 'components/shared/Loader/HomeLoader/LoaderMiddleware';
import { Link } from 'react-router-dom';
import { fetchStatistic } from 'features/statistic/statisticOperation';
import { baseUrl, endpoints } from 'features/api';
import {
  HomeStyled,
  HomeNavListStyled,
  TextSmall,
  StatsListStyled,
  StatsListItem,
  TextMedium,
  TextMediumAccent,
} from './Home.styled';

const { verification, finance, statistics, country } = routes;

type HomeNavListInterface = {
  users: number;
  hoteliers: number;
  agents: number;
  objects: number;
};
type DataProp = {
  _id: string;
  lastName: string;
  firstName: string;
};
type StatItem = {
  text: {
    en: string;
    ua: string;
    ru: string;
  };
  data: string | number;
};

type StatsListType = {
  items: StatItem[];
};

const StatsList = ({ items }: StatsListType) => (
  <StatsListStyled>
    {items.map(({ text, data }) => (
      <StatsListItem key={text.en}>
        <TextMedium as="div">
          <p>{text.en}</p>
          <TextMediumAccent as="span">{data}</TextMediumAccent>
        </TextMedium>
      </StatsListItem>
    ))}
  </StatsListStyled>
);

const StatsListMemoized = memo(StatsList);

const HomeNavList = ({ users, hoteliers, agents, objects }: HomeNavListInterface) => {
  type DispatchAction = Dispatch<any>;
  const dispatch: DispatchAction = useDispatch();

  useEffect(() => {
    dispatch(fetchStatistic());
  }, [dispatch]);

  const statItems = useMemo(
    () => [
      { text: { en: 'Users: ', ua: 'Користувачі: ', ru: 'Юзеры: ' }, data: users },
      { text: { en: 'Hoteliers: ', ua: 'Готельєри ', ru: 'Отельеры: ' }, data: hoteliers },
      { text: { en: 'Agents: ', ua: 'Агенти ', ru: 'Агенты: ' }, data: agents },
      { text: { en: 'Objects: ', ua: "Об'єкти ", ru: 'Объекты: ' }, data: objects },
      {
        text: { en: 'Booking Options:', ua: 'Варіанти бронювання', ru: 'Варианты бронирования:' },
        data: objects,
      },
    ],
    [agents, hoteliers, objects, users]
  );

  return (
    <>
      <HomeNavListStyled>
        <LoaderMiddleware path={routes.verification.path.verification}>
          <p>{verification.name}</p>
          <TextSmall>
            <span>105</span> objects are waiting
          </TextSmall>
        </LoaderMiddleware>
        <LoaderMiddleware path={finance.path}>
          <p>{finance.name}</p>
        </LoaderMiddleware>
        <LoaderMiddleware path={country.path}>
          <p>Adding a languages</p>
          <p>Adding a country&apos;s</p>
          <p>Location registers: 1, 2, 3</p>
        </LoaderMiddleware>
        <LoaderMiddleware path={statistics.path}>
          <p>{statistics.name}</p>
          <StatsListMemoized items={statItems} />
        </LoaderMiddleware>
        <LoaderMiddleware path={routes.adminPageAccess.path}>
          {routes.adminPageAccess.name}
        </LoaderMiddleware>
        <LoaderMiddleware path={routes.blog.path}>{routes.blog.name}</LoaderMiddleware>
        <LoaderMiddleware path={routes.mowgliBooking.path} type="mowgli">
          {routes.mowgliBooking.name}
        </LoaderMiddleware>
      </HomeNavListStyled>
      <Link to={routes.registerModal.path}>Temporary link for Location Register Modal</Link>
    </>
  );
};

export const Home: React.FC = () => {
  const statistic = useSelector(getStatistic);
  const [usersCount, setUsersCount] = useState(0);
  const [hoteliersCount, setHoteliersCount] = useState<number>(0);
  const { result } = statistic;

  const { amount, objectOnVerification } = result;
  const { agents } = amount;
  
  useEffect(() => {
    fetch('https://server-your-price-booking.onrender.com/api/acsess-to-admin/get-all-users')
      .then(response => response.json())
      .then((data: { code: number; users: DataProp[] }) => {
        if (data.code === 200 && data.users && Array.isArray(data.users)) {
          setUsersCount(data.users.length);
          console.log('edg',hoteliersCount);
        }
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  useEffect(() => {
    fetch(`${baseUrl}/acsess-to-admin${endpoints.hoteliers}`)
      .then(response => response.json())
      .then(data => {
        if (data && typeof data.count === 'number') {
          setHoteliersCount(data.count as number);
        } else {
          console.error('Invalid or missing count data from API');
        }
      })
      .catch(error => {
        console.error('Error fetching hoteliers count:', error);
      }); 
  }, []);

  return (
    <HomeStyled>
      <Container>
        <HomeNavList
          users={usersCount}
          hoteliers={hoteliersCount}
          agents={agents}
          objects={objectOnVerification}
        />
      </Container>
    </HomeStyled>
  );
};