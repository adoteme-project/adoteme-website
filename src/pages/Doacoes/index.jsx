import Breadcrumbs from '@/components/common/BreadCrumb/index';
import Banner from '@/components/section/Banner';
import DropDown from "@/components/common/DropDown-ONG/index"
import Doacao from "@/components/section/Donation"
import { useEffect, useState } from 'react';
import SectionGrid from '@/components/section/SectionGrid';

const Doacoes = () => {
  const [ongs, setOngs] = useState([]);

  useEffect(() => {
    fetch("/ongsResumido.json")
      .then((response) => response.json())
      .then((data) => setOngs(data))
      .catch((error) => console.error("Erro json pets", error));
  }, []);


  return (
    <>
    <Banner/>
    <Breadcrumbs tituloCaminho = 'Home' tituloCaminho2='Doações' cor= "#B2DED3" caminho="/doacoes" />
    <DropDown nome="Buscar"></DropDown>
    <SectionGrid data={ongs}></SectionGrid>
    <Doacao/>
    </>
  );
};

export default Doacoes;
