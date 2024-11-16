import { useFormContext } from "react-hook-form";

const Input = ({ label, placeholder, type, name, disabled, error, handleInputChange, isPerfil }) => {
  const { register } = useFormContext() || {};

  return (
    <div>
      <label className={`text-xl font-medium ${isPerfil ? "text-[#FFA607]" : "text-gray-700"}`} >{label}</label>
      <input
        className={`mt-1 w-full ${disabled && `bg-input-d`} rounded-md ${isPerfil ? "border-amarelo-select bg-branco" : "border-titulo"}  border-2 px-3 py-2 shadow-md sm:text-sm`}
        placeholder={placeholder ?? ""}
        onChange={handleInputChange}
        type={type}
        {...register(name, {
          disabled: disabled
        })}
      />
      {error?.[name]?.message && <p className="text-vermelho">{error[name].message}</p>}
    </div>
  );
};

export default Input;
