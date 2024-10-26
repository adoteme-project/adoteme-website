import Breadcrumbs from '@/components/common/BreadCrumb/index';
import Banner from '@/components/section/Banner';
import Grid from '@/components/layout/Grid';
import Doacao from "@/components/section/Donation"
import BannerImage from "@/assets/banner-ong.svg"
import { useCardContext } from '@/context/CardProvider';
import { SearchInput } from '@/components/common/SearchInput';
import { useState } from 'react';

const Ongs = () => {
  const {sugestoes} = useCardContext();
  const validItems = sugestoes.filter((item) => item.tipo === "ong");
  const [filteredOngs,setFilteredOngs] = useState(validItems);



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
      <Grid items={filteredOngs} titulo="Ongs" />
      <Doacao />
    </>
  );
};

export default Ongs;