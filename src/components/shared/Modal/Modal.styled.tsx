import styled from 'styled-components/macro';
import { ReactComponent as IconClose } from 'assets/icons/iconClose.svg';

export const BackdropStyled = styled.div`
  position: fixed;
  inset: 0;
  z-index: ${({ theme }) => theme.zIndex.modal};

  display: flex;
  padding: 40px 20px;
  overflow-y: scroll;

  background-color: ${({ theme }) => theme.colors.bgTransparent.buttonCancelDeleteHover};
  opacity: 0.99;

  transition: ${({ theme }) => theme.transition[110]};
  transition-property: visibility, opacity, transform;

  &.isHidden {
    visibility: hidden;
    opacity: 0;
  }
`;

export const ModalStyled = styled.div`
  position: relative;

  min-height: 277px;
  margin: auto;

  /* background-color: ${({ theme }) => theme.colors.white}; */
  border-radius: 4px;
  /* box-shadow: ${({ theme }) => theme.shadows.modal}; */

  transition: transform ${({ theme }) => theme.transition[110]};

  &.isHidden {
    transform: scale(1.08);
  }
`;

export const CloseModalButtonStyled = styled.button`
  position: absolute;
  top: -24px;
  right: -28px;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 0;

  color: ${({ theme }) => theme.colors.textThird};

  background-color: ${({ theme }) => theme.colors.bg.buttonEdit};
  border: 1px solid transparent;
  border-radius: 50%;

  transition: ${({ theme }) => theme.transition[110]};
  transition-property: color, background-color;
  fill: currentColor;

  &:hover:not(:disabled) {
    color: ${({ theme }) => theme.colors.textAccent};
    background-color: ${({ theme }) => theme.colors.bgTransparent.buttonEditHover};
  }

  &:active:not(:disabled) {
    color: ${({ theme }) => theme.colors.textAccent};
    background-color: ${({ theme }) => theme.colors.bgTransparent.buttonEditActive};
    border-color: white;
  }
`;

export const CloseModalIcon = styled(IconClose)`
  width: 12px;
  height: 12px;

  fill: currentColor;
`;
