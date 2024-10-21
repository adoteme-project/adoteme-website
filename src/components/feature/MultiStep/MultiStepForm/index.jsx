import { Outlet } from "react-router-dom";
import Pipeline from "../Pipeline";

const MultiStepForm = ({ currentStep }) => {
    return (
        <div className="w-full border border-amarelo-select rounded-2xl">
            <Pipeline currentStep={currentStep}/>
            <Outlet/>
        </div>
    )
}

export default MultiStepForm;