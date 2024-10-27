import Breadcrumbs from '@/components/common/BreadCrumb/index';
import Banner from '@/components/section/Banner';
import Doacao from "@/components/section/Donation"
import BannerImage from "@/assets/banner-ong.svg"
import { useCardContext } from '@/context/CardProvider';
import { SearchInput } from '@/components/common/SearchInput';
import { useState } from 'react';
import Pagination from '@/components/common/Pagination';
import GridLayout from '@/components/layout/Grid';

const Ongs = () => {
  const {sugestoes} = useCardContext();
  const validItems = sugestoes.filter((item) => item.tipo === "ong");
  const [filteredOngs, setFilteredOngs] = useState(validItems);



  const handleSearchChange = (validItems) => {
    setFilteredOngs(validItems);
  };

  return (
    <>
      <Banner
        imagensBanner={BannerImage}
      />
      <Breadcrumbs 
        tituloCaminho='Home'
        tituloCaminho2='Ongs'
        cor="#B2DED3"
        caminho="/doacoes"
      />
      <div className="flex flex-row-reverse px-16">
      <SearchInput
            data={validItems}
            placeholder="Cidade"
            name="Search"
            onSearch={handleSearchChange}
            filterKey="endereco"
            className="w-[200px]"
      />
      </div>
      {/* Componente de Paginação */}
      <Pagination
        items={filteredOngs}
        renderGrid={(currentItems) => (
          <GridLayout items={currentItems} titulo="Ongs" tipoCard="ong" />
        )}
        itemsPerPageOptions={[2, 4, 6]} // Definindo que queremos 4 itens por página
      />
      <Doacao />
    </>
  );
};

export default Ongs;