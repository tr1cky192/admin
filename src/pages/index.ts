import { lazy } from 'react';

// I'm using default exports only for React.lazy components
// because it allows intellisense to show file path this way
export const LoginPage = lazy(() => import('./LoginPage'));
export const MenuPage = lazy(() => import('./MenuPage'));
export const CountryPage = lazy(() => import('./CountryPage'));
export const StatisticPage = lazy(() => import('./StatisticPage'));
export const VerificationPage = lazy(() => import('./VerificationPage'));
export const VerificationCabinetPage = lazy(() => import('./VerificationCabinetPage'));
export const AdminPageAccess = lazy(() => import('./AdminPageAccess'));
export const FinancePage = lazy(() => import('./FinancePage'));
export const Blog = lazy(() => import('./Blog'));
export const HousePageVerif = lazy(() => import('./HousePage'));

