import { lazy, Suspense, useState } from "react";
import NavigationForm from "../../components/common/NavigationForm";
import { FormProvider, useForm } from "react-hook-form";
import { MoonLoader } from "react-spinners";
import { cadastrarAdotante } from "@/services/authAPI";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { useNotification } from "@/context/NotificationProvider";

const CadastroFoto = lazy(() => import('@/pages/CadastroAdotante/CadastroFoto'));
const CadastroDados = lazy(() => import('@/pages/CadastroAdotante/CadastroDados'));

const CadastroAdotante = () => {
  const methods = useForm();
  const [step, setStep] = useState(0);
  const navigate = useNavigate();
  const { success, error } = useNotification();

  const steps = [
    <CadastroDados key={0} />,
    <CadastroFoto key={1} />,
  ];

  const nextStep = () => {
    setStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const prevStep = () => {
    setStep((prev) => Math.max(prev - 1, 0));
  };

  const onSubmit = async () => {
    methods.unregister(["endereco", "cidade", "estado", "confirmarSenha"]);

    const data = methods.getValues();
    const { fotoPerfil, ...dadosAdotante } = data;

    const formData = new FormData();
    formData.append("adotante", JSON.stringify(dadosAdotante));

    if (fotoPerfil instanceof File) {
      formData.append("fotoPerfil", fotoPerfil);
    }

    try {
      const response = await cadastrarAdotante(formData);
      if (response.status === 201) {
        success("Cadastro realizado com sucesso !")
        navigate("/login/adotante");
      } else {
        error(`Erro ao cadastrar o adotante: ${response.status} - ${response.statusText}`)
      }
    } catch (err) {
      if (err.response) {
        const { status, data } = err.response;
        error(`Erro ${status}: ${data.message || "Erro ao enviar o formulário"}`);
      } else {
        error(`Erro: ${err.message || "Erro desconhecido"}`);
      }
    }
  };

  return (
    <>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="w-full justify-center items-center flex flex-col gap-8 overflow-y-auto my-8 font-nunito"
        >
          <h1 className="text-center text-4xl">Cadastro: Adotante</h1>

          <Suspense fallback={<MoonLoader speedMultiplier={1} />}>
            {steps[step]}
          </Suspense>

          <NavigationForm
            prevStep={step > 0 ? prevStep : null}
            nextStep={step < steps.length - 1 ? nextStep : null}
            step={step}
            totalSteps={steps.length - 1}
            handleSubmit={methods.handleSubmit(onSubmit)}
          />
        </form>
      </FormProvider>
    </>
  );
};

export default CadastroAdotante;