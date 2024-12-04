import DropDown from "@/components/section/DropDown/index";
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

const normalizeString = (str) =>
  str
    ? str
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
    : str;

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
          result = result.filter(
            (pet) => pet[key] && normalizeString(pet[key]) === filters[key]
          );
        }
      });

      setFilteredPets(result);
    }
  }, [validItems, filters]);

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: normalizeString(value) }));
    setDropdownValues((prev) => ({ ...prev, [key]: value }));
  };

  const handleSearchChange = (filteredPets) => {
    setFilteredPets(filteredPets);
  };

  const handleClearFilters = () => {
    setFilters({});
    setDropdownValues({
      porte: "",
      sexo: "",
      especie: "",
    });
    setFilteredPets(validItems);
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
        <DropDown
          filterKey="porte"
          nome="Porte"
          tamanho={200}
          fetchOptions={
            "http://localhost:8080/animais/todos-animais-com-personalidade/"
          }
          onFilterChange={handleFilterChange}
          selectedValue={dropdownValues.porte}
        />
        <DropDown
          filterKey="sexo"
          nome="Sexo"
          tamanho={200}
          fetchOptions={
            "http://localhost:8080/animais/todos-animais-com-personalidade/"
          }
          onFilterChange={handleFilterChange}
          selectedValue={dropdownValues.sexo}
        />
        <DropDown
          filterKey="especie"
          nome="Espécie"
          tamanho={200}
          fetchOptions={
            "http://localhost:8080/animais/todos-animais-com-personalidade/"
          }
          onFilterChange={handleFilterChange}
          selectedValue={dropdownValues.especie}
        />

        <div className="flex gap-8 items-center">
          <Botao
            tamanho="140"
            altura="40"
            titulo="Limpar filtro"
            onClick={handleClearFilters}
            color="#FFA607"
          />

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
