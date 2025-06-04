import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const ModalLoginFa = ({ isOpen, onClose, email, loginWithOtp}) => {
  const [code, setCode] = useState("");

  if (!isOpen) {
    return null;
  }

  const handleValidationOtp = async () => {
    try {
        await loginWithOtp(email, code);
    } catch (err) {
        console.error(err);
    }
  };

  return (
    <div>
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
            Verifique a sua identidade
          </h3>
          <div className="w-full flex justify-center flex-col gap-6 items-center">
            <p className="w-3/4 text-center">
              Código de verificação enviado para o email: {email}
            </p>
            <div>
              <label>Código de verificação</label>
              <input
                id="code"
                name="code"
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full rounded-md border-2 border-[#CCCCCC] px-3 py-2 shadow-md sm:text-sm"
              />
            </div>
            <button
              onClick={() => handleValidationOtp()}
              className="px-6 py-4 rounded-full bg-amarelo text-branco hover:bg-amarelo-select"
            >
              Validar código
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalLoginFa;
