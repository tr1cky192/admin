import styled from 'styled-components/macro';

type Prop = {
  padding?: boolean | undefined;
};

export const Wrapper = styled.div<Prop>`
  position: relative;
  padding: ${({ padding }) => (padding ? '21px 54px 79px 62px' : '21px 54px')};

  margin-top: 34px;

  background-color: ${({ theme }) => theme.colors.white};

  border: 1px solid ${({ theme }) => theme.colors.border.list};
  border-radius: 9px;
`;
export const YellowButton = styled.button`
  width: 108px;
  height: 38px;
  background-color: yellow;
  border: none;
  border-radius: 50px; 
  color: black; 
  font-weight: bold; 
  cursor: pointer;
  img {
    height: 16.57px;
    width: 16.57px;
    margin-right: 15px;
  }
`;

export const WrapperArrow = styled.div`
  position: absolute;
  left: 5px;
  top: 9px;

  width: 48px;
  height: 48px;
  border-radius: 50%;

  > div {
    > div {
      > svg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }

  &:hover {
    background: ${({ theme }) => theme.colors.hoverArrowHotelier};
    transition: 0.3s ease-in-out;
    transform: rotate(180deg);
  }

  &:hover {
    > div {
      > div {
        > svg {
          > path {
            fill: #787878;
          }
        }
      }
    }
  }
`;
