import styled from 'styled-components/macro';

type Props = {
  isClicked: boolean;
}


export const WrapperBody = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 21px;

  @media screen and (min-width: 768px) {
    height: 160px;
    flex-wrap: wrap;
    column-gap: 40px;
  }

  @media screen and (min-width: 1024px) {
    column-gap: 114px;
  }

  @media screen and (min-width: 1200px) {
    height: 139px;
    column-gap: 81px;

    > li:nth-child(5) {
      margin-bottom: 45px;
    }
  }
`;

export const ListItem = styled.li<Props>`
  display: flex;
  justify-content: space-between;
  cursor: pointer;

  > p {
    font-weight: ${({ isClicked }) => (isClicked ? 600 : 300)};
  }

  > span {
    font-weight: ${({ isClicked }) => (isClicked ? 600 : 400)};
  }

  &:hover {
    > p {
      font-weight: ${({ isClicked }) => !isClicked && 400};
    }
  }

  @media screen and (min-width: 768px) {
    width: 46%;
  }

  @media screen and (min-width: 1024px) {
    width: 42%;
  }

  @media screen and (min-width: 1200px) {
    width: 27%;
  }
`;


export const TextItem = styled.p`
  font-family: ${({ theme }) => theme.fonts.roboto};
  font-size: 18px;
  line-height: 25px/18px;

  color: ${({ theme }) => theme.colors.black};

  @media screen and (min-width: 350px) {
    font-size: 21px;
    line-height: 25px/21px;
  }
`;


export const TextSpan = styled.span`
  font-family: ${({ theme }) => theme.fonts.roboto};
  font-size: 18px;
  line-height: 25px/18px;

  margin-left: 10px;

  color: ${({ theme }) => theme.colors.textAccent};

  @media screen and (min-width: 350px) {
    font-size: 21px;
    line-height: 25px/21px;
  }

  @media screen and (min-width: 768px) {
    width: 19%;
  }
`;
