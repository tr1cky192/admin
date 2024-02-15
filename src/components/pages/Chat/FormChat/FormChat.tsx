
import { useState } from 'react';
import { Button, ChatTextarea,Img, Wrapper } from './FormChat.styled';
// import { ReactComponent as Arrow } from '../../../../assets/icons/sendIcon.svg'


type Props = {
  author: string;
  message: string | null;
  time: string;
};

type FormChatProps = {
  setMessageList: React.Dispatch<React.SetStateAction<Props[]>>;
};


// тимчасові змінні
const username = 'Hilton';

const date = new Date();
const hour = date.getHours().toString().padStart(2, '0');
const minute = date.getMinutes().toString().padStart(2, '0');
const day = date.getDate().toString().padStart(2, '0');
const month = (date.getMonth() + 1).toString().padStart(2, '0');
const year = date.getFullYear().toString();

const formattedDate = `${hour}:${minute} ${day}/${month}/${year}`;

export const FormChat: React.FC<FormChatProps> = ({ setMessageList }) => {
  const [currentMessage, setCurrentMessage] = useState<string>('');

  const onChangeMessage = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    const { target } = event;
    setCurrentMessage(target.value);
  };


  const messageData: Props = {
    author: username,
    message: currentMessage,
    time: formattedDate,
  };

  const sendMessage = async (): Promise<void> => {
    // if (currentMessage !== '') {

    // }

    // await socket.emit('send_message', messageData);
    setMessageList(prev => [...prev, messageData]);
    setCurrentMessage('');
  };
    
      const handleKeyPress = async (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter' && !event.shiftKey) {
          event.preventDefault();
          await sendMessage();
        }
      };

  return (
    <Wrapper>
      <ChatTextarea
        value={currentMessage}
        onChange={onChangeMessage}
        onKeyPress={handleKeyPress}
      />
      <Button onClick={sendMessage}>
        <Img />
      </Button>
    </Wrapper>
  );
};