import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Pipeline from "../Pipeline";
import { FormStateProvider } from "@/context/FormStateProvider";
import { useEffect, useMemo } from "react";
import { ContextPathProvider } from "@/context/PathContextProvider";
import { GeoLocationProvider } from "@/context/GeolocationProvider";


const MultiStepForm = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const stepsMapping = useMemo(() => ({
    "/ong/cadastrar-pet/abrigo": [
      "/ong/cadastrar-pet/abrigo/abrigo-imagens",
      "/ong/cadastrar-pet/abrigo/abrigo-informacoes",
      "/ong/cadastrar-pet/abrigo/abrigo-taxa"
    ],
    "/ong/cadastrar-pet/resgatado": [
      "/ong/cadastrar-pet/resgatado/resgatado-local",
      "/ong/cadastrar-pet/resgatado/resgatado-imagens",
      "/ong/cadastrar-pet/resgatado/resgatado-informacoes"
    ]
  }), []);

  const currentBase = Object.keys(stepsMapping).find(base =>
    location.pathname.startsWith(base)
  );

  const currentStepIndex = currentBase
    ? stepsMapping[currentBase].indexOf(location.pathname) + 1
    : 1;

  useEffect(() => {
    if (currentBase && currentStepIndex === 0) {
      navigate(stepsMapping[currentBase][0]);
    }
  }, [currentBase, currentStepIndex, navigate, stepsMapping]);

  return (
    <FormStateProvider>
      <ContextPathProvider>
        <GeoLocationProvider>
          <div className="w-full border-2 border-amarelo-select rounded-2xl">
            <Pipeline currentStep={currentStepIndex} steps={stepsMapping[currentBase]} />
            <div className="w-full px-5 py-10 flex flex-col gap-6">
              <Outlet />
            </div>
          </div>
        </GeoLocationProvider>
      </ContextPathProvider>
    </FormStateProvider>
  );
};

export default MultiStepForm;