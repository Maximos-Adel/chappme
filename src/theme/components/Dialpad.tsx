const Dialpad = () => {
  return (
    <div className="mt-auto grid grid-cols-3 gap-2 bg-gray-300 p-2">
      <button className="flex h-14 flex-col items-center justify-center rounded-lg bg-white p-4 shadow hover:bg-gray-100">
        <span className="text-2xl font-medium">1</span>
        <span className="text-xs font-light text-gray-500">&nbsp;</span>
      </button>
      <button className="flex h-14 flex-col items-center justify-center rounded-lg bg-white p-4 shadow hover:bg-gray-100">
        <span className="text-2xl font-medium">2</span>
        <span className="text-xs font-light text-gray-500">ABC</span>
      </button>
      <button className="flex h-14 flex-col items-center justify-center rounded-lg bg-white p-4 shadow hover:bg-gray-100">
        <span className="text-2xl font-medium">3</span>
        <span className="text-xs font-light text-gray-500">DEF</span>
      </button>
      <button className="flex h-14 flex-col items-center justify-center rounded-lg bg-white p-4 shadow hover:bg-gray-100">
        <span className="text-2xl font-medium">4</span>
        <span className="text-xs font-light text-gray-500">GHI</span>
      </button>
      <button className="flex h-14 flex-col items-center justify-center rounded-lg bg-white p-4 shadow hover:bg-gray-100">
        <span className="text-2xl font-medium">5</span>
        <span className="text-xs font-light text-gray-500">JKL</span>
      </button>
      <button className="flex h-14 flex-col items-center justify-center rounded-lg bg-white p-4 shadow hover:bg-gray-100">
        <span className="text-2xl font-medium">6</span>
        <span className="text-xs font-light text-gray-500">MNO</span>
      </button>
      <button className="flex h-14 flex-col items-center justify-center rounded-lg bg-white p-4 shadow hover:bg-gray-100">
        <span className="text-2xl font-medium">7</span>
        <span className="text-xs font-light text-gray-500">PQRS</span>
      </button>
      <button className="flex h-14 flex-col items-center justify-center rounded-lg bg-white p-4 shadow hover:bg-gray-100">
        <span className="text-2xl font-medium">8</span>
        <span className="text-xs font-light text-gray-500">TUV</span>
      </button>
      <button className="flex h-14 flex-col items-center justify-center rounded-lg bg-white p-4 shadow hover:bg-gray-100">
        <span className="text-2xl font-medium">9</span>
        <span className="text-xs font-light text-gray-500">WXYZ</span>
      </button>
      <div></div>
      <button className="flex flex-col items-center justify-center rounded-lg bg-white p-4 shadow hover:bg-gray-100">
        <span className="text-2xl font-medium">0</span>
      </button>

      <button className="flex flex-col items-center justify-center rounded-lg p-4 hover:bg-gray-100">
        <span className="text-2xl font-medium">⌫</span>
      </button>
    </div>
  );
};

export default Dialpad;
