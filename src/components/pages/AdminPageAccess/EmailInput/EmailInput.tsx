import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { EmailInputStyled, Input, ErrorEmail } from './EmailInput.styled';
import { SendButton } from '../SendButton';

// type Props = {
//   apiUrl: string; // URL адреса API
// };

export const EmailInput: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState('');
  const [isEmailValid, setIsEmailValid] = useState<boolean>(true);
  const navigate = useNavigate();

  const data = 'kit@gmail.com';

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage('');
    setEmail(event.target.value);
    setIsEmailValid(true);
  };

  const validateEmail = (): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const dataControl = () => {
    // const response = await axios.get(apiUrl, { params: { email } });
    if (data === email) {
      navigate('/admin-page-access-main');
    } else {
      setIsEmailValid(false);
      setMessage('You entered the wrong door. You do not have access to this section.');
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validateEmail()) {
      setMessage(`It doesn't look like Email at all.`);
      setIsEmailValid(false);
    } else {
      dataControl();
    }
  };

  return (
    <EmailInputStyled>
      <ErrorEmail>{message && <p>{message}</p>}</ErrorEmail>
      <form onSubmit={handleSubmit}>
        <Input
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          required
          error={!isEmailValid}
        />
        <SendButton />
      </form>
    </EmailInputStyled>
  );
};
