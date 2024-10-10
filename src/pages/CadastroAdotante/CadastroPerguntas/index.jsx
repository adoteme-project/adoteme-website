import stepsData from "@/mocks/stepFormRegister";
import FormGroup from "@/components/common/FormGroup";
import { useFormContext } from "react-hook-form"; 

const CadastroPerguntas = () => {
    const { control } = useFormContext();
    const formsDadosUsuario = stepsData.find(step => step.step === 2);

    return (
        <>
            {formsDadosUsuario.formGroups.map((formGroup, index) => (
                <FormGroup
                    key={index}
                    title={formGroup.title}
                    column={formGroup.column}
                    radioControl={formGroup.radioControl}
                    control={control}
                />
            ))}
        </>
    );
};

export default CadastroPerguntas;
