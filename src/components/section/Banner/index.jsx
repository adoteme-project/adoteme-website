import imagemBanner from '../../../assets/banner_principal.svg'

const Banner = (props) => {
    return (
     <section className= {`h-[${props.tamanho}] max-h-[718px]`}>
         <img src={imagemBanner} alt="" />      
     </section>
    );
};

export default Banner;