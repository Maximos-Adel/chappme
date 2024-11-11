const RadioInput = ({
  icon,
  label,
  selectedOption,
  handleChange,
  info,
}: any) => {
  return (
    <div className="bg-white p-4">
      <div className="flex items-center">
        <input
          type="radio"
          id={label}
          name="payment"
          value={label}
          checked={selectedOption === label}
          onChange={handleChange}
          required
        />
        <label
          htmlFor={label}
          className="ml-2 flex items-center gap-2 font-light"
        >
          <img src={icon} className="h-4 w-4" alt="icon" />
          {label}
        </label>
      </div>
      <p className="mt-1 text-xs font-light">{info}</p>
    </div>
  );
};

export default RadioInput;
