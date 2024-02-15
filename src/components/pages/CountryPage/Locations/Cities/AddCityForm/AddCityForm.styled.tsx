import styled from 'styled-components/macro';
import { editInputBorder, inputFont } from '../../States/EditStateForm/EditStateForm.styled';

export const AddCityFormStyled = styled.form`
  padding: 12px 16px;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const AddCityNameLabel = styled.label``;

export const AddCityPhotoLabel = styled.label``;

export const AddCityNameInput = styled.input`
  ${inputFont}

  ${editInputBorder}
`;

export const AddCityPhotoInput = styled.input`
  ${editInputBorder}
`;
