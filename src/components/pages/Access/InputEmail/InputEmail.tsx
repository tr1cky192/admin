import React, { useState } from 'react';
import type { AxiosResponse } from 'axios';
import axios from 'axios';
import { Button } from '../Button/Button';
import { Input, Message, Placeholder, Div } from './InputEmail.styled';
import { PasswordField } from '../PasswordField/PasswordField';

export const InputEmail: React.FC<{ component: React.FC }> = ({ component: Component }) => {
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState('');
  const [showPasswordField, setShowPasswordField] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isSend, setIsSend] = useState<boolean>(false);

  // const key = 'maestro_@ukr.net';

  const validEmail = (): boolean => {
    const regEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regEmail.test(email);
  };

  // const testEmail = () => {
  //   if (email === key) {
  //     setShowPasswordField(true);
  //   } else {
  //     setMessage('This post is not authorized to access this section');
  //   }
  // };

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   if (!validEmail()) {
  //     setMessage('Invalid email');
  //   } else {
  //     testEmail();
  //   }
  // };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validEmail()) {
      setMessage('Недійсна електронна пошта');
    } else {
      try {
        const response: AxiosResponse<{ status: string; messageData: string }> = await axios.post(
          'https://server-your-price-booking.onrender.com/api/acsess-to-admin/check-admin/',
          {
            email: `${email}`,
          }
        );

        const { status, messageData } = response.data;

        if (status === 'success') {
          setMessage(`Код підтвердження надіслано на електронну пошту: ${email}`);
          setShowPasswordField(true);
        } else {
          setMessage(messageData);
        }
      } catch (error) {
        setMessage('Помилка під час виконання запиту');
        console.error(error);
      }
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage('');
    setEmail(e.target.value);
  };

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  return (
    <Div hasValue={isSend}>
      {!isSend && (
        <div>
          <Message>{message && <p>{message}</p>}</Message>
          <form onSubmit={handleSubmit}>
            <Input
              type="email"
              name="email"
              value={email}
              required
              onChange={handleEmailChange}
              onFocus={handleInputFocus}
            />
            {!showPasswordField && <Button />}
          </form>
          <Placeholder hasValue={email !== ''} isFocused={isFocused}>
            E-mail:
          </Placeholder>
          {showPasswordField && <PasswordField email={email} setIsSend={setIsSend} />}
        </div>
      )}

      {isSend && <Component />}
    </Div>
  );
};
