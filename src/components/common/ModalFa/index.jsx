import { useNotification } from "@/context/NotificationProvider";
import { sendEmailFa } from "@/services/sendEmail";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const MODAL_STATES = {
  EMAIL: 'EMAIL',
  SUCCESS: 'SUCCESS',
};

const ModalHabilitarFa = ({ isOpen, onClose }) => {
  const [modalState, setModalState] = useState(MODAL_STATES.EMAIL);
  const [email, setEmail] = useState('');
  const {error} = useNotification();

  if (!isOpen) {
    return null;
  }

  const handleEmailNotification = async () => {
    try {
      const response = await sendEmailFa(email);

      if(response.status === 200) {
        setModalState(MODAL_STATES.SUCCESS)
      }
      
    } catch (err) {
      console.error(err);
      error("Erro ao enviar notificação por Email");
    }
  };

  const renderModalContent = () => {
    switch (modalState) {
      case MODAL_STATES.EMAIL:
        return (
          <>
            <p className="w-3/4">
              A autenticação em dois fatores adiciona uma camada extra de
              segurança à sua conta. Mesmo que alguém descubra sua senha, só
              poderá acessar com a confirmação enviada ao seu e-mail, protegendo
              seus dados contra acessos não autorizados.
            </p>
            <div>
              <label>Email de confirmação</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-md border-2 border-[#CCCCCC] px-3 py-2 shadow-md sm:text-sm"
              />
            </div>
            <button
              onClick={() => handleEmailNotification()}
              className="px-6 py-4 rounded-full bg-amarelo text-branco hover:bg-amarelo-select"
            >
              Confirmar email
            </button>
          </>
        );
      case MODAL_STATES.SUCCESS:
        return (
          <>
            <p className="text-green-600 font-semibold text-center">
              Autenticação em dois fatores habilitada com sucesso!
            </p>
            <button
              onClick={onClose}
              className="mt-4 px-6 py-4 rounded-full bg-amarelo text-branco hover:bg-amarelo-select"
            >
              Fechar
            </button>
          </>
        );
  
      default:
        return null;
    }
  };

  return (
    <div className="z-20 fixed inset-0 flex items-center justify-center">
      <div className="fixed inset-0 bg-preto opacity-50 z-10"></div>
      <div className="w-[50%] p-10 bg-branco rounded-lg shadow-lg relative z-20">
        <div className="w-full flex justify-end">
          <FontAwesomeIcon
            icon={faClose}
            onClick={onClose}
            className="cursor-pointer text-lg text-end"
          />
        </div>
        <h3 className="font-nunito font-medium text-2xl my-8 text-center">
          Autentificação por dois fatores
        </h3>
        <div className="w-full flex justify-center flex-col gap-6 items-center">
          {renderModalContent()}
        </div>
      </div>
    </div>
  );
};

export default ModalHabilitarFa;
