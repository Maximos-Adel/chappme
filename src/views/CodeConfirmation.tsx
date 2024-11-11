import { useEffect, useState } from 'react';
import Dialpad from '../theme/components/Dialpad';
import logoGreen from '../assets/logo-icon-green.svg';
import logo from '../assets/logo-dark-green.svg';
import loader from '../assets/loader.svg';
import { useNavigate } from 'react-router-dom';

const CodeConfirmation = () => {
  const [state, setState] = useState<number>(1);

  const navigate = useNavigate();
  useEffect(() => {
    if (state === 2) {
      const timer = setTimeout(() => {
        navigate('/passcode-verification'); // Replace '/target-page' with your desired route
      }, 2000); // 3 seconds delay

      // Clean up the timer if the component unmounts or state changes
      return () => clearTimeout(timer);
    }
  }, [state, navigate]);

  return (
    <>
      <p className="w-full bg-white px-4 py-2">Chappme Code</p>
      {state === 1 ? (
        <>
          <form
            className="mt-4 flex flex-col items-center justify-center"
            onSubmit={() => setState(2)}
          >
            <div className="flex w-11/12 flex-col items-center justify-center gap-4 bg-white p-4">
              <div className="flex">
                <img src={logoGreen} className="h-12 w-12" />
                <img src={logo} />
              </div>
              <p className="text-center text-sm">
                Provide the Chappme 6 digit code below from your bank
                insitituation app or online banking
              </p>
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
            </div>
            <button
              type="submit"
              className="mt-8 w-11/12 bg-[#5252f2] p-2 text-white hover:bg-[#4242d9]"
            >
              VERIFY
            </button>
          </form>
          <Dialpad />
        </>
      ) : state === 2 ? (
        <>
          <div className="mx-auto mt-4 flex w-11/12 flex-col items-center justify-center bg-white p-4">
            <div className="flex">
              <img src={logoGreen} className="h-12 w-12" />
              <img src={logo} />
            </div>
            <p className="mt-4 text-center font-semibold">Processing payment</p>
            <p className="text-sm font-light">
              Please confirm in your mobile banking app.
            </p>
            <img src={loader} className="mt-4 animate-spin" alt="loader" />
          </div>

          <Dialpad />
        </>
      ) : null}
    </>
  );
};

export default CodeConfirmation;
