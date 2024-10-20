import DropDown from "@/components/section/DropDown/index";
import Banner from "@/components/section/Banner";
import Categorias from "@/components/section/Categories";
import BreadCrumb from "@/components/common/BreadCrumb";
import Doacao from "@/components/section/Donation";
import { useCardContext } from "@/contextCard";
import { useEffect, useState } from "react";
import Grid from "@/components/layout/Grid";
import { SearchInput } from "@/components/common/SearchInput";
import BannerImage from "@/assets/banner-pets.svg"
// import AnimaisProximos from '@/components/section/Near-Animals/index'

const Pets = () => {
  const { data } = useCardContext();
  const validItems = data.filter((item) => item.tipo === "animal");
  const [filteredPets, setFilteredPets] = useState(validItems);
  const [filters, setFilters] = useState({});

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
  }, [data, filters]);

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleSearchChange = (filteredPets) => {
    setFilteredPets(filteredPets);
  };

  return (
    <>
      <Banner
        tamanho="700.25vh"
        imagensBanner={BannerImage}
      />
      <BreadCrumb
        tituloCaminho="Home"
        tituloCaminho2="Animais"
        cor="#B2DED3"
        caminho="/pets"
      />
      <Categorias titulo="Categorias" tipo="categorias" />
      <div className="flex flex-row w-full justify-evenly gap-4 px-4">
        <div className="flex flex-row w-8/12 gap-4 ">
          <DropDown
            filterKey="tamanho"
            nome="Tamanho"
            tamanho={200}
            fetchOptions={null}
            onFilterChange={handleFilterChange}
          />
          <DropDown
            filterKey="sexo"
            nome="Sexo"
            tamanho={200}
            fetchOptions={null}
            onFilterChange={handleFilterChange}
          />
          <DropDown
            filterKey="especie"
            nome="Espécie"
            tamanho={200}
            fetchOptions={"/petCard.json"}
            onFilterChange={handleFilterChange}
          />
        </div>
        <div className="w-[200px] " >
          <SearchInput
            data={validItems}
            placeholder="Cidade"
            name="Search"
            onSearch={handleSearchChange}
            filterKey="cidade"
          />
        </div>
      </div>
      <Grid items={filteredPets} titulo="Animal" />
      <Doacao />
    </>
  );
};

export default Pets;
