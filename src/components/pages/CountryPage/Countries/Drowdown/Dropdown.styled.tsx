import styled from 'styled-components/macro';

export const DropdownStyled = styled.div`
  position: absolute;
  top: 100%;
  z-index: ${({ theme }) => theme.zIndex.countryPage.countriesDropdown};

  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border.list};
  border-radius: 10px;

  & svg {
    pointer-events: none;
  }
`;
