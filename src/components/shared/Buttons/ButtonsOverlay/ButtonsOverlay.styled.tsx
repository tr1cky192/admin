import styled from 'styled-components/macro';

export const ButtonsOverlay = styled.div.attrs(({ $isEditing }: { $isEditing?: boolean }) => ({
  $isEditing,
}))`
  position: absolute;
  top: 4px;
  right: 8px;
  display: flex;
  align-items: center;
  gap: 8px;

  opacity: ${({ $isEditing }) => ($isEditing ? 0.99 : 0.6)};

  @media (prefers-reduced-motion: no-preference) {
    transition: opacity ${({ theme }) => theme.transition[110]};
  }

  :hover,
  :focus {
    opacity: 0.99;
  }
`;
