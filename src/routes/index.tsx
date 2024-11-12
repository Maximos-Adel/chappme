import { Navigate, createBrowserRouter } from 'react-router-dom';
import NoonLayout from '../theme/layouts/NoonLayout';
import Checkout from '../views/Checkout';
import Verification from '../views/Verification';

import FabHome from '../views/FabHome';
import FabPasscode from '../views/FabPasscode';
import NotFound from '../views/NotFound';
import CodeConfirmation from '../views/CodeConfirmation';
import PasscodeVerification from '../views/PasscodeVerification';
import OrderComplete from '../views/OrderComplete';
import BankCode from '../views/BankCode';

export const routesList = [
  {
    element: <NoonLayout />,
    children: [
      { path: 'checkout', element: <Checkout /> },
      { path: 'chappme-verification', element: <Verification /> },
      { path: 'code-confirmation', element: <CodeConfirmation /> },
      { path: 'code-confirmation', element: <CodeConfirmation /> },
      { path: 'order-complete', element: <OrderComplete /> },
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
  { path: 'bank-code', element: <BankCode /> },

  { path: '404', element: <NotFound /> },

  { path: '*', element: <Navigate to="/404" /> },
  { path: '/', element: <Navigate to="/checkout" /> },
];

export const router = createBrowserRouter(routesList);
