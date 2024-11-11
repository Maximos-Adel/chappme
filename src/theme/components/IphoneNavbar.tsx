import wifi from '../../assets/ios-wifi-2.svg';
import signal from '../../assets/mobile-signal-icon.svg';
import battery from '../../assets/ios-battery-full.svg';
const IphoneNavbar = ({ bgColor }: { bgColor?: string }) => {
  return (
    <div className={`flex items-center justify-center ${bgColor}`}>
      <p className="w-1/3 flex-1 text-center">9:41</p>
      <div className="w-1/3 flex-1 p-2">
        <div className="relative h-[37px] w-32 flex-1 rounded-[100px] bg-black"></div>
      </div>

      <div className="flex w-1/3 flex-1 items-center justify-center gap-2">
        <img
          src={signal}
          className="h-4 w-4 scale-x-[-1] transform"
          alt="signal"
        />
        <img src={wifi} className="h-5 w-5" alt="wifi" />
        <img src={battery} className="h-7 w-7" alt="battery" />
      </div>
    </div>
  );
};

export default IphoneNavbar;
