import AnimaisProximos from "../../components/section/Near-Animals/index.jsx";
import Banner from "@/components/section/Banner/index.jsx";
import Doacao from "../../components/section/Donation/index.jsx";
import Carousel from "../../components/section/Categories/index.jsx";

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
