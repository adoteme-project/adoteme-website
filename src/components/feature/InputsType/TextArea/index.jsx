import { useFormContext } from "react-hook-form";

const TextArea = ({ label, name, rows }) => {
    const { register } = useFormContext();


    return (
        <div className="col-span-2">
            <label className="text-xl font-medium">{label}</label>
            <textarea className="mt-1 w-full rounded-md border-2 px-3 py-2 border-titulo"
                rows={rows} {...register(name)} placeholder="Descrição..." />
        </div>
    )
}


export default TextArea;