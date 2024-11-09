import { Outlet, useLocation } from "react-router-dom";
import Pipeline from "../Pipeline";
import { FormStateProvider } from "@/context/FormStateProvider";

const MultiStepForm = () => {
  const location = useLocation();

  const steps = {
    "/ong/cadastrar-pet/abrigo/abrigo-imagens": 1,
    "/ong/cadastrar-pet/abrigo/abrigo-informacoes": 2,
    "/ong/cadastrar-pet/abrigo/abrigo-taxa": 3,
  };
  const currentStep = steps[location.pathname] || 1;

  return (
    <FormStateProvider>
      <div className="w-full border-2 border-amarelo-select rounded-2xl">
        <Pipeline currentStep={currentStep} />
        <div className="w-full px-5 py-10 flex flex-col gap-6">
          <Outlet />
        </div>
      </div>
    </FormStateProvider>
  );
};

export default MultiStepForm;