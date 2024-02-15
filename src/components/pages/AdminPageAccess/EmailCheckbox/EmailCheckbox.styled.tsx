import styled from 'styled-components/macro';

export const EmailCheckboxStyled = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: block;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: flex;
  }

  .forma {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .labels{
    display: flex;
    justify-content: space-between;
    margin-right: 60px;
    margin-left: -15px;
  }

  & label {
    align-self: flex-start;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 11px;
    line-height: 13px;
    text-align: center;
    color: #656565;
  }

  & label:nth-child(2){
    font-size: 11px;
    margin-left: -45px;
  }
  & label:nth-child(3){
    margin-left: -40px;
  }
  & label:nth-child(4){
    margin-left: -20px;
  }
  & label:nth-child(5){
    margin-right: 8px;
  }



  .inputs{
    display: flex;
    justify-content: space-between;
  }

  & input {
    position: relative;
    width: 40px;
    height: 40px;
    border: 1px solid #6e6e6e;
    box-shadow: 0px 0px 2.94922px 0.737304px rgba(0, 0, 0, 0.25);
    -webkit-appearance: none;
    outline: none;
    cursor: pointer;
    margin-right: 60px;
  }

  & input:checked:before {
    content: '';
    position: absolute;
    left: 7px;
    top: 10px;
    width: 26px;
    height: 16px;
    border: 4px solid #0090ff;
    border-radius: 2px;
    border-top: none;
    border-right: none;
    transform: rotate(310deg);
  }

  & input:hover {
    border-color: #6dbffe;
    box-shadow: 0px 0px 2.94922px 0.737304px rgba(77, 144, 254, 0.5);
  }
`;
