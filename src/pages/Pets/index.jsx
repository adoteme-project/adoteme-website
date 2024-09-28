import Animais from '@/components/section/Animals'
import Banner from '@/components/section/Banner'
import Categorias from '@/components/section/Categories';
import BreadCrumb from '@/components/common/BreadCrumb';
import Doacao from '@/components/section/Donation';
// import AnimaisProximos from '@/components/section/Near-Animals/index'


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
