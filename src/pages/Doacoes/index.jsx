import Breadcrumbs from '@/components/common/BreadCrumb/index';
import Banner from '@/components/section/Banner';
import DropDown from "@/components/common/DropDown-ONG/index"
import Grid from "@/components/layout/Grid"
import Doacao from "@/components/section/Donation"

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
