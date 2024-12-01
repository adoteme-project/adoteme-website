import { Link, useNavigate } from "react-router-dom";
import CurrencyInput from "../../InputsType/CurrencyInput";
import { FormProvider, useForm } from "react-hook-form";
import { useFormState } from "@/context/FormStateProvider";
import { useContext, useEffect, useState } from "react";
import { useContextPath } from "@/context/PathContextProvider";
import { cadastroPetAbrigo } from "@/services/ongAPI";
import OngAuthContext from "@/context/AuthOngProvider";
import { useNotification } from "@/context/NotificationProvider";
import { calcularAnoDeNascimento } from "@/utils/yearToAge";

const TaxaStep = () => {
    const [enableTaxa, setEnableTaxa] = useState(true);
    const methods = useForm();
    const { formState, setFormState } = useFormState();
    const { error, promise } = useNotification();

    const { authOng } = useContext(OngAuthContext);

    const navigate = useNavigate();
    const contextPath = useContextPath();

    useEffect(() => {
        methods.reset(formState);
    }, [formState, methods]);

    const handleVisibilityChange = (event) => {
        const { value } = event.target;
        methods.setValue("isVisible", value);
    };

    const handleSemTaxaChange = (event) => {
        const isChecked = event.target.checked;
        setEnableTaxa(!isChecked);
        if (isChecked) {
            methods.setValue("taxaAdocao", null);
        }
    };

    const submitData = (data) => {
        setFormState({ ...formState, data });

        const formattedDataPet = {
            nome: data.nome,
            anoNascimento: calcularAnoDeNascimento(data.anoNascimento) || 2024,
            sexo: data.sexo,
            especie: data.especie,
            raca: data.raca || "(SDR) Vira-Lata",
            dataAbrigo: data.dataAbrigo || "2023-05-02",
            isCastrado: data.isCastrado || false,
            descricao: data.descricao || "Descrição",
            isVisible: data.isVisible || false,
            isAdotado: false,
            porte: data.porte || "Médio",
            taxaAdocao: enableTaxa ? data.taxaAdocao : 0,
            personalidade: {
                energia: data.personalidade.energia || 3,
                sociabilidade: data.personalidade.sociabilidade || 3,
                tolerante: data.personalidade.tolerante || 3,
                obediente: data.personalidade.obediente || 3,
                territorial: data.personalidade.territorial || 3,
                inteligencia: data.personalidade.inteligencia || 3,
            },
            ongId: authOng?.userData?.ongId,
        }

        const formData = new FormData();
        formData.append(data.especie.toLowerCase(), JSON.stringify(formattedDataPet))

        const imagens = data.images || [];
        imagens.forEach((imagem, index) => {
            formData.append(`${index == 0 ? 'Foto de Perfil Principal' : `fotoPerfil${index + 1}`} `, imagem);
        });

        const cadastroPetResponse = cadastroPetAbrigo(data.especie.toLowerCase(), formData)
        .then((response) => {
            if (response.status === 201) {
                navigate("/ong/pets");
            }
          })
          .catch((err) => {
            error("Erro ao cadastrar o Pet!");
            console.error("Erro ao cadastrar o Pet:", err);
          });
    
        promise(cadastroPetResponse, {
          pending: "Enviando dados...",
          success: "Cadastro realizado com sucesso!",
          error: "Erro ao cadastrar! Por favor, tente novamente.",
        });

    };

    return (
        <FormProvider {...methods}>
            <div className="w-full flex flex-col gap-10 items-center">
                <h1 className="text-center text-azul-main font-nunito text-3xl font-semibold"> Taxa do Pet </h1>
                <form onSubmit={methods.handleSubmit(submitData)} className="flex flex-col gap-10 justify-center w-1/2">
                    <div className="border-b-2 border-amarelo-select p-3 w-full flex justify-between items-center">
                        <span> Não possui taxa de adoção </span>
                        <input
                            {...methods.register("semTaxa")}
                            className="accent-amarelo h-5 w-5 rounded-sm"
                            type="checkbox"
                            onChange={handleSemTaxaChange}
                        />
                    </div>
                    <CurrencyInput
                        name="taxaAdocao"
                        label="Taxa de Adoção"
                        disabled={!enableTaxa}
                    />
                    <div>
                        <h4 className="font-semibold text-lg"> Visibilidade do Pet </h4>
                        <div className="border-b-2 border-amarelo-select p-3 w-full flex justify-between items-center">
                            <div>
                                <h5 className="font-medium"> Visível </h5>
                                <p className="font-light">
                                    Disponibilizar adoção do pet pelo site publicamente
                                </p>
                            </div>
                            <input
                                {...methods.register("isVisible")}
                                className="accent-amarelo h-5 w-5 rounded-sm"
                                type="radio"
                                value={true}
                                defaultChecked
                                onChange={handleVisibilityChange}
                            />
                        </div>
                        <div className="border-b-2 border-amarelo-select p-3 w-full flex justify-between items-center">
                            <div>
                                <h5 className="font-medium"> Escondido </h5>
                                <p className="font-light">
                                    Pet será cadastrado, mas não estará visível no site
                                </p>
                            </div>
                            <input
                                {...methods.register("isVisible")}
                                className="accent-amarelo h-5 w-5 rounded-sm"
                                type="radio"
                                value={false}
                                onChange={handleVisibilityChange}
                            />
                        </div>
                    </div>
                    <div className="w-full flex justify-center">
                        <nav className="w-[50%] flex justify-center gap-8">
                            <Link
                                to={`/ong/cadastrar-pet/${contextPath}/${contextPath}-informacoes`}
                                className="bg-amarelo-select px-4 py-3 text-center rounded-md text-branco w-full"
                            >
                                Voltar
                            </Link>
                            <button type="submit" className="bg-verde px-4 py-3 rounded-md text-center text-branco w-full">
                                Finalizar
                            </button>
                        </nav>
                    </div>
                </form>
            </div>
        </FormProvider>
    );
};

export default TaxaStep;