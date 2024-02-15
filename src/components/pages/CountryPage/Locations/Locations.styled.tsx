import styled from 'styled-components/macro';

export const LocationsWrapper = styled.section`
  min-height: 832px;
  margin-bottom: 46px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border.list};
  border-radius: 9px;
  box-shadow: ${({ theme }) => theme.shadows.countrySelector};
`;

export const AddLocationsContent = styled.div``;

export const AddLocationsList = styled.ul``;

export const AddLocationsItem = styled.ul`
  padding: 9px 0 18px 30px;
  border-bottom: 5px solid ${({ theme }) => theme.colors.border.list};
`;

export const Row = styled.div`
  display: flex;
  gap: 20px;
`;

export const EditLocationsItemStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 9px 0 18px 30px;
  border-bottom: 5px solid ${({ theme }) => theme.colors.border.list};
`;
