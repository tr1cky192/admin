import { useState } from 'react';
import { useAppDispatch } from 'App';
import { addEmail } from 'features/access';
import {
  AddEmailAccessStyled,
  AddEmailAccessInput,
  AddEmailAccessButtonStyled,
  AddEmailAccessMainDiv,
  MainDiv,
} from './AddEmailAccess.styled';
import { CloseButton } from '../CloseButton';
import { EmailCheckbox } from '../EmailCheckbox';

type Props = {
  onClick?: () => void;
};

export const AddEmailAccess = ({ onClick }: Props) => {
  const [email, setEmail] = useState('');
  const [objectsChecked, setObjectsChecked] = useState(false);
  const [languagesChecked, setLanguagesChecked] = useState(false);
  const [statisticsChecked, setStatisticsChecked] = useState(false);
  const [financeChecked, setFinanceChecked] = useState(false);
  const [blogChecked, setBlogChecked] = useState(false);

  const dispatch = useAppDispatch();

  const handleAddEmail = (event: React.FormEvent) => {
    event.preventDefault();

    const newEmail = {
      email,
      objects: objectsChecked,
      languages: languagesChecked,
      statistics: statisticsChecked,
      finance: financeChecked,
      blog: blogChecked,
    };

    dispatch(addEmail(newEmail));

    onClick?.();
  };

  return (
    <MainDiv>
      <form onSubmit={handleAddEmail}>
        <AddEmailAccessMainDiv>
          <AddEmailAccessStyled>
            <p>Enter Email</p>
            <AddEmailAccessInput
              type="email"
              id="email"
              name="email"
              required
              onChange={e => setEmail(e.target.value)}
            />
            <AddEmailAccessButtonStyled type="submit">Add Access</AddEmailAccessButtonStyled>
          </AddEmailAccessStyled>
          <EmailCheckbox
            objectsChecked={objectsChecked}
            setObjectsChecked={setObjectsChecked}
            languagesChecked={languagesChecked}
            setLanguagesChecked={setLanguagesChecked}
            statisticsChecked={statisticsChecked}
            setStatisticsChecked={setStatisticsChecked}
            financeChecked={financeChecked}
            setFinanceChecked={setFinanceChecked}
            blogChecked={blogChecked}
            setBlogChecked={setBlogChecked}
          />
        </AddEmailAccessMainDiv>
      </form>
      <CloseButton
        src="CloseButtonWhite.png"
        onClick={onClick}
        direction="/admin-page-access"
      />
    </MainDiv>
  );
};
