import { getDadosAdotanteRequisicao } from "@/services/ongAPI";
import { iniciarAvaliacao } from "@/services/onguserAPI";

const ButtonAvaliacao = ({ toggleModal, idReq, idForm, idUser, setInfoReq }) => {

    const handleModalAvaliacao = async () => {
        try {
            const response = await getDadosAdotanteRequisicao(idForm);
            iniciarAvaliacao(idUser, idReq)

            const dataReq = {
                idReq: idReq,
                ...response.data
            }

            setInfoReq(dataReq);
            toggleModal();
        } catch (error) {
            console.error('Error fetching adopter data:', error);
        }
    };

    return <button onClick={handleModalAvaliacao} className="text-azul-main font-bold underline cursor-pointer"> Avaliar </button>;
};

export default ButtonAvaliacao;