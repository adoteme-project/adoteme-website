const DropDown = ({label, options}) => {
  return (
    <div>
      <label className={`text-sm font-medium`}> {label} </label>
      <select onChange={(event) => 'foi' + event} className="w-full max-w-80 rounded-md border-titulo border-2 px-3 py-2 shadow-md sm:text-sm">
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
