import Botao from "@/components/common/Button";
import Avaliacao from '@/components/feature/Rating';

const Card = (props) => {

    return (
        <div className="w-[41vw] h-[50.59vh]] bg-beje rounded-lg grid grid-cols-2 gap-4 px-5 py-3 mb-5">
            <div className=" h-[41.88vh] flex flex-col justify-center items-center py-4">
                <img src="./" alt="Imagem do animal que está disponível para adoção"
                    className="w-[19.68vw] h-[40.68vh] rounded-lg " />
                <p>A 5km de distância</p>
            </div>
            <div>
                <h1 style={{ backgroundColor: `${props.colorBg}` }} className="w-full h-[7.52vh] text-left px-2 font-roboto text-2xl flex items-center">
                    {props.name}
                </h1>
                <div className = "font-roboto flex flex-col gap-3">
                    <h3 >
                        Idade: {props.idade}
                    </h3>
                    <h3 >
                        Sociável:
                    </h3>
                    <Avaliacao avaliacao={3} cor='#A9B949' />
                    <h3>
                        Brincalhão:
                    </h3>
                    <Avaliacao avaliacao={4} cor='#EC5A49' />
                <Botao textColor="branco" color="azul-main" tamanho="120" altura="40" nome="Ver mais"></Botao>
                </div>

            </div>
        </div>
    );
};

export default Card;
