import styled from 'styled-components/macro';

type ButtonProps = {
  dataIndex: number;
};

export const Wrapper = styled.li`
  position: relative;
`;

export const ListBtn = styled.ul`
  display: flex;
  justify-content: center;
  gap: 140px;
`;

export const Button = styled.button.attrs<ButtonProps>(props => ({
  'data-index': props.tabIndex,
}))`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.textButton};
  border: 1px solid ${({ theme }) => theme.colors.border.btnBorder};
  border-radius: 5px;

  width: 203px;
  padding: 7px 15px;

  font-family: ${({ theme }) => theme.fonts.segoe};
  font-weight: 700;
  font-size: 13px;
  line-height: 17px/13px;

  cursor: pointer;
  transition: ${({ theme }) => theme.transition[250]};

  &:hover {
    border: 0.5px solid ${({ theme }) => theme.colors.border.btnBorderHover};
  }
`;

export const TitleBtn = styled.p`
  position: absolute;
  top: -16px;
  left: 50%;
  transform: translateX(-50%);

  font-family: ${({ theme }) => theme.fonts.segoe};
  font-weight: 350;
  font-size: 10px;
  line-height: 13px/10px;

  color: ${({ theme }) => theme.colors.textAccent};
`;