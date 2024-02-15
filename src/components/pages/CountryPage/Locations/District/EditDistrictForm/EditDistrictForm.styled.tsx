import styled from 'styled-components/macro';
import {
  editInputBorder,
  editPhotoLabel,
  inputFont,
  nameLabel,
} from '../../States/EditStateForm/EditStateForm.styled';

export const DistrictInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 12px;

  padding: 16px 4px 8px 16px;
`;

export const EditDistrictFormStyled = styled.form`
  position: relative;

  display: flex;
  flex-grow: 1;
  align-items: flex-start;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 12px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    gap: 20px;
  }
`;

export const DistrictNameLabel = styled.label`
  ${nameLabel}
`;

export const EditDistrictPhotoLabel = styled.label`
  ${editPhotoLabel}
`;

export const DistrictNameInput = styled.input`
  width: 144px;

  ${inputFont}

  ${editInputBorder}
`;

export const EditDistrictPhotoURLInput = styled.input`
  ${editInputBorder}
`;
