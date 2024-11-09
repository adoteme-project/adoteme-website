import { useFormContext } from "react-hook-form";


const Checkbox = ({ label, name }) => {
    const { register } = useFormContext()


    return (
        <div>
            <p className="text-xl font-medium"> {label} </p>
            <div className="flex gap-2 items-center mt-2">
                <input className="accent-amarelo h-5 w-5 rounded-sm" type="checkbox" {...register(name)} />
                <label> Sim </label>
            </div>
        </div>
    )
}

export default Checkbox;