import styled from 'styled-components/macro';

export const WrapperHeader = styled.div<{ type: string }>`
  width: 100%;
  padding-top: 4px;
  padding-bottom: 6px;
  margin-bottom: ${({ type }) =>
    type === 'Statistic' ? '33px' : '19px'};

  font-family: ${({ theme }) => theme.fonts.segoe};
  font-weight: 700;
  font-size: 13px;
  line-height: 17px/13px;
  text-align: center;

  color: ${({ theme }) => theme.colors.white};

  background: ${({ theme, type }) =>
    type === 'Statistic' ? theme.colors.bg.buttonAddDirHotelier : theme.colors.bgColorHotelier};
  box-shadow: 0px 0px 4.06977px ${({ theme }) => theme.shadows.quarterBlack};
  border-radius: 4.06977px;

  @media screen and (min-width: 768px) {
    padding-left: 82px;
    text-align: left;
  }
`;
