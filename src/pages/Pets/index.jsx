import Animais from '../../components/section/Animals/animais'
import Banner from '../../components/section/Banner/banner'
import Categorias from '../../components/section/Categorias/categorias';
import BreadCrumb from '../../components/common/BreadCrumb/breadCrumb';


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
