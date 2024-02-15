import styled from 'styled-components/macro';
import { slideInLeft, slideOutLeft } from 'App/App.styled';

export const HomeStyled = styled.section`
  padding: 74px 0;

  &.page-fade-enter {
    animation: ${slideInLeft} 0.2s forwards;
  }

  &.page-fade-exit {
    animation: ${slideOutLeft} 0.2s forwards;
  }
`;

export const HomeNavListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 72px;

  > li:nth-of-type(1) {
    > div {
      gap: 65px;
    }

    @media screen and (max-width: 767px) {
      padding: 113px 20px 0;
    }

    padding: 113px 25px 0;

    :hover {
      padding: 113px 24px 0;
    }
  }

  > li:nth-of-type(2) {
    padding: 118px 0 140px;
  }

  > li:nth-of-type(3) {
    > div {
      font-size: 23px;
      flex-direction: column;
      align-items: flex-start;
      gap: 32px;

      > p {
        text-align: left;
      }
    }

    @media screen and (max-width: 767px) {
      padding: 73px 37px 0;
    }
    padding: 75px 42px 0;

    :hover {
      padding: 75px 41px 0;
    }
  }

  > li:nth-of-type(4) {
    padding: 17px 22px 0;
  }

  > li:nth-of-type(5) {
    padding: 89px 32px 0;
  }

  > li:nth-of-type(6) {
    padding: 89px 32px 0;
  }

  > li:nth-of-type(7) {
    padding: 39px 40px 0;
    max-height: 111px;
  }

  > li {
    :hover {
      border: 2px solid ${({ theme }) => theme.colors.border.hoverBorder};
    }
  }
`;



export const TextSmall = styled.p`
  display: flex;
  justify-content: space-around;
  font-weight: 400;
  font-size: 15px;
  line-height: 1.2;
  font-family: ${({ theme }) => theme.fonts.roboto};
  color: ${({ theme }) => theme.colors.black};
  > span {
    color: ${({ theme }) => theme.colors.textAccent};
  }
`;


export const StatsListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top:14px;
`;

export const StatsListItem = styled.li``;

export const TextMedium = styled(TextSmall)`
  display: flex;
  justify-content: space-between;

  font-size: 21px;
  font-weight: 300;
  line-height: 1.19;
  text-align: center;
`;

export const TextMediumAccent = styled(TextMedium)`
  justify-content: center;

  min-width: 40px;

  font-weight: 400;
  color: ${({ theme }) => theme.colors.textSecond};
`;


