import IphoneNavbar from '../theme/components/IphoneNavbar';
import fabLogo from '../assets/csm_first-abu-dhabi-bank-uae_94b6f9f7c6 1.png';
import bg from '../assets/shutterstock_1896950188 1.png';

const FabPasscode = () => {
  return (
    <div
      className="flex h-screen w-[402px] flex-col bg-[#0e52bb] bg-contain bg-top bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <IphoneNavbar />
      <img src={fabLogo} className="mx-auto mt-10 w-32" />

      <div className="mx-auto mt-20 grid w-8/12 grid-cols-3 gap-4">
        {['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'].map(
          (key) => (
            <button
              key={key}
              className="flex h-20 w-20 items-center justify-center rounded bg-[#071c4b] text-5xl text-white shadow-md"
            >
              {key}
            </button>
          ),
        )}
      </div>
    </div>
  );
};

export default FabPasscode;
