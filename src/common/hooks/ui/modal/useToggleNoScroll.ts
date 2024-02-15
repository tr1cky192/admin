import { useAppSelector } from 'App';
import { useEffect, useMemo, useRef, useState } from 'react';
import { selectIsModalOpen } from 'features/common';
import { getScrollWidth } from 'common/utils';

export const useToggleNoScroll = () => {
  const isModalOpen = useAppSelector(selectIsModalOpen);
  const [scrollWidth, setScrollWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || isModalOpen) return;
    setScrollWidth(getScrollWidth(ref.current));
  }, [isModalOpen, ref]);

  return useMemo(() => ({ isModalOpen, ref, scrollWidth }), [isModalOpen, ref, scrollWidth]);
};
