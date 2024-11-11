import IphoneNavbar from '../theme/components/IphoneNavbar';
import fabLogo from '../assets/csm_first-abu-dhabi-bank-uae_94b6f9f7c6 1.png';
import logoGreen from '../assets/logo-icon-green.svg';
import logo from '../assets/logo-dark-green.svg';
import { useNavigate } from 'react-router-dom';

const BankCode = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen w-[402px] flex-col bg-[#0e52bb]">
      <IphoneNavbar />
      <img src={fabLogo} className="w-20" />
      <div className="mt-2 flex flex-1 flex-col items-center gap-5 bg-[#eeeeee] pt-5">
        <div className="flex">
          <img src={logoGreen} className="h-12 w-12" />
          <img src={logo} />
        </div>
        <p className="px-4 text-center text-gray-500">
          Provide the 6 digit Chappme code below to authenticate the transaction
        </p>
        <div className="flex w-11/12 flex-col gap-4 bg-white p-4 text-sm">
          <p className="font-semibold uppercase text-gray-500">
            Acoount Details
          </p>
          <div className="-mt-2 flex flex-col">
            <strong>Primary Account</strong>
            <strong>*** 0918</strong>
          </div>
          <div className="flex items-center justify-between">
            <p>Available Funds</p>
            <strong>26,720 AED</strong>
          </div>
        </div>

        <form
          className="flex w-11/12 flex-col items-center justify-center gap-2 bg-white p-4 text-sm"
          onSubmit={() => navigate('/code-confirmation')}
        >
          <p className="font-semibold uppercase text-gray-500">chappme code</p>
          <div className="flex items-center gap-4 text-4xl font-semibold">
            <div className="flex flex-1 items-center gap-2">
              <input className="h-16 w-12 rounded-md bg-gray-100 p-2 text-center outline-none"></input>
              <input className="h-16 w-12 rounded-md bg-gray-100 p-2 text-center outline-none"></input>
              <input className="h-16 w-12 rounded-md bg-gray-100 p-2 text-center outline-none"></input>
            </div>
            <div className="flex flex-1 items-center gap-2">
              <input className="h-16 w-12 rounded-md bg-gray-100 p-2 text-center outline-none"></input>
              <input className="h-16 w-12 rounded-md bg-gray-100 p-2 text-center outline-none"></input>
              <input className="h-16 w-12 rounded-md bg-gray-100 p-2 text-center outline-none"></input>
            </div>
          </div>
          <button
            type="submit"
            className="w-full rounded bg-green-500 p-2 text-white hover:bg-green-600"
          >
            Copy Code
          </button>
          <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
            <div
              className="h-full rounded-full bg-green-500 text-center text-xs text-white"
              style={{ width: '50%' }}
            ></div>
          </div>
          <p>
            The Code will update in <strong>1:18 sec</strong>
          </p>
        </form>
      </div>
    </div>
  );
};

export default BankCode;
