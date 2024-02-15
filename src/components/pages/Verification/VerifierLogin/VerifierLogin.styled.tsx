import styled from 'styled-components/macro';

type AccentProps = {
  $isActive?: boolean;
};
type ErrorProps = {
  $error?: string;
};
export const Error = styled.h2`
  font-family: ${({ theme }) => theme.fonts.segoe};
  font-weight: 700;
  font-size: 12px;
  line-height: 1.33;
  display: flex;
  margin: 0 auto;
  align-items: center;
max-width: 272px;
  color: ${({ theme }) => theme.colors.textSecond};
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 284px;
  margin: 0 auto;
  margin-top: 5px;
  gap: 21px;
`;

export const Wrapper = styled.div.attrs(({ $error = '' }: ErrorProps) => ({
  $error,
}))`
  padding-top: ${({ $error }) => ($error ? '30px' : '78px')};
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 14px;
  line-height: 1.33;
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.segoe};
  color: ${({ theme }) => theme.colors.textThird};
`;
export const Text = styled.span`
  position: absolute;
  left: 12px;
  color: #aeafbc;
`;
export const Input = styled.input`
  height: 48px;
  font-size: 14px;
  line-height: 1.33;
  font-weight: 700;
  border: 1px solid ${({ theme }) => theme.colors.textFourth};
  border-radius: 5px;
  padding-left: 112px;
  background-color: ${({ theme }) => theme.colors.bg.buttonAddLocation};
  font-family: ${({ theme }) => theme.fonts.segoe};
  color: ${({ theme }) => theme.colors.textThird};
  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px #ebecfe inset;
  }

`;

export const Accent = styled.span.attrs(({ $isActive = false }: AccentProps) => ({
  $isActive,
}))`
  display: block;
  color: ${({ theme, $isActive }) => ($isActive ? theme.colors.textThird : 'white')};
`;

export const Button = styled.button.attrs(({ $isActive = false }: AccentProps) => ({
  $isActive,
}))`
  margin: 0 auto;
  margin-top: 13px;
  width: 184px;
  height: 184px;
  border-radius: 50%;
  border-color: transparent;
  outline: transparent;
  background-color: ${({ theme }) => theme.colors.bg.buttonAddDirHotelier};
  color: ${({ theme }) => theme.colors.textThird};
  cursor: pointer;

  font-size: 33px;
  line-height: 1.33;
  font-weight: 700;

  :disabled {
    color: ${({ theme }) => theme.colors.white};
  }
  :disabled:hover {
    background-color: ${({ theme }) => theme.colors.bg.buttonAddDirHotelier};
    color: ${({ theme }) => theme.colors.white};
  }
  :hover {
    background-color: ${({ theme }) => theme.colors.bgTransparent.buttonLoginHover};
    color: ${({ theme }) => theme.colors.bgTransparent.buttonLogInHover};
  }
 
  :active {
    background-color: ${({ theme }) => theme.colors.bgTransparent.buttonLoginActive};
  }

  &:hover ${Accent} {
    color: ${({ theme, $isActive }) =>
      $isActive ? theme.colors.bgTransparent.buttonLogInHover : ''};
  }
`;
