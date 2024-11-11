import noonLogo from 'assets/noon-logo-en 1.svg';
import arrow from 'assets/Line 3.svg';
import { useNavigate } from 'react-router-dom';

const NoonNavbar = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#feee00] pb-4 pt-2">
      <div className="relative flex w-full items-center justify-center">
        <img
          src={arrow}
          alt="arrow"
          className="absolute left-0 h-3 w-[12%] cursor-pointer"
          onClick={() => navigate('-1')}
        />
        <img src={noonLogo} alt="noon" className="h-5" />
      </div>
    </div>
  );
};

export default NoonNavbar;
