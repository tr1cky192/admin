import { rgba } from 'polished';
import styled, { keyframes } from 'styled-components/macro';

export const AppStyled = styled.div`
  height: 100vh;
`;

export const slideInLeft = keyframes`
  from {
    visibility: visible;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;

export const slideOutLeft = keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`;

const tomato = rgba('#cafe', 0.8);

export const DevIndicator = styled.div`
  position: absolute;
  top: 12px;
  right: 28px;
  display: flex;

  align-items: center;
  justify-content: center;

  width: 50px;
  height: 32px;
  background-color: ${tomato};

  transform: rotate(45deg);

  &::before {
    position: absolute;
    bottom: 0;
    left: -32px;

    width: 0;
    height: 0;
    content: '';

    border-bottom: 32px solid ${tomato};
    border-left: 32px solid transparent;
  }

  &::after {
    position: absolute;
    right: -32px;
    bottom: 0;

    width: 0;
    height: 0;
    content: '';

    border-right: 32px solid transparent;
    border-bottom: 32px solid ${tomato};
  }
`;
