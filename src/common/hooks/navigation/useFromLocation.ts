import { useLocation } from 'react-router-dom';

type LocationState = {
  state?: { from?: string };
};

export const useFromLocation = () => {
  const location = useLocation() as LocationState;
  return location.state?.from ?? '/menu';
};
