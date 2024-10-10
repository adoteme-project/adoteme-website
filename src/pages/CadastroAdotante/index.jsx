import { lazy, Suspense, useState } from "react";
import NavigationForm from "../../components/common/NavigationForm";
import { FormProvider, useForm } from "react-hook-form";
import { MoonLoader } from "react-spinners";
import { cadastrarAdotante } from "@/services/authAPI";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { useNotification } from "@/context/NotificationProvider";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegistrationAdotanteSchema } from "@/utils/formValidations";

const CadastroFoto = lazy(() => import('@/pages/CadastroAdotante/CadastroFoto'));
const CadastroDados = lazy(() => import('@/pages/CadastroAdotante/CadastroDados'));

const CadastroAdotante = () => {
  const methods = useForm({ resolver: zodResolver(RegistrationAdotanteSchema) });
  const [step, setStep] = useState(0);
  const navigate = useNavigate();
  const { error, promise } = useNotification();

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

    const cadastroPromise = cadastrarAdotante(formData)
      .then((response) => {
        if (response.status === 201) {
          navigate("/login/adotante");
        }
      })
      .catch((err) => {
        error("Erro ao cadastrar adotante!");
        console.error("Erro ao cadastrar adotante:", err);
      });

    promise(cadastroPromise, {
      pending: "Enviando dados...",
      success: "Cadastro realizado com sucesso!",
      error: "Erro ao cadastrar! Por favor, tente novamente.",
    });

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