import { Navigate, Routes, Route } from 'react-router-dom';
import { routes } from './routesConfig';
import { PrivateRoute } from './PrivateRoute';

const {
  login,
  menu,
  country,
  verification,
  adminPageAccess,
  registerModal,
  statistics,
  finance,
  blog,
  mowgliBooking
} = routes;

export const AppRouter = () => (
  <Routes>
    <Route path={login.path} element={<login.element.App />}>
      <Route index element={<login.element.LoginPage />} />

      <Route element={<PrivateRoute />}>
        <Route
          path={verification.path.verification}
          element={<verification.element.VerificationPage />}
        />
        <Route
          path={verification.path.verificationId}
          element={<verification.element.VerificationCabinetPage />}
        />
        <Route
          path={verification.path.verificationPage}
          element={<verification.element.HousePageVerif />}
        />
        <Route path={menu.path} element={<menu.element />} />
        <Route path={country.path} element={<country.element />} />
        <Route path={statistics.path} element={<statistics.element />} />
        <Route path={adminPageAccess.path} element={<adminPageAccess.element />} />
        <Route path={registerModal.path} element={<registerModal.element />} />
        <Route path={finance.path} element={<finance.element />} />
        <Route path={blog.path} element={<blog.element />} />
        <Route path={mowgliBooking.path} element={<mowgliBooking.element />} />
        {/* <Route path="/location" element={<Location />} /> */}
      </Route>

      <Route path="*" element={<Navigate to={login.path} replace />} />
    </Route>
  </Routes>
);
