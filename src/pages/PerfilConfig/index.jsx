import ModalFa from "@/components/common/ModalFa";
import useModal from "@/hooks/useModal";

const PerfilConfig = () => {
  const [isShowing, toggleModal] = useModal();

  return (
    <div className="px-12 py-8">
      <h2 className="font-nunito font-medium text-4xl mb-8"> Configurações </h2>
      <div>
        <h3 className="font-nunito font-medium text-2xl mb-2"> Segurança </h3>
        <hr className="w-1/3 border-amarelo-select mb-8"/>
        <button
          className=" px-6 py-4 leading-tight transition-all 
                    rounded-full outline-none text-center select-none whitespace-nowrap 
                    bg-amarelo text-branco hover:bg-amarelo-select focus:bg-opacity-80"
          onClick={toggleModal}
        >
          Habilitar 2FA
        </button>
      </div>
      <ModalFa isOpen={isShowing} onClose={toggleModal} />
    </div>
  );
};

export default PerfilConfig;
