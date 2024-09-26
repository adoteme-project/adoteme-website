import { useState } from "react";
import NavigationForm from "../../components/common/NavigationForm";
import stepsData from "@/mocks/stepFormRegister";
import FormGroup from "@/components/common/FormGroup";

const CadastroAdotante = () => {
  const [step, setStep] = useState(1);
  const totalSteps = stepsData.length;

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = () => {
    alert("Registro enviado");
  };

  const renderStep = (stepsData, step) => {
    const currentStepData = stepsData.find((s) => s.step === step);
  
    return currentStepData.formGroups.map((formGroup, index) => (
      <FormGroup
        key={index}
        title={formGroup.title}
        column={formGroup.column}
        fields={formGroup.fields}
        radioControl={formGroup.radioControl}
      />
    ));
  };

  return (
    <div className="w-full justify-center items-center flex flex-col gap-8 overflow-y-auto my-8 font-nunito">
      <h1 className="text-center text-4xl">Cadastro: Adotante</h1>

      {renderStep (stepsData, step)}

      <NavigationForm
        prevStep={step > 1 ? prevStep : null}
        nextStep={step < totalSteps ? nextStep : handleSubmit}
        step={step}
        totalSteps={totalSteps}
      />
    </div>
  );
};

export default CadastroAdotante;
