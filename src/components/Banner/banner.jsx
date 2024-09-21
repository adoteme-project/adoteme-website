import imagemBanner from '../../assets/imagem-tela-animais.svg'

const Banner = (props) => {
    return (
     <section className= {`h-[${props.tamanho}]`}>
         <img src={imagemBanner} alt="" />      
     </section>
    );
};

export default Banner;