import { useState } from "react";
import { Button, TitleBtn, Wrapper } from "./RegisterButton.styled";
import { ModalButton } from "../ModalButton/ModalButton";

type Props = {
  title: string;
  index: number;
  activeButtonIndex: number;
};

export const RegisterButton: React.FC<Props> = ({
  title,
  index,
  activeButtonIndex,
}) => {
  const [NameCountry, setNameCountry] = useState<string | null>(null);

  const handleClick = (el: string) => {
    setNameCountry(el);
  };

  return (
    <Wrapper>
      <Button tabIndex={index}>
        {NameCountry && NameCountry}
        {NameCountry ? <TitleBtn>{title}</TitleBtn>: title}
      </Button>
      {index === activeButtonIndex && (
        <ModalButton title={title} onClick={handleClick} />
      )}
    </Wrapper>
  );
};

