import { useNavigate } from 'react-router-dom';
import { CloseButtonStyled } from './CloseButton.styled';

type Props = {
  direction: string;
  onClick?: () => void;
  src: string;
}

export const CloseButton = ({direction, onClick, src}: Props) => {
    const navigate = useNavigate()
    const closePage = () => {
      navigate(direction); 
      if (onClick) {
        onClick();
      }
    }
    return (
      <CloseButtonStyled onClick={closePage}>
        <img width="20" height="20" src={src} alt="Close button" />
      </CloseButtonStyled>
    );}

