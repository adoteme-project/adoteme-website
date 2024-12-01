import { useNotification } from "@/context/NotificationProvider";
import { confirmarAdocao } from "@/services/onguserAPI";

const ModalAdocao = ({ show, onClose, infoConfirmacao }) => {
    const { promise, error } = useNotification();

    if (!show) {
        return null;
    }

    const handleAprovarAdocao = () => {
        try {
            promise(confirmarAdocao(infoConfirmacao.idReq).then(setTimeout(() => { window.location.reload() }, 5000)), {
                pending: "Confirmando Adoção...",
                success: " realizado com sucesso!",
                error: "Erro ao aprovar adoção! Por favor, tente novamente.",
            })
        } catch (err) {
            console.error(err);
            error("Não foi possível realizar a aprovação tente novamente mais tarde")
        } finally {
            onClose();
        }
    }


    return (
        <div className="fixed inset-0 z-20 flex items-center justify-center">
            <div className="fixed inset-0 bg-preto opacity-50 z-10"></div>

            <div className="relative bg-branco shadow-2xl rounded-3xl p-10 z-20 w-[40%]">
                <h3 className="text-xl text-azul-main font-semibold text-center">Confirmar Adoção ?</h3>
                <p className="text-center my-8"> Deseja confimar adoção do pet para o adotente {infoConfirmacao.nome} ? </p>
                <div className="w-full flex justify-center gap-10">
                <button onClick={onClose} className="bg-amarelo px-16 py-3 rounded-md text-branco"> Cancelar </button>
                <button onClick={handleAprovarAdocao} className="bg-verde-border px-16 py-3 rounded-md text-branco"> Confirmar Adoção </button>
                </div>
                
            </div>
        </div>
    );
};

export default ModalAdocao;