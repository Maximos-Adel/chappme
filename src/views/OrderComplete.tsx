import check from '../assets/green-check-mark-verified-circle-16223.svg';
import headphone from '../assets/Screenshot 2024-10-30 at 2.06.59 PM 1.png';
const OrderComplete = () => {
  return (
    <>
      <p className="w-full bg-white px-4 py-2">Order Complete</p>
      <div className="mt-6 flex flex-col items-center gap-2">
        <img src={check} className="w-12" alt="check" />
        <p className="font-semibold">Thank You!</p>
        <p className="text-sm">Your order has been placed successfully</p>
      </div>
      <div className="mx-auto mt-8 flex w-11/12 gap-4 bg-white p-4 text-sm">
        <div>
          <strong>JBL Tune 510Bt Wirekess On-Ear Headphones</strong>
          <p className="text-gray-500">
            Pure Bass - 40H battery - Speed Change - Fast Usb Type-C - Foldable
            Black
          </p>
        </div>
        <img src={headphone} alt="headphone" />
      </div>

      <div className="mt-4 flex flex-col p-4">
        <div className="flex items-center justify-between">
          <p className="font-semibold">Subtotal</p>
          <p className="text-[#5252f2]">139.00 AED</p>
        </div>
        <div className="my-4 border-t border-gray-300"></div>
        <div className="flex items-start justify-between">
          <div className="flex flex-col">
            <p className="font-semibold">Delivery</p>
            <p className="text-sm">delivered by Fri, Nov 1</p>
          </div>
          <p className="text-[#5252f2]">FREE</p>
        </div>
        <div className="my-4 border-t border-gray-300"></div>
        <div className="flex items-start justify-between">
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <p className="font-semibold">Grand Total</p>
              <p className="text-xs">Including VAT</p>
            </div>
            <p className="text-xs">Payed via Chappme</p>
          </div>
          <p className="text-lg font-semibold">139.00 AED</p>
        </div>
      </div>
    </>
  );
};

export default OrderComplete;
