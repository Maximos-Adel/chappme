import IphoneNavbar from '../components/IphoneNavbar';
import NoonNavbar from '../components/NoonNavbar';

import { Outlet } from 'react-router-dom';

const NoonLayout = () => {
  return (
    <div className="flex h-screen w-[402px] flex-col">
      <IphoneNavbar bgColor={'bg-[#feee00]'} />
      <div className="flex flex-1 flex-col">
        <NoonNavbar />
        <div className="flex flex-grow flex-col bg-[#eeeeee]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default NoonLayout;
