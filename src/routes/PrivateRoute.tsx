import { Navigate, useLocation, Outlet } from 'react-router-dom';
import { useAppSelector } from 'App';
import { selectIsLoggedIn } from 'features/common';

type RouteType = {
  navigateTo?: string;
};

export const PrivateRoute = ({ navigateTo = '/' }: RouteType) => {
  const auth = useAppSelector(selectIsLoggedIn);
  const { pathname } = useLocation();
  return !auth ? <Navigate to={navigateTo} replace state={{ from: pathname }} /> : <Outlet />;
};
