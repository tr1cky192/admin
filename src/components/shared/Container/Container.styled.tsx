import styled from 'styled-components/macro';

export const ContainerStyled = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.mobile};
  margin: 0 auto;
  padding: 0 20px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: ${({ theme }) => theme.breakpoints.tablet};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-width: ${({ theme }) => theme.breakpoints.desktop};
    padding: 0 60px;
  }
`;

type ScrollProps = {
  isModalOpen: boolean;
  scrollWidth: number;
};

export const ScrollContainerStyled = styled.div.attrs(
  ({ isModalOpen, scrollWidth }: ScrollProps) => ({
    isModalOpen,
    scrollWidth,
  })
)`
  min-height: 100vh;
  margin-right: ${({ isModalOpen, scrollWidth }) => isModalOpen && `${scrollWidth}px`};
  overflow-y: ${({ isModalOpen }) => (isModalOpen ? 'hidden' : 'scroll')};
`;
