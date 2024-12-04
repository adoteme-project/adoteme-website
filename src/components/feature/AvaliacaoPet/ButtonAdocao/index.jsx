import { getDadosAdotanteRequisicao } from "@/services/ongAPI";

const ButtonAdocao = ({ toggleModal, idReq, idForm, setInfoReq }) => {

    const handleModalAdocao = async () => {
        try {
            const response = await getDadosAdotanteRequisicao(idForm);

            const dataReq = {
                idReq: idReq,
                ...response.data
            }

            setInfoReq(dataReq);

            toggleModal()
        } catch (err) {
            console.error(err)
        }

    };

    return <button onClick={handleModalAdocao} className="text-verde-border font-bold underline cursor-pointer"> Aprovação </button>
};

export default ButtonAdocao;