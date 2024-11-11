import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import IphoneNavbar from 'theme/components/IphoneNavbar';
import fabLogo from 'assets/csm_first-abu-dhabi-bank-uae_94b6f9f7c6 1.png';
import logoGreen from 'assets/logo-icon-green.svg';
import logo from 'assets/logo-dark-green.svg';
import check from 'assets/green-check-mark-verified-circle-16223.svg';

const PasscodeVerification = () => {
  const [state, setState] = useState(1);

  const navigate = useNavigate();
  useEffect(() => {
    if (state === 2) {
      const timer = setTimeout(() => {
        navigate('/order-complete');
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [state, navigate]);

  return (
    <div className="flex h-screen w-[402px] flex-col bg-[#0e52bb]">
      <IphoneNavbar />
      <img src={fabLogo} className="w-20" />
      <div className="flex flex-1 flex-col items-center gap-5 bg-[#eeeeee]">
        <div className="mt-5 flex">
          <img src={logoGreen} className="h-12 w-12" alt="logo" />
          <img src={logo} alt="logo" />
        </div>
        <p className="text-xl font-semibold text-red-500">
          Payment Confirmation
        </p>
        <div className="flex w-11/12 flex-col gap-4 bg-white p-4 text-sm">
          <p className="font-semibold uppercase text-gray-500">
            Transaction Details
          </p>
          <div className="-mt-2">
            <p>Amount</p>
            <strong>139,00</strong>
          </div>
          <div>
            <p>Seller</p>
            <strong>Noon Online Retailer</strong>
          </div>
          <div>
            <p>Location</p>
            <strong>Noon KSA Head Office</strong>
            <strong className="block">
              Building B11 King Khaliid International Airport, The Business
              Front, Riyadh, KSA 13412, SA
            </strong>
          </div>
        </div>
        {state === 1 ? (
          <form
            className="flex flex-col items-center justify-center gap-2"
            onSubmit={() => setState(2)}
          >
            <p className="text-sm font-semibold uppercase text-gray-500">
              Enter Pin
            </p>
            <div className="flex flex-1 items-center gap-2">
              <input className="h-16 w-12 rounded-md border border-gray-300 bg-white p-2 text-center outline-none"></input>
              <input className="h-16 w-12 rounded-md border border-gray-300 bg-white p-2 text-center outline-none"></input>
              <input className="h-16 w-12 rounded-md border border-gray-300 bg-white p-2 text-center outline-none"></input>
              <input className="h-16 w-12 rounded-md border border-gray-300 bg-white p-2 text-center outline-none"></input>
            </div>
            <p>
              will expire in <strong>1:18 sec</strong>
            </p>
            <div className="mt-4 flex items-center gap-4">
              <button className="flex-1 rounded-md border-2 border-gray-200 bg-white px-12 py-2">
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 rounded-md bg-green-500 px-12 py-2 text-white hover:bg-green-600"
              >
                Confirm
              </button>
            </div>
          </form>
        ) : state === 2 ? (
          <div className="mt-4 flex flex-col items-center gap-2">
            <img src={check} className="w-12" alt="check" />
            <p className="font-semibold">Payment Successful</p>
            <p className="text-sm">
              you will now be redirected to the merchant store
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default PasscodeVerification;
