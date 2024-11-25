import RegisterImage from "@/components/feature/AdotarPet/RegisterImage/index";
import useModal from "@/hooks/useModal";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

const ModalDoacao = () => {
  const [etapaAtual, setEtapaAtual] = useState(1);
  const [isShowing, toggleModalDoacao] = useModal()
  const methods = useForm();
  const { control, handleSubmit } = methods;

  useEffect(() => {
    console.log("isShowing: ", isShowing); // Isso vai mostrar o valor de isShowing sempre que ele mudar
  }, [isShowing]);

  const onSubmit = (data) => {
    console.log(data);
    alert("Imagens enviadas!");
  };  

  const handleCloseModal = ()  =>{
    console.log("Batendo aqui!")
    toggleModalDoacao();
  }

  return (
    <>
      {isShowing &&(
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="fixed inset-0 flex items-center justify-center z-50">
              {/* Overlay escuro */}
              <div
                className="absolute inset-0 bg-black bg-opacity-50"
                onClick={toggleModalDoacao}
              ></div>

              {/* Modal */}
              <div
                className="relative bg-white p-6 rounded-lg shadow-lg z-10 
                           w-full max-w-lg md:max-w-xl lg:max-w-2xl 
                           max-h-[90vh] overflow-y-scroll"
                onClick={(e) => e.stopPropagation()} // Evita fechar ao clicar dentro do modal
              > 
                {/* Botão de fechar */}
                <button
                  onClick={handleCloseModal}
                  className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                  type="button"
                >
                  ✕
                </button>

                {/* Conteúdo do modal */}
                <h1 className="text-xl font-semibold text-center text-[#363E52] mb-4">
                  Faça o upload das imagens do ambiente
                </h1>
                <p className="text-sm text-gray-600 text-center mb-6">
                  Para continuar com a adoção, é necessário fazer o upload das
                  imagens solicitadas abaixo.
                </p>
                <RegisterImage
                  control={control}
                  labels={[
                    "Espaço disponível para o animal",
                    "Fotos de áreas de lazer (jardim, varanda, etc.)",
                    "Fotos de barreiras de proteção (grades, etc.)",
                    "Fotos das portas e janelas",
                    "Fotos de áreas de risco (escadas, piscina, etc.)",
                  ]}
                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition mt-4"
                >
                  Enviar
                </button>
              </div>
            </div>
          </form>
        </FormProvider>
      )}
    </>
  );
};

export default ModalDoacao;
