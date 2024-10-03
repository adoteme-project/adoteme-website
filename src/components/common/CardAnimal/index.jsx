import { useCardContext } from '@/contextCard/index';
import Avaliacao from '@/components/feature/Rating';
import { Link } from "react-router-dom";
import Botao from "@/components/common/Button";

const Card = () => {
    const { sugestoes } = useCardContext();

    return (
        <>
            {sugestoes.length > 0 ? (
                sugestoes.map((animal, index) => (
                    <div key={index} className="w-[41vw] h-[50.59vh]] bg-beje rounded-lg grid grid-cols-2 gap-4 px-5 py-3 mb-5">
                        <div className=" h-[41.88vh] flex flex-col justify-center items-center py-4">
                            <img src={animal.imagemUrl} alt={`Imagem do animal ${animal.nome}`} className="w-[19.68vw] h-[40.68vh] rounded-lg " />
                            <p>{animal.distancia} km de distância</p>
                        </div>
                        <div>
                            <h1 style={{ backgroundColor: `${animal.colorBg}` }} className="w-full h-[7.52vh] text-left px-2 font-roboto text-2xl flex items-center">
                                {animal.nome}
                            </h1>
                            <div className="font-roboto flex flex-col gap-3">
                                <h3>Idade: {animal.idade}</h3>
                                <h3>Sociável:</h3>
                                <Avaliacao avaliacao={animal.sociabilidade} cor='#A9B949' />
                                <h3>Brincalhão:</h3>
                                <Avaliacao avaliacao={animal.brincalhao} cor='#EC5A49' />
                                <Link to={`/pagina-pet/${animal.id}`}>
                                    <Botao textColor="#fff" color="#4C8EB5" tamanho="120" altura="40" titulo="Ver mais" />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p>Carregando dados...</p>
            )}
        </>
    );
};

export default Card;
