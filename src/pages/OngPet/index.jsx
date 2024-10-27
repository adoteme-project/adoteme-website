import InputOng from "@/components/common/InputOng";
import TableOng from "@/components/common/TableOng";
import PageTitle from "@/components/layout/PageTitle";
import SearchLayout from "@/components/layout/SearchLayout";
import { petsColumns } from "@/mocks/tableColumns";
import { exportacaoPets } from "@/services/onguserAPI";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const OngPet = () => {
  const [dataPets, setDataPets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/petsOng.json');
        const data = response.data;

        const dataFormat = data.map((pet) => ({
          ...pet,
          visibilidade: pet.visibilidade ? 'Visível' : 'Escondido',
        }));

        setDataPets(dataFormat);
      } catch (error) {
        if (error.name === 'AbortError') return;
        console.error('Erro ao buscar os dados da API', error);
      }
    };

    fetchData();

  }, []);

  const exportarPets = async (id) => {
    try {
      const response = await exportacaoPets(id);

      const href = URL.createObjectURL(response.data);

      const link = document.createElement('a');
      link.href = href;
      link.setAttribute('download', 'pets.csv');
      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);
      URL.revokeObjectURL(href);

    } catch (err) {
      console.log("Deu ruim, " + err);
    }

  }

  return (
    <>
      <PageTitle title="Pets" actionName="+ Adicionar pet">
        <button className="font-nunito px-3 py-2 rounded-lg bg-azul-main text-branco" onClick={() => exportarPets(1)}>Exportar registros</button>
        <Link className="font-nunito px-3 py-2 rounded-lg bg-amarelo-select text-branco">+ Adicionar pet</Link>
      </PageTitle>
      <SearchLayout numberResults={dataPets.length} registerName="Pets">
        <InputOng />
      </SearchLayout>
      <TableOng rows={dataPets} columns={petsColumns} />
    </>
  );
};

export default OngPet;