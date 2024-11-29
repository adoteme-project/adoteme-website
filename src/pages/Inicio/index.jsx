import AnimaisProximos from "../../components/section/Near-Animals/index.jsx";
import Doacao from "../../components/section/Donation/index.jsx";
import Carousel from "../../components/section/Categories/index.jsx";
import { useCardContext } from "@/context/CardProvider.jsx";
import { Link } from "react-router-dom";

const Inicio = () => {
  const { sugestoes } = useCardContext();

  const animal = sugestoes.filter((item) => item.tipo === "animal");

  return (
    <>
      <section
        className={`w-full 
        h-[100vh] bg-[url('assets/banner-principal.svg')] 
        bg-cover bg-center bg-no-repeat flex items-center justify-center`}
      >
        <div className="w-11/12">
          <div className="w-[40%]">
            <h3 className="font-nunito text-5xl font-bold text-azul-main mb-10">
            Encontre seu novo melhor amigo
            </h3>
            <Link to="/pets" className="bg-amarelo-select
             text-branco px-4 py-3 rounded-md">
              Adotar agora
            </Link>
          </div>
        </div>
      </section>
      <Doacao />
      <Carousel titulo="Categorias" tipo="categorias" />
      <AnimaisProximos
        items={animal}
        tipoCard="animal"
        titulo="Animais próximos a você"
      />
      <Carousel titulo="Ongs" tipo="ongs" />
    </>
  );
};

export default Inicio;
