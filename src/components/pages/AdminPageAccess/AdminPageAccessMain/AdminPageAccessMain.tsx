import { useAppSelector } from 'App';
import { selectEmailSlice } from 'features/access';
import { AdminAccessMainStyled } from './AdminPageAccessMain.styled';
import { EmailsData } from '../EmailsData';
import { AddAccessButton } from '../AddAccessButton';

export const AdminPageAccessMain = () => {
  const emails = useAppSelector(selectEmailSlice);

  return (
      <AdminAccessMainStyled>
        {emails.length > 0 ? <EmailsData /> : <AddAccessButton />}
      </AdminAccessMainStyled>
  );
};
