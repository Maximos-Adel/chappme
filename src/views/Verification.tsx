import logoGreen from '../assets/logo-icon-green.svg';
import logo from '../assets/logo-dark-green.svg';
import Dialpad from '../theme/components/Dialpad';
import { useNavigate } from 'react-router-dom';

const Verification = () => {
  const navigate = useNavigate();
  return (
    <>
      <p className="w-full bg-white px-4 py-2">Chappme Code</p>
      <form
        className="mt-4 flex flex-col items-center justify-center"
        onSubmit={() => navigate('/fab-home')}
      >
        <div className="flex w-11/12 flex-col items-center justify-center gap-4 bg-white p-4">
          <div className="flex">
            <img src={logoGreen} className="h-12 w-12" />
            <img src={logo} />
          </div>
          <p className="text-center text-sm">
            Login to your bank institution app using the{' '}
            <strong>Chappme Generate Code</strong>to generate a 6 digit
            authorization code which will be ussed below
          </p>
          <div className="flex items-center gap-4">
            <div className="flex flex-1 items-center gap-2">
              <input className="h-16 w-12 rounded-md bg-gray-100 p-4 outline-none"></input>
              <input className="h-16 w-12 rounded-md bg-gray-100 p-4 outline-none"></input>
              <input className="h-16 w-12 rounded-md bg-gray-100 p-4 outline-none"></input>
            </div>
            <div className="flex flex-1 items-center gap-2">
              <input className="h-16 w-12 rounded-md bg-gray-100 p-4 outline-none"></input>
              <input className="h-16 w-12 rounded-md bg-gray-100 p-4 outline-none"></input>
              <input className="h-16 w-12 rounded-md bg-gray-100 p-4 outline-none"></input>
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
  );
};

export default Verification;
