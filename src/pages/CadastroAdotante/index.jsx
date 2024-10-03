import { useState } from "react";
import NavigationForm from "../../components/common/NavigationForm";
import { FormProvider, useForm } from "react-hook-form";
import CadastroDados from "@/pages/CadastroAdotante/CadastroDados";
// import CadastroPerguntas from "@/pages/CadastroAdotante/CadastroPerguntas";
import CadastroFoto from "@/pages/CadastroAdotante/CadastroFoto";
import { MoonLoader } from "react-spinners";

const CadastroAdotante = () => {
  const methods = useForm();
  const [step, setStep] = useState(0);
  const [loadingStep, setLoadingStep] = useState(false);

  const steps = [
    <CadastroDados key={0} />,
    // <CadastroPerguntas key={0} />,
    <CadastroFoto key={1} />,
  ];

  const nextStep = () => {
    setStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const prevStep = () => {
    setStep((prev) => Math.max(prev - 1, 0));
  };

  const onSubmit = () => {
    methods.unregister(["endereco", "cidade", "estado"])
    console.log("Final Data:", methods.getValues());
    alert("Formulário enviado");
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="w-full justify-center items-center flex flex-col gap-8 overflow-y-auto my-8 font-nunito"
      >
        <h1 className="text-center text-4xl">Cadastro: Adotante</h1>

        {loadingStep ? (
          <div className="flex justify-center items-center">
            <MoonLoader speedMultiplier={1} />
          </div>
        ) : (
          steps[step]
        )}

        <NavigationForm
          prevStep={step > 0 ? prevStep : null}
          nextStep={step < steps.length - 1 ? nextStep : null}
          step={step}
          totalSteps={steps.length - 1}
          handleSubmit={methods.handleSubmit(onSubmit)}
        />
      </form>
    </FormProvider>
  );
};

export default CadastroAdotante;
