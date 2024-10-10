import FormRegisterImage from "@/components/feature/UploadImage/RegisterImage"
import { useFormContext } from "react-hook-form";

const CadastroFoto = () => {
    const { control } = useFormContext();

    return <FormRegisterImage control={control}/>
}

export default CadastroFoto;