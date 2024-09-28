import AnimaisProximos from "../../components/Near-Animals/index.jsx";
import Banner from "../../components/Banner/index.jsx";
import Doacao from "../../components/Donation/index.jsx";
import Carousel from "../../components/Categories/index.jsx";

const Inicio = () => {
  return (
    <>
      <Banner/>
      <Doacao/>
      <Carousel titulo="Categorias" tipo= "categorias"/>
      <AnimaisProximos tipo="animal">Animais próximos a você</AnimaisProximos>
      <Carousel titulo="Ongs" tipo="ongs"/>
      </>
  );
};

export default Inicio;
