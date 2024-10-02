import Breadcrumbs from '@/components/common/BreadCrumb/index';
import Banner from '@/components/section/Banner';
import DropDown from "@/components/common/DropDown-ONG/index"
import Grid from "@/components/layout/Grid"
import Doacao from "@/components/section/Donation"
import Modal from "@/components/common/Modal";
import { useState } from 'react';


const Doacoes = () => {

  const [isModalOpen, setModalOpen] = useState(false);
  
// Abre o modal
const handleOpenModal = () => {
  setModalOpen(true);
};

// Fecha o modal
const handleCloseModal = () => {
  setModalOpen(false);
};

  return (
    <>
    <Banner/>
    <Breadcrumbs tituloCaminho = 'Home' tituloCaminho2='Doações' cor= "#B2DED3" caminho="/doacoes" />
    <DropDown nome="Buscar"></DropDown>
    <Grid 
      tipo="ong"
      titulo="Doar"
      titulo1="Ver mais"
      onDoarClick={handleOpenModal}
    />
    <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    <Doacao/>
    </>
  );
};

export default Doacoes;
