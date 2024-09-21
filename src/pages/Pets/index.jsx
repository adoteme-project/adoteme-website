import Animais from '../../components/Animals/animais'
import Banner from '../../components/Banner/banner'
import Categorias from '../../components/Categorias/categorias';
import BreadCrumb from '../../components/BreadCrumb/breadCrumb';


const Pets = () => {
  return (
    <>
     <Banner tamanho='700.25vh'/>
     <BreadCrumb caminho="Home" caminho2="Animais" cor="#B2DED3"/>
     <Categorias/>
     <Animais/>
  
    </>
  );
};

export default Pets;
