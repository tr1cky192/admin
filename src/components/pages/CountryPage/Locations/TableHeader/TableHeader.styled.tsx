import styled from 'styled-components/macro';

export const HeadingsListStyled = styled.ul`
  display: grid;
  grid-template-columns: 33.33% 33.33% 33.33%;

  min-height: 71px;

  text-align: center;

  border-bottom: 1px solid ${({ theme }) => theme.colors.border.list};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 31% 33% 36%;
  }
`;

export const HeadingsItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &:nth-of-type(2) {
    border-right: 1px solid ${({ theme }) => theme.colors.border.list};
    border-left: 1px solid ${({ theme }) => theme.colors.border.list};
  }
`;

export const HeadingsText = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  font-family: ${({ theme }) => theme.fonts.roboto};
  color: ${({ theme }) => theme.colors.textThird};
`;
