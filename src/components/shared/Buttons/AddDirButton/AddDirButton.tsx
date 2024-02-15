import type { MouseEvent, ReactNode } from 'react';
import { AddDirButtonStyled } from './AddDirButton.styled';

type AddDirButtonType = {
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  disabled: boolean;
  type?: 'button' | 'submit' | 'reset' | undefined;
  children?: ReactNode;
  $isEnabled?: boolean;
};

export const AddDirButton = ({
  onClick,
  disabled,
  type = 'button',
  children,
  $isEnabled,
}: AddDirButtonType) => (
  <AddDirButtonStyled onClick={onClick} type={type} disabled={disabled} $isEnabled={$isEnabled}>
    {children}
  </AddDirButtonStyled>
);
