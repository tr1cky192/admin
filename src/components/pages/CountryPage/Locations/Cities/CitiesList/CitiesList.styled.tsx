import styled from 'styled-components/macro';

export const CitiesListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: clamp(4px, 1.6vw, 8px);
`;

export const CityItemStyled = styled.li`
  position: relative;

  max-width: 360px;

  border-bottom: 1px solid ${({ theme }) => theme.colors.border.list};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: grid;
    align-items: baseline;
    justify-content: space-between;
    grid-template-columns: 100% 110%;

    border-right: 1px solid ${({ theme }) => theme.colors.borderTransparent.bgBlock};
    border-left: 1px solid ${({ theme }) => theme.colors.borderTransparent.bgBlock};
  }
`;

/*
  1200 * 1vw = 12px
  4px, 1200px *  = 20.4px, 20px
  320px * 0.017 = 5.44px


4px, Xvw, 20px
4px < Xvw < 20px

Xvw = Ypx * x;

4px < Xvw = 1200px * x < 20px;
4px < Xvw = 768px * x < 20px;
4px < Xvw = 320px * x < 20px;

4px < Xvw =  x < 20px / 1200px; < 0.0166666666666667
4px < Xvw =  x < 20px / 768px; < 0.0260416666666667
4px < Xvw =  x < 20px / 320px; < 0.0625

x = Xvw / 1200px
x = Xvw / 768px
x = Xvw / 320px

  */
