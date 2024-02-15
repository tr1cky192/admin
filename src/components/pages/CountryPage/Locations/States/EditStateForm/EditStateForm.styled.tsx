import styled, { css } from 'styled-components/macro';

export const StateInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 12px;

  padding: 10px 20px;
  word-break: break-all;
`;

export const EditStateFormStyled = styled.form`
  position: relative;
  display: flex;
  align-items: flex-start;

  /* @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 12px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    gap: 20px;
  } */
`;

export const nameLabel = css`
  display: flex;
  align-items: baseline;
  gap: 4px;
  width: fit-content;

  > span {
    color: #888;
  }
`;

export const editPhotoLabel = css`
  display: flex;
  flex-direction: column;
  width: 96%;

  > span {
    color: #777;
  }
`;

export const editInputBorder = css`
  background: none;
  border: 2px solid transparent;

  @media screen and (prefers-reduced-motion: no-preference) {
    transition: border-color ${({ theme }) => theme.transition[110]};
  }

  &:not(:disabled) {
    border-color: ${({ theme }) => theme.colors.border.input};

    &:hover {
      border-color: ${({ theme }) => theme.colors.borderTransparent.inputHover};
    }

    &:focus {
      border-color: ${({ theme }) => theme.colors.borderTransparent.inputFocus};
      outline: none;
    }
  }
`;

export const inputFont = css`
  width: 180px;
  font-weight: 700;
  font-size: 1.1rem;
`;

export const StateNameLabel = styled.label`
  ${nameLabel}
`;

export const EditStatePhotoLabel = styled.label`
  ${editPhotoLabel}
`;

export const StateNameInput = styled.input`
  ${inputFont}

  ${editInputBorder}
`;

export const EditStatePhotoURLInput = styled.input`
  ${editInputBorder}
`;
