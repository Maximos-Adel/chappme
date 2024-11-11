import { Navigate, createBrowserRouter } from 'react-router-dom';
import NoonLayout from '../theme/layouts/NoonLayout';
import Checkout from '../views/Checkout';
import Verification from '../views/Verification';

import FabHome from '../views/FabHome';
import FabPasscode from '../views/FabPasscode';
import NotFound from '../views/NotFound';
import CodeConfirmation from '../views/CodeConfirmation';
import PasscodeVerification from '../views/PasscodeVerification';

export const routesList = [
  {
    element: <NoonLayout />,
    children: [
      { path: 'checkout', element: <Checkout /> },
      { path: 'chappme-verification', element: <Verification /> },
      { path: 'code-confirmation', element: <CodeConfirmation /> },
    ],
  },
  {
    path: 'fab-home',
    element: <FabHome />,
  },
  {
    path: 'fab-passcode',
    element: <FabPasscode />,
  },
  {
    path: 'passcode-verification',
    element: <PasscodeVerification />,
  },
  // { path: "401", element: <UnAuthorized /> },
  // { path: "403", element: <Forbidden /> },
  { path: '404', element: <NotFound /> },
  // { path: "523", element: <AuthorizationExpired /> },
  // { path: "system-failure", element: <SystemFailure /> },
  { path: '*', element: <Navigate to="/404" /> },
  { path: '/', element: <Navigate to="/checkout" /> },
];

export const router = createBrowserRouter(routesList);
