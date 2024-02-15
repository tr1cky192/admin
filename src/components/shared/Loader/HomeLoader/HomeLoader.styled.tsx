import styled from 'styled-components/macro';
import { keyframes } from 'styled-components';

type Props = {
  type?: string;
};

export const WrapperLoader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const pulsate = keyframes`
  0% {
    transform: scale(0.6);
    opacity: 0.6;
  }
  50% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0.6);
    opacity: 0.6;
  }
`;

export const Svg = styled.img<Props>`
  position: absolute;
  top: ${({ type }) => (type === 'mowgli' ? '21px' : '42px')};
  left:${({ type }) => (type === 'mowgli' ? '23px' : '45px')};
  animation: ${pulsate} 1.2s ease-in-out infinite;
`;

