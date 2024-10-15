import imagemBanner from '../../../assets/banner_principal.svg';

const Banner = (props) => {
    return (
        <section className={`h-[${props.tamanho}] w-full overflow-hidden`}>
            <img src={imagemBanner} alt="" className="w-full h-auto" />
        </section>
    );
};

export default Banner;