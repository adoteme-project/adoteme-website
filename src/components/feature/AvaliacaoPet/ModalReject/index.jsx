import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ModalRejectAvaliacao = ({ show, onCloseModal }) => {
    if (!show) return null;

    const handleReject = () => {
        console.log("Reijeitado");
        onCloseModal();
    }

    return (
        <>
            <div className="fixed inset-0 bg-preto opacity-50 z-10"></div>
            <div className="fixed inset-x-1/4 top-1/4 z-30 bg-branco rounded-xl py-8 px-10 shadow-lg w-[50%] ">
                <div className="flex justify-end w-full">
                    <FontAwesomeIcon icon={faClose} onClick={onCloseModal} className="cursor-pointer text-lg text-end" />
                </div>
                <div className="flex flex-col items-center w-full">
                    <h3 className="text-xl text-azul-main font-semibold text-center">Motivo de rejeição</h3>
                    <p className="text-sm text-center my-4">Selecione o motivo da rejeição abaixo</p>
                    <select className="w-[70%] my-8 rounded-md border-amarelo border-2 px-3 py-2">
                        <option>Incompatibilidade de perfil</option>
                        <option>Negligência em relação à segurança</option>
                        <option>Falta de autorização de outros moradores</option>
                        <option>Ambiente inadequado</option>
                    </select>
                    <button
                        className="bg-amarelo px-16 py-3 rounded-md text-branco w-[30%]"
                        onClick={handleReject}>
                        Rejeitar
                    </button>
                </div>
            </div>
        </>

    );
};

export default ModalRejectAvaliacao;