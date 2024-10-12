import useModal from "@/hooks/useModal";
import Botao from "../Button/index";
import Modal from "../Modal";
import { useEffect, useState } from "react";
import GridLayout from "@/components/layout/Grid";

const DropDown = ({ items = [] }) => {
  const [isShowing, toggleModal] = useModal(); // Use o hook para controle do modal
  const [search, setSearch] = useState("");
  const [filteredOngs, setFilteredOngs] = useState(items);

  useEffect(() => {
    setFilteredOngs(items);
  }, [items]);

  const handleInputChange = (e) => {
    setSearch(e.target.value); // Atualiza o valor de search
  };

  const handleFilteredItems = () => {
    const filteredItems = items.filter((ong) =>
      ong.nome.toLowerCase().includes(search.toLowerCase()) // Filtra os itens com base no search
    );

    setFilteredOngs(filteredItems); // Atualiza os itens filtrados
  };

  return (
    <>
      <section className="w-full flex justify-between py-10 px-14">
        <div className="flex justify-start">
          <Botao
            color="#4C8EB5"
            tamanho="223"
            altura="52"
            titulo="Ongs mais próximas"
            textColor="#FDF6F0"
          />
        </div>
        <div className="flex items-center justify-end gap-10">
          <input
            type="text"
            className="border rounded-lg h-[48px] w-[253px] text-xs pl-2"
            placeholder="Buscar"
            onChange={handleInputChange}
          />
          <Botao
            color="#C6D668"
            tamanho="223"
            altura="52"
            titulo="Buscar"
            textColor="#000000"
            onClick={handleFilteredItems}
          />
        </div>
      </section>
      <div>
        <GridLayout
          items={filteredOngs}
          toggle={toggleModal}
          tipoCard="ong"
        />
        {isShowing && (
          <Modal isOpen={isShowing} onClose={toggleModal} />
        )}
      </div>
    </>
  );
};

export default DropDown;
