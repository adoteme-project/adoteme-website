import Breadcrumbs from '../../components/BreadCrumb/index';
import Banner from '../../components/Banner/index'
import DropDown from '../../components/DropDown-ONG/index'
import Grid from '../../components/Grid/index'
import Doacao from '../../components/Donation';

const Doacoes = () => {
  return (
    <>
    <Banner/>
    <Breadcrumbs tituloCaminho = 'Home' tituloCaminho2='Doações' cor= "#B2DED3" caminho="/doacoes" />
    <DropDown nome="Buscar"></DropDown>
    <Grid tipo="ong" titulo="Doar" titulo1="Ver mais"/>
    <Doacao/>
    </>
  );
};

export default Doacoes;
