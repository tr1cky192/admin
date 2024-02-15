import { useToggleNoScroll } from 'common/hooks';
import type { PropsWithChildren } from 'react';
import { ScrollContainerStyled } from './Container.styled';

export const ScrollContainer = ({ children }: PropsWithChildren) => {
  const { isModalOpen, scrollWidth, ref } = useToggleNoScroll();
  return (
    <ScrollContainerStyled ref={ref} scrollWidth={scrollWidth} isModalOpen={isModalOpen}>
      {children}
    </ScrollContainerStyled>
  );
};
