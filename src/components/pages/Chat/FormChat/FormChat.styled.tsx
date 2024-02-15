import styled from 'styled-components/macro';
import { ReactComponent as Arrow } from '../../../../assets/icons/sendIcon.svg'

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 13px;
`;


export const ChatTextarea = styled.textarea`
  width: 251px;
  height: 66px;

  padding: 4px 10px;

  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.textSecond};

  border-radius: 5.92593px;
    border:none;
        outline: none;

  font-family: ${({ theme }) => theme.fonts.segoe};
  font-weight: 400;
  font-size: 11.1111px;
  line-height: 15px/11.1111px;
  resize: none;

  &:focus {
    outline: none;
    border:none
  }

  /* scrollbar */

  scrollbar-color: ${({ theme }) => theme.colors.scrollColor} ${({ theme }) => theme.colors.white};
  ::-webkit-scrollbar {
    width: 9px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 30px;
      border: 2px solid ${({ theme }) => theme.colors.white};
  }

    ::-moz-scrollbar {
      scrollbar-width: thin;
    }

  ::-webkit-scrollbar-thumb:vertical {
    background-color: ${({ theme }) => theme.colors.scrollColor};
    cursor: pointer;
    &:hover {
      background-color: ${({ theme }) => theme.colors.scrollColorHover};
    }
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
`;

export const Img = styled(Arrow)`
  width: 14.81px;
  height: 13.33px;

  margin-bottom: 6px;

  > path {
    fill: ${({ theme }) => theme.colors.textThird};

    &:hover,
    &:focus {
      fill: #0090ff;
    }
  }
`;




