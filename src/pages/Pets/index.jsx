import Animais from '../../components/Animals'
import Banner from '../../components/Banner'
import Categorias from '../../components/Categories';
import BreadCrumb from '../../components/BreadCrumb';
import Doacao from '../../components/Donation';
import AnimaisProximos from '../../components/Near-Animals/index'


const Pets = () => {
  return (
    <>
     <Banner tamanho='700.25vh'/>
     <BreadCrumb tituloCaminho="Home" tituloCaminho2="Animais" cor="#B2DED3" caminho="/pets" />
     <Categorias titulo="Categorias" tipo="categorias"/>
     <Animais/>
     
     <Doacao/>
  
    </>
  );
};

export default Pets;
