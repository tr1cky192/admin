import styled from 'styled-components/macro';
import {
  editInputBorder,
  editPhotoLabel,
  inputFont,
  nameLabel,
} from '../../States/EditStateForm/EditStateForm.styled';

export const CityInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 12px;

  padding: 16px 8px 8px 12px;
`;

export const EditCityFormStyled = styled.form`
  position: relative;
  display: flex;
  align-items: flex-start;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 12px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    gap: 20px;
  }
`;

export const CityNameLabel = styled.label`
  ${nameLabel}
`;

export const EditCityPhotoLabel = styled.label`
  ${editPhotoLabel}
`;

export const CityNameInput = styled.input`
  width: 144px;

  ${inputFont}

  ${editInputBorder}
`;

export const EditCityPhotoURLInput = styled.input`
  ${editInputBorder}
`;
