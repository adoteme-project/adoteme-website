import { useFormContext } from "react-hook-form";

const Input = ({ label, placeholder, type, name, disabled, error,handleInputChange, options }) => {
  const { register } = useFormContext() || {};

  return (
    <div>
      <label className="text-xl font-medium">{label}</label>
      {type != "select" ? (
              <input
              className={`mt-1 w-full ${disabled && `bg-input-d`} rounded-md border-titulo border-2 px-3 py-2 shadow-md sm:text-sm`}
              placeholder={placeholder ?? ""}
              onChange={handleInputChange}
              type={type}
              {...register(name, {
                disabled: disabled
              })}
            />
      ) : (
        <select className="mt-1 w-full ${disabled && `bg-input-d`} rounded-md border-titulo border-2 px-3 py-2 shadow-md sm:text-sm">
          <option>Opção 1</option>
          <option>Opção 2</option>
          <option>Opção 3</option>
        </select>
      )}

      {error?.[name]?.message && <p className="text-vermelho">{error[name].message}</p>}
    </div>
  );
};

export default Input;
