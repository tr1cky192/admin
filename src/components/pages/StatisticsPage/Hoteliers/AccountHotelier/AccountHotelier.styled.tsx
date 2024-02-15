import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  margin-top: 26px;

  > div:nth-of-type(1) {
    margin-bottom: 16px;
    > p:nth-of-type(2) {
      margin-left: 18px;
    }
    > p:nth-of-type(3) {
      margin-left: 52px;
    }
  }

  > div:nth-of-type(2) {
    margin-bottom: 8px;
    > p:nth-of-type(2) {
      margin-left: 12px;
    }
    > p:nth-of-type(3) {
      margin-left: 24px;
    }
  }

  > div:nth-of-type(3) {
    margin-bottom: 20px;
    > p:nth-of-type(2) {
      margin-left: 9px;
    }
    > p:nth-of-type(3) {
      margin-left: 32px;
    }
  }
`;

export const Inner = styled.div`
  display: flex;
  align-items: baseline;
`;

export const Title = styled.p`
  font-family: ${({ theme }) => theme.fonts.segoe};
  font-weight: 600;
  font-size: 13px;
  line-height: 17px/13px;

  color: ${({ theme }) => theme.colors.textAccent};
`;

export const Text = styled.p`
  font-family: ${({ theme }) => theme.fonts.segoe};
  font-weight: 600;
  font-size: 13px;
  line-height: 17px/13px;

  text-transform: uppercase;

  color: ${({ theme }) => theme.colors.textThird};
`;

export const SubTitle = styled.p`
   font-family: ${({ theme }) => theme.fonts.segoe};
  font-weight: 700;
  font-size: 12px;
  line-height: 16px/12px;

      margin-bottom: 10px;

  color: rgba(101, 101, 101, 0.5);
`;

export const SecondaryText = styled.p`
   font-family: ${({ theme }) => theme.fonts.segoe};
font-weight: 600;
font-size: 10px;
line-height: 13px/10px;

color: ${({ theme }) => theme.colors.textThird};
`;

export const Form = styled.form`
  display: flex;
  align-items: baseline;

  margin-bottom: 270px;
`;

export const Input = styled.input`
  background: ${({ theme }) => theme.colors.bgColorInput};
  border: none;

  width: 92px;
  height: 24px;
  margin-right: 15px;

  &:focus {
    outline: none;
    border: 0.1px solid ${({ theme }) => theme.colors.textThird};
  }
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.colors.bg.buttonAddDirHotelier};
  border-radius: 17px;
  border: none;

  font-family: ${({ theme }) => theme.fonts.segoe};
  font-weight: 700;
  font-size: 16px;
  line-height: 21px/16px;

  padding: 16px 35px;
  margin-left: 26px;

  color: ${({ theme }) => theme.colors.buttonTextColor};

  &:hover {
    background: rgba(106, 255, 121, 0.75);
    color: rgba(0, 108, 11, 0.77);
  }
`;

export const Error = styled.p`
  font-family: ${({ theme }) => theme.fonts.segoe};
  font-weight: 600;
  font-size: 10px;
  line-height: 13px/10px;
  margin-bottom: 15px;

  color: red;
`;

