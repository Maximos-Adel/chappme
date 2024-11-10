import IphoneNavbar from '../theme/components/IphoneNavbar';
import bg from '../assets/shutterstock_1896950188 1.png';
import fabLogo from '../assets/csm_first-abu-dhabi-bank-uae_94b6f9f7c6 1.png';
import logoGreen from '../assets/logo-icon-green.svg';
import logo from '../assets/logo-dark-green.svg';
import { Link } from 'react-router-dom';

const FabHome = () => {
  return (
    <div
      className="flex h-screen w-[402px] flex-col bg-[#0e52bb] bg-contain bg-top bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <IphoneNavbar />
      <img src={fabLogo} className="mx-auto mt-10 w-32" />

      <button className="mx-auto mt-[26rem] w-11/12 rounded-xl rounded-bl-none rounded-tr-none bg-blue-100 p-3 text-[#1e1e84]">
        FAB Login
      </button>
      <button className="mx-auto mb-2 mt-28 flex items-center rounded-lg bg-white p-2">
        <img src={logoGreen} className="h-8 w-8" />
        <img src={logo} />
      </button>
      <Link to="/fab-passcode" className="text-center text-white">
        Generate Code
      </Link>
    </div>
  );
};

export default FabHome;
