import { ReactComponent as IconEdit } from 'assets/icons/iconEdit.svg';
import styled from 'styled-components/macro';

export const EditButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 50px;
  height: 45px;
  padding: 12px;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 2px;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.bgTransparent.buttonEditHover};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.bgTransparent.buttonEditActive};
    border-color: white;
  }
`;

export const IconPencil = styled(IconEdit).attrs(({ $isFirstEdit }: { $isFirstEdit: boolean }) => ({
  $isFirstEdit,
}))`
  color: ${({ $isFirstEdit }) => ($isFirstEdit ? 'orange' : '#9B9B9B')};
`;
