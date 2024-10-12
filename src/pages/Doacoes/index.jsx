import Breadcrumbs from '@/components/common/BreadCrumb/index';
import Banner from '@/components/section/Banner';
import DropDown from "@/components/common/DropDown-ONG/index"
import Doacao from "@/components/section/Donation"
import useModal from '@/hooks/useModal';
import { useCardContext } from '@/contextCard';

const Doacoes = () => {
  const [isShowing, toggleModal] = useModal(); // Precisa passar isso para o card da ong par abrir o mdoal
  const { sugestoes } = useCardContext();

  const ongs = sugestoes.filter(item => item.tipo === 'ong');

  return (
    <>
      <Banner />
      <Breadcrumbs tituloCaminho='Home' tituloCaminho2='Doações' cor="#B2DED3" caminho="/doacoes" />
      <DropDown nome="Buscar" items={ongs} tipoCard = "ong"/>
      <Doacao />
    </>
  );
};

export default Doacoes;
