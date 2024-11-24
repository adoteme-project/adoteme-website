import { getDadosAdotanteRequisicao } from "@/services/ongAPI";

const ButtonAvaliacao = ({ toggleModal, idForm, setInfoReq }) => {

    const handleModalAvaliacao = async () => {
        try {
            const response = await getDadosAdotanteRequisicao(idForm);
            setInfoReq(response.data);
            toggleModal();
        } catch (error) {
            console.error('Error fetching adopter data:', error);
        }
    };

    return <button onClick={handleModalAvaliacao} className="text-azul-main font-bold underline cursor-pointer"> Avaliar </button>;
};

export default ButtonAvaliacao;