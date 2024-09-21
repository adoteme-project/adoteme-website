import AnimaisProximos from "../../components/Animais-Proximos/AnimaisProximos.jsx";
import Banner from "../../components/Banner/banner.jsx";
import Doacao from "../../components/Doacao/Doacao.jsx";
import Categorias from "../../components/Categorias/categorias.jsx";

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
