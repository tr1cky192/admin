import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  background-color: #ffffff;
  max-width: 207px;
  /* padding-top: 18px;
  padding-left: 29px; */
  padding-right: 37px;
  margin-bottom: 14px;
  margin-left: 44px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Text = styled.p`
  /* margin-bottom: 46px; */
  padding-top: 18px;
  padding-left: 29px;
  font-family: 'Segoe UI';
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 13px;
  border: none;
  color: #4c4c4c;
`;
export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 21px;
  margin-bottom: 15px;
`;
export const Btn = styled.button`
  width: 149px;
  height: 25px;
  font-family: 'Segoe UI';
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 13px;
  text-align: center;
  border: none;
  color: #0090ff;
  background: #ffffff;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.3);
  border-radius: 3px;
  &:not(:last-child) {
    margin-bottom: 5px;
  }

  &:hover {
    background: #efeeee;
  }
  :focus {
    border: 0.33px solid ${({ theme }) => theme.colors.textThird};
    outline: none;
  }
  &:active {
    background: #e4e0e0;
  }
`;
