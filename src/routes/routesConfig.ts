import { App } from 'App';
import {
  CountryPage,
  LoginPage,
  MenuPage,
  VerificationPage,
  VerificationCabinetPage,
  AdminPageAccess,
  StatisticPage,
  FinancePage,
  Blog,
  HousePageVerif,
} from 'pages';
import RegisterModalPage from 'pages/RegisterModalPage';
import mowgliBookingPage from 'pages/mowgliBooking';

export const routes = {
  login: { path: '/', name: 'Login', element: { App, LoginPage } },
  menu: { path: '/menu', name: 'Menu', element: MenuPage },
  country: { path: '/countries', name: 'Countries', element: CountryPage },

  verification: {
    path: {
      verification: '/verification',
      verificationId: '/verification/:verificationId',
      verificationPage: '/verification/house-page',
    },
    name: 'Objects Verification',
    element: { VerificationCabinetPage, VerificationPage, HousePageVerif },
  },
  finance: { path: '/finance', name: 'Finance', element: FinancePage },
  statistics: {
    path: '/statistics',
    name: 'Statistics and access to cabinets',
    element: StatisticPage,
  },
  adminPageAccess: {
    path: '/admin-page-access',
    name: 'Access to the administrative directory',
    element: AdminPageAccess,
  },
  blog: { path: '/blog', name: 'Blog', element: Blog },
  mowgliBooking: { path: '/mowgli-booking', name: 'Mowgli booking', element: mowgliBookingPage },
  registerModal: { path: '/registerModal', name: 'registerModal', element: RegisterModalPage },
};
