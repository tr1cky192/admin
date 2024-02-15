import styled from 'styled-components/macro';

export const DistrictsListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: clamp(4px, 1.6vw, 8px);
`;

export const DistrictItemStyled = styled.li`
  display: flex;
  justify-content: space-between;
  gap: clamp(4px, 1.6vw, 8px);
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.list};
`;
