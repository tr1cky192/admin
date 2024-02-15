import { useState } from "react";
import { ChatMessages } from "../ChatMessages/ChatMessages";
import { FormChat } from "../FormChat/FormChat";
import { Wrapper } from "./ChatBody.styled";


type Props = {
  author: string;
  message: string | null;
  time: string;
};

export const ChatBody = () => {
  const [messageList, setMessageList] = useState<Props[]>([]);

 const date = new Date();
 const hour = date.getHours().toString().padStart(2, '0');
 const minute = date.getMinutes().toString().padStart(2, '0');
 const day = date.getDate().toString().padStart(2, '0');
 const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear().toString();
  
  const formattedDate = `${hour}:${minute} ${day}/${month}/${year}`;


      const first = () => {
        setMessageList(prev => [
          ...prev,
          {
            author: 'Verifier ID 0023337',
            message: 'But first, we will go through verification.',
            time: formattedDate,
          },
        ]);
      };

  return (
    <>
      <button type="button" onClick={first}>
        other user
      </button>
      <Wrapper>
        <ChatMessages messageList={messageList} />
        <FormChat setMessageList={setMessageList} />
      </Wrapper>
    </>
  );
};
