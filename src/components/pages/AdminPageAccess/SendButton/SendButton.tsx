import { Button, SendButtonStyled } from './SendButton.styled';

export const SendButton = () => {
  const click = () => {
    // console.log("CLICK")
  };
  return (
    <SendButtonStyled>
      <Button type="submit" onClick={click}>
        Send
      </Button>
    </SendButtonStyled>
  );
};
