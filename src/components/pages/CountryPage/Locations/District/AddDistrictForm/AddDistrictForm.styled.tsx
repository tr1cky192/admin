import styled from 'styled-components/macro';
import { editInputBorder, inputFont } from '../../States/EditStateForm/EditStateForm.styled';

export const AddDistrictFormStyled = styled.form`
  padding: 12px 16px;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const AddDistrictNameLabel = styled.label``;

export const AddDistrictPhotoLabel = styled.label``;

export const AddDistrictNameInput = styled.input`
  ${inputFont}

  ${editInputBorder}
`;

export const AddDistrictPhotoInput = styled.input`
  ${editInputBorder}
`;
