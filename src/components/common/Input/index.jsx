import { useFormContext } from "react-hook-form";

const Input = ({ label, placeholder, type, name, disabled }) => {
  const { register } = useFormContext() || {};

  return (
    <div>
      <label className="text-xl font-medium">{label}</label>
      <input
        className={`mt-1 w-full ${disabled && `bg-input-d`} rounded-md border-titulo border-2 px-3 py-2 shadow-md sm:text-sm`}
        placeholder={placeholder ?? ""}
        type={type}
        {...register(name, {
          disabled: disabled
        })}
      />
    </div>
  );
};

export default Input;
