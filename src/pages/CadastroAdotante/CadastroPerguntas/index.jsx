import { formQuestionsAdotante} from "@/mocks/stepFormRegister";
import FormGroup from "@/components/common/FormGroup";
import { useFormContext } from "react-hook-form"; 

const CadastroPerguntas = () => {
    const { control } = useFormContext();
    const formsDadosUsuario = formQuestionsAdotante.find(step => step.step === 2);

    return (
        <>
            {formsDadosUsuario.formGroups.map((formGroup, index) => (
                <FormGroup
                    key={index}
                    title={formGroup.title}
                    column={formGroup.column}
                    radioControl={formGroup.radioControl}
                    control={control}
                    editMode={true}
                />
            ))}
        </>
    );
};

export default CadastroPerguntas;
