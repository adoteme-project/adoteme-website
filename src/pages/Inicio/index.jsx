import AnimaisProximos from "../../components/section/Near-Animals/index.jsx";
import Banner from "@/components/section/Banner/index.jsx";
import Doacao from "../../components/section/Donation/index.jsx";
import Carousel from "../../components/section/Categories/index.jsx";
import { useEffect, useState } from "react";
import axios from "axios";

const Inicio = () => {
  const[data,setData] = useState([]);

  useEffect(() => {
    const fetchOngs = async () => {
      try {
        const response = await axios.get(`petCard.json`, {
          headers: {
            'Content-type': 'application/json',
          }
        });
        // console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.log("Erro ao buscar os dados dos cards", error);
      }
    };
    fetchOngs();
  }, []);

  return (
    <>
      <Banner/>
      <Doacao/>
      <Carousel titulo="Categorias" tipo= "categorias"/>
      <AnimaisProximos items={data} titulo="Animais próximos a você"></AnimaisProximos>
      <Carousel titulo="Ongs" tipo="ongs"/>
      </>
  );
};

export default Inicio;
