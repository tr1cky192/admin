import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  width: 407px;
  margin-bottom: 14px;
  display: flex;
  flex-direction: row;
  background: rgba(76, 76, 76, 0.28);
  backdrop-filter: blur(7.5px);
`;

export const Button = styled.div`
  position: relative;
  width: 90px;
  height: 90px;
  padding: 6px;
  font-family: 'Segoe UI';
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 13px;
  text-align: start;
  margin: 42px 50px 42px 18px;
  color: #4c4c4c;
  background: #ebecfe;
  box-shadow: 0px 0px 6.83594px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border: none;

  &:hover {
    background: #efeeee;
  }
  :focus {
    border: 0.33px solid ${({ theme }) => theme.colors.textThird};
  }
  &:active {
    background: #e4e0e0;
  }
  &:disabled {
    background: grey;
  }
`;
export const ListWrapper = styled.div`
  margin-top: 5px;
  margin-bottom: 12px;
`;
export const Svg = styled.img`
  width: 34px;
  height: 34px;
  margin-left: 47px;
  position: absolute;
  top: 51px;
  right: 8px;
`;

export const List = styled.ul`
  max-width: 230px;
  gap: 18px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
export const Img = styled.img`
  display: block;
  width: 64px;
  height: 64px;
`;

export const Text = styled.span`
  font-family: 'Segoe UI';
  font-style: normal;
  font-weight: 400;
  font-size: 9px;
  line-height: 12px;
  /* identical to box height */

  color: #4c4c4c;
`;
