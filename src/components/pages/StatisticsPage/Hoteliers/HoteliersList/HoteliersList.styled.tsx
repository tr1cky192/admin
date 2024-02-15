import styled from 'styled-components/macro';
// import x from '../../../../../assets/icons/x.svg';

type PropsInner = {
  border: boolean;
  position?: boolean | undefined
};

type Props = {
  tabIndex: number;
};

type PropsWrapper = {
  tabIndex: number;
  typePage?: string | undefined;
};

export const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 3px;
  cursor:pointer;
`;
export const FunProf = styled.div`
display:flex;
flex-direction:row;

`
export const CloseButton = styled.div`
display: flex; 
align-items: center; 
`
export const YellowButton = styled.button`
width: 108px;
height: 48px;
background-color: #F3F651;
border: 0.3px solid #0090FF; 
border-radius: 50px; 
color: #0090FF; 
Top:399px;
Left:768px;
font-weight: bold; 
cursor: pointer;
margin-left:28px;

`;
export const SearchInputContainer = styled.div`
display: flex;
align-items: center;
position: relative;
`;

export const SearchInput = styled.input`

&:before {
  content: ""; 
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M6.97312 13.9072C8.75818 13.8899 10.5252 13.1489 11.7959 11.8904C13.3051 10.3957 14.0822 8.18434 13.8111 6.07304C13.3466 2.4552 10.3789 0 6.92876 0C4.30732 0 1.75971 1.6434 0.642231 4.02635C-0.21321 5.85072 -0.214943 8.05339 0.642231 9.88089C1.75174 12.2472 4.25775 13.8819 6.88404 13.9072C6.91385 13.9072 6.94366 13.9072 6.97312 13.9072ZM6.89132 12.7481C4.22552 12.7224 1.73822 10.6562 1.24361 8.00719C0.894912 6.13973 1.55313 4.11875 2.92433 2.79249C4.52499 1.24358 7.04106 0.724957 9.13322 1.60276C11.0049 2.38816 12.4059 4.21184 12.6642 6.22102C12.8853 7.94327 12.2687 9.7482 11.0569 10.9914C9.99386 12.0822 8.50307 12.7331 6.96584 12.7481C6.94089 12.7481 6.91628 12.7481 6.89132 12.7481Z" fill="%23626367" fill-opacity="0.5"/></svg>');
  display: block;
  width: 17px; 
  height: 17px; 
  background-size: 17px;
  position: absolute;
  left: -19px;
  top: 50%; 
  transform: translateY(-50%);
}

width: 558px;
height: 48px;
background: linear-gradient(0deg, #D0D0D0, #D0D0D0),
            linear-gradient(0deg, #F4F4F4, #F4F4F4);
border: 0.3px solid #D0D0D0;
border-radius: 50px;
color: #4C4C4C;
cursor: pointer;
padding: 5px 10px; 
text-align: center;
 position: relative;
font-size:18px;
font-weight:400;
&.input:focus + label {
  display: block;
}
&:focus::placeholder{
opacity:0;
}


margin-bottom:15px;
&::placeholder{
  color: #AAA;
  font-size: 14px;
  position: absolute;
  top: 50%; /* Center vertically */
  left: 0;
  right: 0;
  transform: translateY(-50%);
  transition: top 0.2s, font-size 0.2s; /* Smooth transition for top and font-size */
}

&:not(:placeholder-shown) + &::placeholder {
  top: 0;

  font-size: 10px; 
}
`;
export const LabelForm = styled.label`
  display:none;
  position:absolute;
  width: max-content;
  font-size:12px;
  top: 2%; /* Center vertically */
  padding: 3px 4px;
  left: 50%;
  transform: translateX(-50%);
  right: 0;
  z-index: 1;
  opacity: .4;
`;
export const SearchIcon = styled.img`
position: absolute;
left:40px;
top:16px;
width: 20px;
height: 20px;
`;
export const CloseIcon =styled.img`


`;


export const ClearButton = styled.button<{ hasText: boolean }>`
width: 30px;
height: 16px;
background-color: transparent;
border: none;
color:red;
display: flex;
align-items: center;
// top:82px;
position: absolute;
color: #4C4C4C;
text-align: center;
font-family: Segoe UI;
font-size: 12px;
font-style: normal;
font-weight: 600;
line-height: normal;
right: 800px;
transform: translateY(-50%);
cursor: pointer;
margin-top:23px;

left:700px;
&:before{
  content:"";
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1 1L11 11" stroke="%234C4C4C" stroke-linecap="round" stroke-linejoin="round"/><path d="M11.0001 1L1.00009 11" stroke="%234C4C4C" stroke-linecap="round" stroke-linejoin="round"/></svg>');
display:block;
width: 10px;
background-size:10px;
height: 10px;
position:absolute;

left:-6px;
top:30%;
transform: translateX(-50%);
}
  }
`;
export const Inner = styled.li.attrs<Props>(({ tabIndex }) => ({
  'data-id': tabIndex,
}))<PropsInner>`
  display: ${({ hidden }) => (hidden ? 'none' : 'flex')};
  align-items: ${({ position }) => (position ? 'flex-start' : 'center')};

  width: 100%;
  padding: 7px 31px 7px 11px;

  background-color: ${({ theme }) => theme.colors.white};
  border: ${({ border }) => (border ? '0.7px' : '0.3px')} solid
    ${({ border, theme }) => (border ? theme.colors.black : theme.colors.border.borderList)};

  &:hover {
    border: 0.4px solid ${({ theme }) => theme.colors.border.btnBorderHover};
  }
`;

export const TextID = styled.p.attrs<Props>(({ tabIndex }) => ({
  'data-id': tabIndex,
}))`
  white-space: nowrap;
  
  font-family: ${({ theme }) => theme.fonts.segoe};
  font-weight: 600;
  font-size: 12px;
  line-height: 16px/12px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textThird};
`;

export const WrapperText = styled.div.attrs<PropsWrapper>(({ tabIndex }) => ({
  'data-id': tabIndex,
}))<{ typePage?: string }>`
  display: flex;
  gap: 13px;

  width: 77%;
  white-space: ${({ typePage }) => (typePage && typePage === 'Finance' ? 'wrap' : 'nowrap')};
  overflow: hidden;

  margin-left: 26px;
`;

export const TextContent = styled.div.attrs<Props>(({ tabIndex}) => ({
  'data-id': tabIndex,
}))`
display: inline-block
  font-family: ${({ theme }) => theme.fonts.segoe};
  font-size: 12px;
  line-height: 16px/12px;
  color: ${({ theme }) => theme.colors.textThird};
`;
