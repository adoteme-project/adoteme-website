import Breadcrumbs from '@/components/common/BreadCrumb/index';
import Banner from '@/components/section/Banner';
import DropDown from "@/components/common/DropDown-ONG/index"
import Grid from "@/components/layout/Grid"
import Doacao from "@/components/section/Donation"
import { useEffect, useState } from 'react';
import axios from 'axios';
import useModal from '@/hooks/useModal';

const Doacoes = () => {
  const [data, setData] = useState([]);
  const [isShowing, toggleModal] = useModal(); 

  useEffect(() => {
    const fetchOngs = async () => {
      try {
        const response = await axios.get(`ongs.json`, {
          headers: {
            'Content-type': 'application/json',
          }
        });
        setData(response.data);
      } catch (error) {
        console.log("Erro ao buscar os dados da ong", error);
      }
    };
    fetchOngs();
  }, []);
  
  return (
    <>
      <Banner />
      <Breadcrumbs tituloCaminho='Home' tituloCaminho2='Doações' cor="#B2DED3" caminho="/doacoes" />
      <DropDown nome="Buscar" items={data}>
          <Grid
          items={data}
          onDoarClick={toggleModal}
          />
      </DropDown>
      <Doacao /> {/* Mantenha o componente Doacao sempre renderizado */}
    </>
  );
};

export default Doacoes;
