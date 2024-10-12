import DropDown from '@/components/section/DropDown-Animal'
import Banner from '@/components/section/Banner'
import Categorias from '@/components/section/Categories';
import BreadCrumb from '@/components/common/BreadCrumb';
import Doacao from '@/components/section/Donation';
import Grid from '@/components/layout/Grid/index'
import { useCardContext } from '@/contextCard';
// import AnimaisProximos from '@/components/section/Near-Animals/index'


const Pets = () => {
  
  const {context} = useCardContext();

  const validItems = context.filter(item => item.tipo === 'animal');

  return (
    <>
     <Banner tamanho='700.25vh'/>
     <BreadCrumb tituloCaminho="Home" tituloCaminho2="Animais" cor="#B2DED3" caminho="/pets" />
     <Categorias titulo="Categorias" tipo="categorias"/>
     <DropDown items={validItems} titulo="Animais">
       <Grid
       items={validItems}
       />
     <DropDown/>    
     <Doacao/>
  
    </DropDown>
    </>
  );
};

export default Pets;
