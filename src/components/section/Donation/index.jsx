import Botao from "@/components/common/Button";
import imagem from "@/assets/logo-apoie.svg";
import { Link } from "react-router-dom";
// import imagem2 from '../../assets/gato-categorias.png';

const Doacao = () => {
      
    return (
        <section className="bg-beje w-full h-[86.15vh] flex flex-col items-center justify-center gap-5" >
            <img src={imagem} alt="imagem logo " />
            <h1 className= "font-nunito text-3xl font-bold text-azul-dark ">Apoie uma ONG</h1>
            <Link 
                to="/ongs"
                onClick={() => window.scrollTo(0,0)}
            >
                <Botao 
                    color="#FFC55E"
                    tamanho="152px"
                    altura="52"
                    titulo="Ver ongs"
                    textColor="#000000"
                />
            </Link>
        </section>
    );
};

export default Doacao;