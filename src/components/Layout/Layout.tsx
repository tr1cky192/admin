import { Outlet } from 'react-router-dom';
import React, { Suspense} from 'react';
import { Main } from './Layout.styled';


export const Layout = () => (
  <Main>
    <Suspense>
      <Outlet />
    </Suspense>
  </Main>
);
