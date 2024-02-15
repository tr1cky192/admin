import type { MouseEvent } from 'react';
import { EditButtonStyled, IconPencil } from './EditButton.styled';

type EditButtonType = {
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  disabled: boolean;
  $isFirstEdit: boolean;
  type?: 'button' | 'submit' | 'reset' | undefined;
};

export const EditButton = ({
  onClick,
  disabled,
  $isFirstEdit,
  type = 'button',
}: EditButtonType) => (
  <EditButtonStyled onClick={onClick} type={type} disabled={disabled}>
    <IconPencil $isFirstEdit={$isFirstEdit} />
  </EditButtonStyled>
);
