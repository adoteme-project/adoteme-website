import InputOng from "@/components/common/InputOng";
import PageTitle from "@/components/layout/PageTitle";
import SearchLayout from "@/components/layout/SearchLayout";
import TableComponent from "@/components/layout/Table";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const OngPet = () => {
  const [dataPets, setDataPets] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    const fetchData = async () => {
      try {
        const response = await axios.get('/petsOng.json', { signal: abortController.signal });
        const data = response.data;


        setDataPets(data);
      } catch (error) {
        if (error.name === 'AbortError') return;
        console.error('Erro ao buscar os dados da API', error);
      }
    };

    fetchData();

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <>
      <PageTitle title="Pets" actionName="+ Adicionar pet">
        <button className="font-nunito px-3 py-2 rounded-lg bg-azul-main text-branco">Exportar registros</button>
        <Link className="font-nunito px-3 py-2 rounded-lg bg-amarelo-select text-branco">+ Adicionar pet</Link>
      </PageTitle>
      <SearchLayout numberResults={dataPets.length} registerName="Pets">
        <InputOng />
      </SearchLayout>
      <TableComponent dataPets={dataPets} />
    </>
  );
};

export default OngPet;