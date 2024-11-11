import { useState } from 'react';
import credit from '../assets/Group 7.svg';
import paypal from '../assets/paypal-p-svgrepo-com 1.svg';
import chappme from '../assets/logo-icon-green.svg';
import RadioInput from '../theme/components/RadioInput';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const navigate = useNavigate();

  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (e: any) => {
    setSelectedOption(e.target.value);
  };

  const options = [
    {
      label: 'Credit Card',
      icon: credit,
    },
    {
      label: 'Paypal',
      icon: paypal,
    },
    {
      label: 'Chappme',
      icon: chappme,
      info: 'Pay with Chappme 6 digit code',
    },
  ];

  return (
    <>
      <p className="w-full bg-white px-4 py-2">Checkout</p>
      <div className="p-4">
        <div className="flex flex-col gap-3">
          <p>Select Payment Method</p>
          <form
            onSubmit={() => navigate('/chappme-verification')}
            className="space-y-5"
          >
            {options.map((option: any) => (
              <RadioInput
                icon={option.icon}
                label={option.label}
                selectedOption={selectedOption}
                handleChange={handleChange}
                info={option.info}
              />
            ))}

            <div className="my-4 border-t border-gray-300"></div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <p className="font-semibold">Subtotal</p>
                <p className="text-[#5252f2]">99.0 AED</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-semibold">Delivery</p>
                <p className="text-[#5252f2]">FREE</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <p className="font-semibold">Grand Total</p>
                  <p className="text-xs">Including VAT</p>
                </div>
                <p className="text-lg font-semibold">99.0 AED</p>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-[#5252f2] p-2 text-white hover:bg-[#4242d9]"
            >
              CHECKOUT
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Checkout;
