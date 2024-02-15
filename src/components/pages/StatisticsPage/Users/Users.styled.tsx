import styled from 'styled-components/macro';


type Prop = {
  padding?: boolean | undefined;
};

export const Wrapper = styled.div<Prop>`
  position: relative;
  padding: ${({ padding }) => (padding ? '21px 54px 79px 62px' : '21px 54px')};

  margin-top: 34px;

  background-color: ${({ theme }) => theme.colors.white};

  border: 1px solid ${({ theme }) => theme.colors.border.list};
  border-radius: 9px;
`;
export const InputContainer= styled.div`
display:flex;
align-items:center;
`;
export const SearchInputContainer = styled.div`
display: flex;
align-items: center;
`;
export const InputMain = styled.div`
  display: flex;
  align-items: center;
  border: #d0d0d0 1px solid;
  border-radius: 20px;
  width: 558px;
  height: 38px;
  background-color: #f4f4f4;
  padding: 20px;
  margin-bottom: 15px;
  &:hover {
    border: #006bbe 1px solid;
    background-color: white;
  }
  &:active {
    background-color: white;
    outline: none;
    border: #006bbe 1px solid;
  }
  img {
    height: 16.57px;
    width: 16.57px;
    margin-right: 15px;
  }
  input {
    border: none;
    background-color: rgba(0, 0, 0, 0);
    width: 558px;
  }
  input:focus {
    outline: none;
  }
`;