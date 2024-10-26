import { Outlet } from "react-router-dom";
import Pipeline from "../Pipeline";

const MultiStepForm = ({ currentStep }) => {
  return (
    <div className="w-full border border-amarelo-select rounded-2xl">
      <Pipeline currentStep={currentStep} />
      <div className="w-full px-5 py-10 flex flex-col gap-6">
        <Outlet />
      </div>
    </div>
  );
};

export default MultiStepForm;
