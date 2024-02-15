import { useState } from 'react';
import { useAppSelector } from 'App';
import type { RootState } from 'App/store';
import type { AxiosResponse } from 'axios';
import axios from 'axios';
// import { addEmail } from 'features/access';
import { AddAccessButtonStyled, OpenAddAccess } from './AddAccessButton.styled';
import { AddEmailAccess } from '../AddEmailAccess';

type ResponseData = {
  status: string;
  message: string;
  code: number;
  data: {
    newEmail: {
      email: string;
      access: [
        objects: boolean,
        languages: boolean,
        statistics: boolean,
        finance: boolean,
        blog: boolean
      ];
      status: string;
      id: string;
      createdAt: string;
      updatedAt: string;
    };
  };
}

export const AddAccessButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const dispatch = useAppDispatch();

  const dataForEmail = useAppSelector((state: RootState) => state.access.emails[0]);
  const token = useAppSelector((state: RootState) => state.enterToken.token);

  console.log(dataForEmail);

  const addNewData = async (): Promise<boolean> => {
    try {
      const response: AxiosResponse<ResponseData> = await axios.post(
        'https://server-your-price-booking.onrender.com/api/acsess-to-admin/add-email',
        {
          email: dataForEmail.email,
          access: [
            dataForEmail.objects,
            dataForEmail.languages,
            dataForEmail.statistics,
            dataForEmail.finance,
            dataForEmail.blog,
          ],
        },

        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token ?? ''}`,
          },
        }
      );

      // const { status, message, code, data: responseData } = response.data;
      const { status } = response.data;

      if (status === 'success') {
        // dispatch(addEmail(responseData.newEmail)); // Викликаємо action для додавання електронної пошти до Redux store
      }

      setIsOpen(true);
      return status === 'success';
    } catch (error) {
      console.error('Помилка під час додавання емейла', error);
      return false;
    }
  };

  // const addNewData = async (): Promise<boolean> => {
  //   try {
  //     const response: AxiosResponse<ResponseData> = await axios.post(
  //       'https://server-your-price-booking.onrender.com/api/acsess-to-admin/add-email',
  //       {
  //         email: `${data.email}`,
  //         access: [
  //           `${data.objects}`,
  //           `${data.languages}`,
  //           `${data.statistics}`,
  //           `${data.finance}`,
  //           `${data.blog}`,
  //         ],
  //       }
  //     );

  //     const { status, message, code, data } = response.data;
  //     setIsOpen(true);
  //     return status === 'success';
  //   } catch (error) {
  //     console.error('Помилка під час додавання емейла', error);
  //     return false;
  //   }
  // };

  // const openAddAccess = () => {
  //   setIsOpen(true);
  // };

  const closeAddAccess = () => {
    setIsOpen(false);
  };

  return (
    <>
      <AddAccessButtonStyled onClick={addNewData}>
        <span>+</span>
        <p>
          Add <br /> access
        </p>
      </AddAccessButtonStyled>
      {isOpen && (
        <OpenAddAccess>
          <AddEmailAccess onClick={closeAddAccess} />
        </OpenAddAccess>
      )}
    </>
  );
};
