import TableOng from "@/components/common/TableOng";
import RatingInput from "@/components/feature/InputsType/RatingInput";
import { aplicacoesPetColumns } from "@/mocks/tableColumns";
import petImage from '@/assets/pet_perdido.png';

const dataAplicacaoPet = [
    {
        id: 1,
        adotanteNome: 'Rodrigo',
        tempoEnvio: '5 min atrás',
        adotanteEmail: 'rodrigo@gmail.com',
        situacao: 'Nova'
    }
]

const OngPetDetalhes = () => {
    return (
        <>
            <h2 className="text-3xl text-azul-main font-bold"> Detalhes do Pet </h2>
            <div className="border-amarelo-select border-2 flex flex-col rounded-2xl p-8">
                <div className="w-full grid grid-cols-5 gap-10 justify-between">
                    <img src={petImage} className="w-full h-72 col-span-2"/>

                    <div className="bg-beje rounded-xl col-span-3 p-6">
                        <h3 className="font-medium text-xl mb-4"> Descrição </h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore molestias nisi possimus fugit, quisquam natus inventore perferendis impedit totam eligendi numquam placeat quidem neque recusandae saepe unde corrupti qui eaque.</p>
                    </div>

                    <div className="col-span-2">
                        <h4 className="font-medium text-xl mb-4"> Detalhes </h4>
                        <div className="grid grid-cols-2 gap-2 w-full">
                            <span>ID: 1001</span>
                            <span>Tipo: Cachorro</span>
                            <span>Gênero: Masculino</span>
                            <span>Tempo no abrigo: 3 meses</span>
                            <span>Raça: Vira-Lata</span>
                            <span>Taxa de adoção: 0R$</span>
                            <span>Idade: 4</span>
                            <span>Tamanho: Médio</span>
                        </div>
                    </div>

                    <div className="col-span-3 h-80 max-h-80 ">
                        <TableOng rows={dataAplicacaoPet} columns={aplicacoesPetColumns} height={300} />
                    </div>

                </div>
                <div className="flex flex-col gap-4 mt-4">
                    <h1 className="text-center text-azul-main font-nunito text-3xl font-semibold"> Personalidade </h1>
                    <div className="w-full flex justify-around">
                        <RatingInput color={'#FFBB1C'} disabled={false} name="sociavel" title="Sociável" />
                        <RatingInput color={'#FFBB1C'} disabled={false} name="obediente" title="Obediente" />
                        <RatingInput color={'#FFBB1C'} disabled={false} name="inteligente" title="Inteligente" />
                        <RatingInput color={'#FFBB1C'} disabled={false} name="tolerante" title="Tolerante" />
                        <RatingInput color={'#FFBB1C'} disabled={false} name="territorial" title="Territorial" />
                    </div>
                </div>
            </div>
        </>
    )
}


export default OngPetDetalhes;