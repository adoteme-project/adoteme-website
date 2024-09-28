const NavigationForm = ({ prevStep, nextStep, step, totalSteps }) => {
    const isLastStep = step === totalSteps;
    const bothButtonsVisible = prevStep && nextStep;
  
    return (
      <div className={`flex w-2/3 mt-4 ${bothButtonsVisible ? "justify-between" : "justify-end"} space-x-4`}>
        {prevStep && (
          <button
            className="bg-amarelo px-4 py-3 rounded-md"
            onClick={prevStep}
          >
            Voltar
          </button>
        )}
  
        {nextStep && (
          <button
            className={`px-4 py-3 rounded-md ${isLastStep ? "bg-verde" : "bg-amarelo"}`}
            onClick={nextStep}
          >
            {isLastStep ? "Enviar" : "Avançar"}
          </button>
        )}
      </div>
    );
  };
  
  export default NavigationForm;
  