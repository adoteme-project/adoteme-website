import { useFormContext } from "react-hook-form";

const Select = ({ label, name, disabled, options, onChange }) => {
    const { register } = useFormContext();

    const { onChange: hookFormOnChange, ...rest } = register(name, { disabled: disabled });

    return (
        <div>
            <label className={`text-xl font-medium`}> {label} </label>
            <select
                onChange={(event) => {
                    if (hookFormOnChange) hookFormOnChange(event);
                    if (onChange) onChange(event);
                }}
                className="mt-1 w-full rounded-md border-titulo border-2 px-3 py-2 shadow-md sm:text-sm"
                {...rest}
            >
                {options.map((option, index) => (
                    <option key={index} value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    );
}

export default Select;