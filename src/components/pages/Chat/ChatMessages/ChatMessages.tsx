// import { useEffect } from "react";

import { Inner, MessageAuthorTime, MessageText, Scroll, Text, Wrapper } from "./ChatMessages.styled";

type Props = {
  author: string;
  message: string | null;
  time: string;
};

type ChatMessagesProps = {
  messageList: Props[];
//   setMessageList: React.Dispatch<React.SetStateAction<Props[]>>;
};

// тимчасові змінні
const username = 'Verifier ID 0023337';

  //     useEffect(() => {
  //         socket.on('reseive_message', data => {
  //           setMessageList((prev)=>[...prev,data])
  //       });
  //     }, [socket]);



export const ChatMessages: React.FC<ChatMessagesProps> = ({ messageList }): JSX.Element => (
  <Wrapper>
    {messageList.length > 0 ? (
      <Scroll initialScrollBehavior='smooth'>
        {messageList.map(({ author, message, time }) => (
          <div key={time} style={{ color: username === author ?  '#0090FF':'#FF6000' }}>
            <Inner>
              <MessageAuthorTime>{author}</MessageAuthorTime>
              <MessageAuthorTime>{time}</MessageAuthorTime>
            </Inner>
            <MessageText>{message}</MessageText>
          </div>
        ))}
      </Scroll>
    ) : (
      <Text> Chat with the hotelier</Text>
    )}
  </Wrapper>
);
