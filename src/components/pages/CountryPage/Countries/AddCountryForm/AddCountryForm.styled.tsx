import styled from 'styled-components/macro';

export const AddCountryFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  height: 312px;
  padding: 16px;

  background-color: ${({ theme }) => theme.colors.bgTransparent.bgFormAddCountry};
  border-radius: 10px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    justify-content: space-between;
    padding: 20px 56px 28px;
  }
`;

export const AddCountryText = styled.p`
  /* width: 150px; */

  font-size: 24px;
  line-height: 1.33;
  font-family: ${({ theme }) => theme.fonts.segoe};
  color: ${({ theme }) => theme.colors.textThird};
  text-align: justify;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 272px;
  }
`;

export const AddCountryLabel = styled.label`
  display: flex;
  flex-direction: column;
  max-width: 292px;
`;

export const AddCountryInput = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 42px;
  padding: 8px;

  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border.list};
  border-radius: 10px;
`;

export const AddCountryButton = styled.button`
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: center;

  width: 154px;
  height: 42px;

  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 1.33;
  font-family: ${({ theme }) => theme.fonts.segoe};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;

  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.bgTransparent.buttonSaveCountry};
  border: 1px solid transparent;
  border-radius: 3px;

  :disabled {
    background-color: ${({ theme }) => theme.colors.bgTransparent.buttonSaveCountryDisabled};
  }

  :hover {
    background-color: ${({ theme }) => theme.colors.bgTransparent.buttonSaveCountryHover};
    border-color: ${({ theme }) => theme.colors.white};
  }

  :active {
    background-color: ${({ theme }) => theme.colors.bgTransparent.buttonSaveCountryActive};
  }
`;
