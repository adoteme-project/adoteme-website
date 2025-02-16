import Banner from "@/components/section/Banner";
import BreadCrumb from "@/components/common/BreadCrumb";
import Doacao from "@/components/section/Donation";
import { useCardContext } from "@/context/CardProvider";
import { useEffect, useState } from "react";
import GridLayout from "@/components/layout/Grid";
import BannerImage from "@/assets/banner-pets.svg";
import Pagination from "@/components/common/Pagination";
import Botao from "@/components/common/Button";
import { SearchInput } from "@/components/common/SearchInput";
import CarouselCategorias from "@/components/common/CarouselCategorias";
import DropDown from "@/components/common/DropDown";

const Pets = () => {
  const { sugestoes } = useCardContext();
  const validItems = sugestoes.filter((item) => item.tipo === "animal");

  const [filteredPets, setFilteredPets] = useState(validItems);

  const handleSearchChange = (filteredPets) => {
    setFilteredPets(filteredPets);
  };

  return (
    <>
      <Banner imagensBanner={BannerImage} />
      <BreadCrumb
        tituloCaminho="Home"
        tituloCaminho2="Animais"
        cor="#B2DED3"
        caminho="/pets"
      />
      <CarouselCategorias titulo="Categorias" tipo="categorias" />
      <div className="flex flex-row w-full justify-evenly items-center gap-4 px-4 py-10">
        <div className="flex gap-8 items-end">
          <DropDown label='Sexo' options={[
            {label: 'Macho', value: 'macho'}, 
            {label: 'Fêmea', value: 'femea'}
          ]}/>
          <DropDown label='Porte' options={[   
            {label: 'Grande', value: 'grande'}, 
            {label: 'Médio', value: 'medio'},
            {label: 'Pequeno', value: 'pequeno'}
          ]}/>
          <DropDown label='Cidade' options={[
            {label: 'Guarulhos', value: 'gr'}, 
            {label: 'São Paulo', value: 'sp'}
            ]}/>
          <SearchInput
            data={validItems}
            placeholder="Buscar..."
            name="Search"
            onSearch={handleSearchChange}
            filterKey="nome"
          />
          <Botao
            tamanho="140"
            altura="40"
            titulo="Limpar filtro"
            onClick={() => "Refatoração"}
            color="#FFA607"
          />
        </div>
      </div>

      <Pagination
        items={filteredPets}
        renderGrid={(currentItems) => (
          <GridLayout items={currentItems} titulo="Animal" tipoCard="animal" />
        )}
        itemsPerPageOptions={[2, 4, 6]}
        itemLabel="Animais"
      />
      <Doacao />
    </>
  );
};

export default Pets;
