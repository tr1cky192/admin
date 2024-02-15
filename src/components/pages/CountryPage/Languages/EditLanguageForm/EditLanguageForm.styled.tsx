import styled from 'styled-components/macro';
import checkmark from 'assets/icons/checkmark.png';
import { rgba } from 'polished';

export const EditLanguageFormStyled = styled.form`
  display: flex;
  align-items: center;
  gap: 4px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    gap: 20px;
  }
`;

export const LanguageItemContent = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 8px 48px 8px 16px;

  font-size: 27px;
  font-family: ${({ theme }) => theme.fonts.segoe};
  color: ${({ theme }) => theme.colors.textThird};
  text-align: center;

  background: none;
  border: 1px solid ${rgba('#2195f3', 0.21)};
  border-radius: 8px;
  transition: background-color ${({ theme }) => theme.transition[110]};

  &:hover {
    background-color: ${({ theme }) => theme.colors.bg.hover.buttonSelectLanguage};
  }

  &::after {
    position: absolute;
    right: 10px;

    width: 20px;
    height: 20px;
    content: '';

    background-image: url(${checkmark});
    background-repeat: no-repeat;
    background-position: center;
  }
`;

export const LangCodeStyled = styled.span`
  text-transform: uppercase;
`;

export const LanguageInputLabel = styled.label`
  display: flex;
  flex-direction: column;
`;

export const EditLanguageInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 4px 8px;

  font-size: 20px;

  :disabled {
    background-color: transparent;
    border: none;
  }
`;
