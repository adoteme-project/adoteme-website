import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconStep from "../IconStep";
import {
  faArrowRight,
  faDog,
  faFileInvoiceDollar,
  faFilePen,
} from "@fortawesome/free-solid-svg-icons";

const Pipeline = ({ currentStep }) => {
  const steps = [
    {
      id: 1,
      icon: <FontAwesomeIcon icon={faDog} />,
      nameStep: "Imagens do pet",
    },
    {
      id: 2,
      icon: <FontAwesomeIcon icon={faFilePen} />,
      nameStep: "Informações",
    },
    {
      id: 3,
      icon: <FontAwesomeIcon icon={faFileInvoiceDollar} />,
      nameStep: "Taxa",
    },
  ];

  return (
    <div className="bg-amarelo-select p-8 flex justify-center items-center gap-4 rounded-t-2xl">
      {steps.map((step, index) => {
        return (
          <>
            <div key={index}>
              <IconStep
                icon={step.icon}
                nameStep={step.nameStep}
                active={currentStep == step.id}
              />
            </div>
            {index < steps.length - 1 && (
              <span>
                <FontAwesomeIcon icon={faArrowRight} width={75} color="white" />
              </span>
            )}
          </>
        );
      })}
    </div>
  );
};

export default Pipeline;
