
import { useFormContext } from "react-hook-form";

const Input = ({ 
  label, 
  placeholder, 
  type = "text", 
  name, 
  disabled, 
  error, 
  handleInputChange, 
  isPerfil, 
  required = false, 
  minLength,
  min,
  max
}) => {
  const { register } = useFormContext();

  return (
    <div>
      <label 
        className={`text-xl font-medium ${isPerfil ? "text-[#FFA607]" : "text-gray-700"}`}
      >
        {label}
      </label>
      <input
        className={`mt-1 w-full ${disabled && `bg-input-d`} rounded-md ${
          isPerfil ? "border-amarelo-select bg-branco" : "border-titulo"
        }  border-2 px-3 py-2 shadow-md sm:text-sm`}
        placeholder={placeholder ?? ""}
        onChange={handleInputChange}
        type={type}
        {...register(name, {
          disabled: disabled,
          required: required ? "Este campo é obrigatório" : false,
          minLength: minLength && {
            value: minLength,
            message: `Este campo precisa de pelo menos ${minLength} caracteres`,
          },
          min: min && {value: min, message: `Não pode ser menor que ${min}`},
          max: max && {value: max, message: `Não pode ser maior que ${max}`}
        })}
      />
      {error?.[name]?.message && <p className="text-vermelho">{error[name].message}</p>}
    </div>
  );
};

export default Input;