import styled from 'styled-components/macro';


export const AdminAccess = styled.div`
  padding: 36px 181px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 18px 61px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 36px 91px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 36px 181px;
  }
`;
