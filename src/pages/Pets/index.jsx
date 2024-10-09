import DropDown from '@/components/section/DropDown-Animal'
import Banner from '@/components/section/Banner'
import Categorias from '@/components/section/Categories';
import BreadCrumb from '@/components/common/BreadCrumb';
import Doacao from '@/components/section/Donation';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Grid from '@/components/layout/Grid/index'
import AnimaisProximos from '@/components/section/Near-Animals';
// import AnimaisProximos from '@/components/section/Near-Animals/index'


const Pets = () => {
  
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
     <Banner tamanho='700.25vh'/>
     <BreadCrumb tituloCaminho="Home" tituloCaminho2="Animais" cor="#B2DED3" caminho="/pets" />
     <Categorias titulo="Categorias" tipo="categorias"/>
     <DropDown items={data} titulo="Animais">
       <Grid
       items={data}
       />
     <DropDown/>    
     <Doacao/>
  
    </DropDown>
    </>
  );
};

export default Pets;
