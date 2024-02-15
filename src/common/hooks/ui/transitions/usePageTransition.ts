import { useCallback, useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const usePageTransition = () => {
  const location = useLocation();
  const [currentLocation, setCurrentLocation] = useState(() => location);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (location === currentLocation) return;

    setShow(true);
  }, [location, currentLocation]);

  const onAnimationEnd = useCallback(() => {
    if (!show) return;
    setShow(false);
    setCurrentLocation(location);
  }, [location, show]);

  const result = useMemo(() => ({ onAnimationEnd, show }), [onAnimationEnd, show]);
  return result;
};
