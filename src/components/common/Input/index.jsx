const Input = (props) => {
  return (
    <div>
      <label className="text-xl font-medium">{props.label}</label>
      <input
        className="mt-1 w-full rounded-md border-titulo border-2 px-3 py-2 shadow-md sm:text-sm"
        placeholder={props.placeholder}
        type={props.type}
      />
    </div>
  );
};

export default Input;
