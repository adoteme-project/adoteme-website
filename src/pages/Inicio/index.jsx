import AnimaisProximos from "../../components/section/Animais-Proximos/AnimaisProximos.jsx";
import Banner from "../../components/section/Banner/banner.jsx";
import Doacao from "../../components/section/Doacao/Doacao.jsx";
import Categorias from "../../components/section/Categorias/categorias";

const Inicio = () => {
  return (
    <>
      <h1 className="text-2xl p-8"> Início </h1>
      <Banner/>
      <Doacao/>
      <Categorias/>
      <AnimaisProximos>Animais próximos a você</AnimaisProximos>
      </>
  );
};

export default Inicio;
