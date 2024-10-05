import Botao from "@/components/common/Button";
import Favorite from "@/components/feature/Favorite"
import { Link } from "react-router-dom";

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
                    {props.nome}
                </h1>
                <div className="font-roboto flex flex-col gap-3">
                    <div className="flex flex-col gap-4 bg-vermelho  py-4 ">
                    <h3 >
                        Idade:
                    </h3>
                    <h3 >
                        Tamanho:
                    </h3>
                    <h3>
                        Espécie:
                    </h3>
                    <h3></h3>

                    </div>                 
                        <div className="flex items-center justify-between py-4">
                        <Link to={"/pagina-pet"}>
                            <Botao textColor="#fff" color="#4C8EB5" tamanho="120" altura="40" titulo="Ver mais" />
                        </Link>
                        
                            <Favorite/>
                        </div>

                </div>

            </div>
        </div>
    );
};

export default Card;
