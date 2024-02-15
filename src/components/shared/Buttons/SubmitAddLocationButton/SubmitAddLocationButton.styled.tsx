import styled from 'styled-components/macro';

export const SubmitAddLocationButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 108px;
  height: 46px;

  font-weight: 700;
  font-size: 15px;
  line-height: 1.33;
  font-family: ${({ theme }) => theme.fonts.segoe};
  color: ${({ theme }) => theme.colors.textThird};
  text-align: center;

  background: ${({ theme }) => theme.colors.bg.buttonSubmitAddLocation};
  border: none;
  border-radius: 2px;
  box-shadow: ${({ theme }) => theme.shadows.buttonAddLocation};
`;
