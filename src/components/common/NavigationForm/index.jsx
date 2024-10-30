const NavigationForm = ({ prevStep, nextStep, step, totalSteps, handleSubmit }) => {
  const isLastStep = step === totalSteps;

  const handleNextClick = () => {
    if (isLastStep) {
      handleSubmit();
    } else {
      nextStep();
    }
  };

  return (
    <div className={`flex w-2/3 mt-4 ${step === 0 ? "justify-end" : "justify-between"} space-x-4`}>
      {prevStep && (
        <button
          type="button"
          className="bg-amarelo px-4 py-3 rounded-md text-branco"
          onClick={prevStep}
        >
          Voltar
        </button>
      )}

      <button
        type="button"
        className={`px-4 py-3 rounded-md text-branco ${isLastStep ? "bg-verde" : "bg-amarelo"}`}
        onClick={handleNextClick}
      >
        {isLastStep ? "Enviar" : "Avançar"}
      </button>
    </div>
  );
};

export default NavigationForm;
