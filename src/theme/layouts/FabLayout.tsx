import { Outlet } from 'react-router-dom';
import IphoneNavbar from '../components/IphoneNavbar';
import bg from '../../assets/shutterstock_1896950188 1.png';

const FabLayout = () => {
  return (
    <div className="flex h-screen w-[402px] flex-col">
      <IphoneNavbar bgColor={''} />
      <div
        className="h-screen w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>
      <Outlet />
    </div>
  );
};

export default FabLayout;
