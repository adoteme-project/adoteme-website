import TableOng from "@/components/common/TableOng";
import RatingInput from "@/components/feature/InputsType/RatingInput";
import { aplicacoesPetColumns } from "@/mocks/tableColumns";
import ModalAvaliacao from "@/components/feature/AvaliacaoPet/ModalAvaliacao";
import useModal from "@/hooks/useModal";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { getPetDetalhesOng } from "@/services/ongAPI";
import { formatarHorarioPassado } from "@/utils/formatMessageTime";
import ButtonAvaliacao from "@/components/feature/AvaliacaoPet/ButtonAvaliacao";
import OngAuthContext from "@/context/AuthOngProvider";


const OngPetDetalhes = () => {
    const [isShowingModal, toggleModal] = useModal();
    const [infoReq, setInfoReq] = useState({});
    const [infoPet, setInfoPet] = useState({});

    const { authOng } = useContext(OngAuthContext);

    let params = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getPetDetalhesOng(params.id);

                const timeFormat = response.data.requisicoes.map((req) => ({
                    ...req,
                    dataRequisicao: formatarHorarioPassado(req.dataRequisicao),
                }));

                const dataFormat = {
                    ...response.data,
                    requisicoes: timeFormat
                }

                console.log(dataFormat);

                setInfoPet(dataFormat);

            } catch (error) {
                if (error.name === "AbortError") return;
                console.error("Erro ao buscar os dados da API", error);
            }
        };

        fetchData();
    }, [params.id])

    return (
        <>
            <h2 className="text-3xl text-azul-main font-bold"> Detalhes do Pet </h2>
            <div className="border-amarelo-select border-2 flex flex-col rounded-2xl p-8">
                <div className="w-full grid grid-cols-5 gap-10 justify-between">
                    <img src={infoPet.fotoPerfil} className="w-full h-72 col-span-2 rounded-2xl" />

                    <div className="bg-beje rounded-xl col-span-3 p-6">
                        <h3 className="font-medium text-xl mb-4"> Descrição </h3>
                        <p>{infoPet.descricao}</p>
                    </div>

                    <div className="col-span-2 border-2 border-amarelo-select rounded-2xl p-4">
                        <h4 className="font-medium text-xl mb-4"> Detalhes </h4>
                        <ul className="grid grid-cols-2 gap-1">
                            <div>
                                <ul className="flex flex-col gap-1">
                                    <li><span className="font-semibold">ID:</span> {infoPet.id}</li>
                                    <li><span className="font-semibold">Tipo:</span> {infoPet.especie}</li>
                                    <li><span className="font-semibold">Sexo:</span> {infoPet.sexo}</li>
                                    <li><span className="font-semibold">Tempo no abrigo:</span> {formatarHorarioPassado(infoPet.dataAbrigo)}</li>
                                </ul>
                            </div>
                            <div>
                                <ul className="flex flex-col gap-1">
                                    <li><span className="font-semibold">Raça:</span> {infoPet.raca}</li>
                                    <li><span className="font-semibold">Taxa de adoção:</span> {infoPet.taxaAdocao}R$</li>
                                    <li><span className="font-semibold">Idade:</span> {infoPet.idade}</li>
                                    <li><span className="font-semibold">Tamanho:</span> {infoPet.tamanho}</li>
                                </ul>
                            </div>
                        </ul>
                    </div>

                    <div className="col-span-3 h-80 max-h-80 ">
                        <TableOng
                            rows={infoPet.requisicoes}
                            columns={aplicacoesPetColumns.map((col) =>
                                col.field === 'actions'
                                    ? {
                                        ...col, renderCell: (params) =>
                                            params.row.status === 'Descartado' ? null : (
                                                <ButtonAvaliacao
                                                    toggleModal={toggleModal}
                                                    idForm={params.row.formularioId}
                                                    setInfoReq={setInfoReq}
                                                    idReq={params.row.id}
                                                    idUser={authOng.userData.id}
                                                />
                                            ),
                                    }
                                    : col
                            )}
                            height={300}
                        />
                    </div>

                </div>
                <div className="flex flex-col gap-4 mt-4">
                    <h1 className="text-center text-azul-main font-nunito text-3xl font-semibold"> Personalidade </h1>
                    <fieldset className="w-full flex justify-around" disabled={true}>
                        <RatingInput color={'#FFBB1C'} defaultValue={infoPet.personalidade?.energia} name="energia" title="Energia" />
                        <RatingInput color={'#FFBB1C'} defaultValue={infoPet.personalidade?.sociabilidade} name="sociabilidade" title="Sociável" />
                        <RatingInput color={'#FFBB1C'} defaultValue={infoPet.personalidade?.obediente} name="obediente" title="Obediente" />
                        <RatingInput color={'#FFBB1C'} defaultValue={infoPet.personalidade?.inteligencia} name="inteligencia" title="Inteligente" />
                        <RatingInput color={'#FFBB1C'} defaultValue={infoPet.personalidade?.tolerante} name="tolerante" title="Tolerante" />
                        <RatingInput color={'#FFBB1C'} defaultValue={infoPet.personalidade?.territorial} name="territorial" title="Territorial" />
                    </fieldset>
                </div>
            </div>
            <ModalAvaliacao show={isShowingModal} onClose={toggleModal} infoAdocao={infoReq} />
        </>
    )
}


export default OngPetDetalhes;