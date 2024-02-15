import type { MouseEvent, ReactNode } from 'react';
import { UrlDirButtonStyled } from './UrlDirButton.styled';

type TUrlDirButton = {
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset' | undefined;
  disabled?: boolean;
  children?: ReactNode;
  $isEnabled?: boolean;
  variable?: string;
  color?: string | false | undefined | null;
};

export const UrlDirButton = ({
  onClick,
  type = 'button',
  disabled,
  children,
  $isEnabled = true,
  variable = 'green',
  color,
}: TUrlDirButton) => (
  <UrlDirButtonStyled
    type={type}
    disabled={disabled}
    onClick={onClick}
    $isEnabled={$isEnabled}
    style={color ? { background: variable, color } : { background: variable }}
  >
    {children}
  </UrlDirButtonStyled>
);
