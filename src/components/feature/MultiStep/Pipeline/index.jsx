import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconStep from "../IconStep";
import {
  faArrowRight,
  faDog,
  faFileInvoiceDollar,
  faFilePen,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Pipeline = ({ currentStep, steps }) => {
  const stepsConfig = {
    "abrigo": [
      { icon: <FontAwesomeIcon icon={faDog} />, nameStep: "Imagens do pet" },
      { icon: <FontAwesomeIcon icon={faFilePen} />, nameStep: "Informações" },
      { icon: <FontAwesomeIcon icon={faFileInvoiceDollar} />, nameStep: "Taxa" },
    ],
    "resgatado": [
      { icon: <FontAwesomeIcon icon={faMapMarkerAlt} />, nameStep: "Local" },
      { icon: <FontAwesomeIcon icon={faDog} />, nameStep: "Imagens do pet" },
      { icon: <FontAwesomeIcon icon={faFilePen} />, nameStep: "Informações" },
    ]
  };

  const context = steps[0]?.split('/')[3];

  return (
    <div className="bg-amarelo-select p-8 flex justify-center items-center gap-4 rounded-t-2xl">
      {stepsConfig[context]?.map((step, index) => (
        <React.Fragment key={index}>
          <div>
            <IconStep
              icon={step.icon}
              nameStep={step.nameStep}
              active={currentStep === index + 1}
            />
          </div>
          {index < stepsConfig[context].length - 1 && (
            <span>
              <FontAwesomeIcon icon={faArrowRight} width={75} color="white" />
            </span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Pipeline;