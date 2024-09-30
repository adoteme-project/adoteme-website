import stepsData from "@/mocks/stepFormRegister";
import FormGroup from "@/components/common/FormGroup";
import { useFormContext } from "react-hook-form"; 

const CadastroDados = () => {
    const { register } = useFormContext();
    const formsDadosUsuario = stepsData.find(step => step.step === 1);

    return (
        <>
            {formsDadosUsuario.formGroups.map((formGroup, index) => (
                <FormGroup
                    key={index}
                    title={formGroup.title}
                    column={formGroup.column}
                    fields={formGroup.fields}
                    register={register}
                />
            ))}
        </>
    );
};

export default CadastroDados;
