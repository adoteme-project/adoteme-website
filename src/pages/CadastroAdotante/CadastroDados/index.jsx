import { stepsData } from "@/mocks/stepFormRegister";
import FormGroup from "@/components/common/FormGroup";
import { useFormContext } from "react-hook-form";
import { MoonLoader } from "react-spinners";
import useCep from "@/hooks/useCep";

const CadastroDados = () => {
    const { register, setValue, control, formState: {errors} } = useFormContext();
    const formsDadosUsuario = stepsData.find(step => step.step === 1);

    const { loading } = useCep(control, setValue);

    return (
        <>
            {formsDadosUsuario.formGroups.map((formGroup, index) => (
                <FormGroup
                    key={index}
                    title={formGroup.title}
                    column={formGroup.column}
                    fields={formGroup.fields}
                    errors={errors}
                    register={register}
                    editMode={true}
                />
            ))}
            {loading && (
                <div className="flex justify-center items-center">
                    <MoonLoader speedMultiplier={1} />
                </div>
            )}
        </>
    );
};

export default CadastroDados;