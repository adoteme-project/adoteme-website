import Card from "@/components/common/CardAnimal";
import CardOng from "@/components/common/CardOng/index"
import Modal from "@/components/common/Modal";
import { useState } from "react";
import { useCardContext } from '@/contextCard/index';

const GridAnimais = (props) => {
  const { sugestoes } = useCardContext();
  const cores = ["#FFC55E", "#A9B949", "#B2DED3", "#EC5A49"];
  const [isModalOpen, setModalOpen] = useState(false);

  // Abre o modal
  const handleOpenModal = () => setModalOpen(true);

  // Fecha o modal
  const handleCloseModal = () => setModalOpen(false);

  const ongData = [
    {
      key: "1",
      nome: "Amor Animal",
      descricao: "ONG dedicada ao resgate e adoção de animais abandonados, focando em cães e gatos em situação de risco.",
      endereco: "Rua das Flores, 123, São Paulo, SP"
    },
    {
      key: "2",
      nome: "Vida de Patas",
      descricao: "Organização sem fins lucrativos que promove o bem-estar animal e a adoção responsável de pets.",
      endereco: "Avenida Central, 456, Rio de Janeiro, RJ"
    },
    {
      key: "3",
      nome: "Lar dos Peludos",
      descricao: "Grupo de voluntários que acolhe animais de rua, oferecendo tratamento veterinário e lares temporários.",
      endereco: "Praça da Liberdade, 789, Belo Horizonte, MG"
    },
    {
      key: "4",
      nome: "Patas e Focinhos",
      descricao: "ONG voltada para o resgate de animais abandonados, com programas de adoção e conscientização sobre maus-tratos.",
      endereco: "Rua Verde, 321, Porto Alegre, RS"
    }
  ];

  if (props.tipo === "animal") {
    return (
      <section className="grid grid-cols-2 gap-10">
        {sugestoes.length > 0 ? (
          sugestoes.map((animal, index) => (
            <Card key={index} animal={animal} />
          ))
        ) : (
          <p>Carregando dados...</p>
        )}
      </section>
    );
  }

  if (props.tipo === "ong") {
    return (
      <section className="grid grid-cols-2 gap-10">
        {ongData.map((ong, index) => (
          <CardOng
            key={ong.key}
            name={ong.nome}
            colorBg={cores[index % cores.length]}
            descricao={ong.descricao}
            endereco={ong.endereco}
            titulo={props.titulo}
            titulo1={props.titulo1}
          />
        ))}
        <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
      </section>
    );
  }

  return null;
};

export default GridAnimais;
