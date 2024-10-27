import AnimaisProximos from "../../components/section/Near-Animals/index.jsx";
import Banner from "@/components/section/Banner/index.jsx";
import Doacao from "../../components/section/Donation/index.jsx";
import Carousel from "../../components/section/Categories/index.jsx";
import { useCardContext } from "@/context/CardProvider.jsx";

const Inicio = () => {
  const {sugestoes } = useCardContext();

  const animal = sugestoes.filter(item => item.tipo === 'animal');

  return (
    <>
      <Banner/>
      <Doacao/>
      <Carousel titulo="Categorias" tipo="categorias"/>
      <AnimaisProximos items={animal} tipoCard="animal" titulo="Animais próximos a você"></AnimaisProximos>
      <Carousel titulo="Ongs" tipo="ongs"/>
    </>
  );
};

export default Inicio;
