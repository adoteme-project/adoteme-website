import Banner from "@/components/section/Banner/index.jsx";
import Doacao from "../../components/section/Donation/index.jsx";
import Carousel from "../../components/section/Categories/index.jsx";
import SectionGrid from "@/components/section/SectionGrid/";
import { useEffect, useState } from "react";

const Inicio = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetch("/petsResumido.json")
      .then((response) => response.json())
      .then((data) => setPets(data))
      .catch((error) => console.error("Erro json pets", error));
  }, []);

  return (
    <>
      <Banner />
      <Doacao />
      <Carousel titulo="Categorias" tipo="categorias" />
      <SectionGrid data={pets}>Animais próximos a você</SectionGrid>
      <Carousel titulo="Ongs" tipo="ongs" />
    </>
  );
};

export default Inicio;
