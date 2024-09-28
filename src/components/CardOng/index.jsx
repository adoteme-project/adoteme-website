import { useState } from "react";
import Botao from "../../components/Button/index";
import Modal from "../Modal";

const Card = (props) => {
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

      <div className="w-[41vw] h-[50.59vh]] bg-beje rounded-lg grid grid-cols-2 gap-4 px-5 py-3 mb-5 ml-11">
        <div>
          <img
            src=""
            alt="Imagem da ong"
            className="w-[19.68vw] h-[40.68vh] rounded-lg "
          />
          <p className="text-center">A 5km de você</p>
        </div>
        <div>
          <h1
            style={{ backgroundColor: `${props.colorBg}` }}
            className="w-full h-[7.52vh] text-left px-2 font-nunito text-2xl flex items-center"
          >
            {props.name}
          </h1>
          <div className="font-nunito flex flex-col gap-3 py-3">
            <h3>Endereço: {props.endereco}</h3>
            <h3>Descrição:{props.descricao}</h3>
          </div>
          <div className="flex justify-center gap-4">
          <Botao
            color="#FFC55E"
            titulo= {props.titulo1}
            tamanho="111"
            altura="40"
            fontSize="15"
            onClick={handleOpenModal}
          ></Botao> 
          <Botao
            color="#FFC55E"
            titulo= {props.titulo}
            tamanho="111"
            altura="40"
            fontSize="15"
            onClick={handleOpenModal}
          ></Botao>
          </div>
        </div>
        <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
      </div>
  );
};

export default Card;
