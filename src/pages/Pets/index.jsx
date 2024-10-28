import DropDown from "@/components/section/DropDown/index";
import Banner from "@/components/section/Banner";
import BreadCrumb from "@/components/common/BreadCrumb";
import Doacao from "@/components/section/Donation";
import { useCardContext } from '@/context/CardProvider';
import { useEffect, useState } from "react";
import GridLayout from "@/components/layout/Grid";
import { SearchInput } from "@/components/common/SearchInput";
import BannerImage from "@/assets/banner-pets.svg";
import Pagination from "@/components/common/Pagination";
import Carousel from "@/components/section/Categories";
import Botao from "@/components/common/Button";

const Pets = () => {
  const { sugestoes } = useCardContext();
  const validItems = sugestoes.filter((item) => item.tipo === "animal");

  const [filteredPets, setFilteredPets] = useState([]);
  const [filters, setFilters] = useState({});
  const [dropdownValues, setDropdownValues] = useState({
    tamanho: "",
    sexo: "",
    especie: "",
  });

  useEffect(() => {
    if (validItems.length > 0) {
      let result = [...validItems];

      Object.keys(filters).forEach((key) => {
        if (filters[key]) {
          result = result.filter((pet) => pet[key] === filters[key]);
        }
      });

      setFilteredPets(result);
    }
  }, [sugestoes, filters]);

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setDropdownValues((prev) => ({ ...prev, [key]: value }));
  };

  const handleSearchChange = (filteredPets) => {
    setFilteredPets(filteredPets);
  };

  const handleClearFilters = () => {
    setFilters({}); // Limpa o estado dos filtros
    setDropdownValues({
      tamanho: "",
      sexo: "",
      especie: "",
    });
    setFilteredPets(validItems); // Reseta a lista de pets filtrados
  };

  return (
    <>
      <Banner tamanho="700.25vh" imagensBanner={BannerImage} />
      <BreadCrumb tituloCaminho="Home" tituloCaminho2="Animais" cor="#B2DED3" caminho="/pets" />
      <Carousel titulo="Categorias" tipo="categorias" />
      <div className="flex flex-row w-full justify-evenly gap-4 px-4">
        <div className="flex flex-row w-8/12 gap-4 items-center">
          <DropDown 
            filterKey="tamanho" 
            nome="Tamanho" 
            tamanho={200} 
            fetchOptions={null} 
            onFilterChange={handleFilterChange} 
            selectedValue={dropdownValues.tamanho} 
          />
          <DropDown 
            filterKey="sexo" 
            nome="Sexo" 
            tamanho={200} 
            fetchOptions={null} 
            onFilterChange={handleFilterChange} 
            selectedValue={dropdownValues.sexo}
          />
          <DropDown 
            filterKey="especie" 
            nome="Espécie" 
            tamanho={200} 
            fetchOptions={"/petCard.json"} 
            onFilterChange={handleFilterChange} 
            selectedValue={dropdownValues.especie}
          />
          <Botao 
            tamanho="140" 
            altura="30" 
            titulo="Limpar filtro" 
            onClick={handleClearFilters} 
            color="#FFA607"
          />
        </div>
        <div className="w-[200px]">
          <SearchInput 
            data={validItems} 
            placeholder="Cidade" 
            name="Search" 
            onSearch={handleSearchChange} 
            filterKey="nome" 
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
