import Botao from "../Button";
import imagem from '../../assets/logo-apoie.svg';
// import imagem2 from '../../assets/gato-categorias.png';

const Doacao = () => {
    return (
        <section className = "bg-beje w-full h-[86.15vh] flex flex-col items-center justify-center gap-5" >
            <img src={imagem} alt="imagem logo " />
            <h1 className= "font-nunito text-3xl font-bold text-azul-dark ">Apoie uma ONG</h1>
            <Botao color="#FFC55E" tamanho="152px" altura="52" titulo="Ver ongs" textColor="#000000"></Botao>
        </section>
    );
};

export default Doacao;