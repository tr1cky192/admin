import { useState } from 'react';
import { useAppDispatch, useAppSelector } from 'App';
import type { RootState } from 'App/store';
import axios from 'axios';
import { setToken } from 'features/access/tokenSlice';
import {
  EmailsDataPageStyled,
  EmailsMainStyled,
  EmailMainHeaderStyled,
  EmailMainBodyStyled,
  ActiveBlock,
  CheckedStyle,
  ButtonBan,
  ButtonChange,
  // LiftTheBan,
} from './EmailsData.styled';
import { CloseButton } from '../CloseButton';
import { AddAccessButton } from '../AddAccessButton';

export const EmailsData = () => {
  const emails = useAppSelector((state: RootState) => state.access.emails);
  const token = useAppSelector((state: RootState) => state.enterToken.token);
  const dispatch = useAppDispatch();

  const [banClicked, setBanClicked] = useState(false);

  const handleLogout = async () => {
    try {
      await axios.get(
        'https://server-your-price-booking.onrender.com/api/acsess-to-admin/log-out-admin',
        {
          headers: {
            Authorization: `Bearer ${token ?? ''}`,
          },
        }
      );
      dispatch(setToken(null));
    } catch (error) {
      console.error('Помилка під час виходу з акаунта', error);
    }
  };

  const handleBanClick = () => {
    setBanClicked(!banClicked);
  };

  function generateUniqueKey(): number {
    return Math.random();
  }

  return (
    <EmailsDataPageStyled>
      <EmailsMainStyled>
        <EmailMainHeaderStyled>
          <p>Email</p>
          <div className="check-name">
            <p>
              Objects
              <br />
              Verification
            </p>
            <p>
              Adding a languages <br /> Adding a countrys <br /> Location registers: <br /> 1, 2, 3
            </p>
            <p>Statistics </p>
            <p>Finance</p>
            <p>Blog</p>
          </div>
        </EmailMainHeaderStyled>

        {emails.map(email => (
          <EmailMainBodyStyled key={generateUniqueKey()}>
            <p className="email">{email.email}</p>
            <ActiveBlock>
              <p>Active</p>
              <div className="buttons">
                <ButtonBan type="button" onClick={handleBanClick}>
                  {banClicked ? 'reban' : 'ban'}
                </ButtonBan>
                <ButtonChange type="button">change</ButtonChange>
              </div>
            </ActiveBlock>
            <div className="checkboxs">
              <p>{email.objects ? <CheckedStyle /> : ''}</p>
              <p> {email.languages ? <CheckedStyle /> : ''}</p>
              <p>{email.statistics ? <CheckedStyle /> : ''}</p>
              <p> {email.finance ? <CheckedStyle /> : ''}</p>
              <p>{email.blog ? <CheckedStyle /> : ''}</p>
            </div>
          </EmailMainBodyStyled>
        ))}
        <div className="button-styled">
          <AddAccessButton />
        </div>
      </EmailsMainStyled>
      <CloseButton onClick={handleLogout} src="CloseButton.png" direction="/menu" />
    </EmailsDataPageStyled>
  );
};
