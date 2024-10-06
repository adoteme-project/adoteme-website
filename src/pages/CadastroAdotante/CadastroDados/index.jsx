import stepsData from "@/mocks/stepFormRegister";
import FormGroup from "@/components/common/FormGroup";
import { useFormContext, useWatch } from "react-hook-form";
import { viaCep } from "@/services/configs/axiosConfig";
import { useEffect, useState } from "react";
import { MoonLoader } from "react-spinners";

const CadastroDados = () => {
    const { register, setValue, control } = useFormContext();
    const formsDadosUsuario = stepsData.find(step => step.step === 1);
    const cep = useWatch({ control, name: "cep" });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (cep) {
            setValue("endereco", '');
            setValue("cidade", '');
            setValue("estado", '');
        }

        if (cep && cep.length === 8) {
            async function getEndereco(cep) {
                try {
                    setLoading(true);
                    const { data } = await viaCep.get(`${cep}/json`);
                    if (data.erro) {
                        console.log("CEP inválido");
                        return;
                    }
                    const endereco = `${data.logradouro}, ${data.bairro}`;
                    setValue("endereco", endereco);
                    setValue("cidade", data.localidade);
                    setValue("estado", data.uf);
                } catch (error) {
                    console.log("Erro ao buscar o CEP:", error);
                } finally {
                    setLoading(false);
                }
            }
            getEndereco(cep);
        }
    }, [cep, setValue]);

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
            {loading && (
                <div className="flex justify-center items-center">
                    <MoonLoader speedMultiplier={1} />
                </div>
            )}
        </>
    );
};

export default CadastroDados;