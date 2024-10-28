import InputOng from "@/components/common/InputOng";
import TableOng from "@/components/common/TableOng";
import PageTitle from "@/components/layout/PageTitle";
import SearchLayout from "@/components/layout/SearchLayout";
import AuthContext from "@/context/AuthProvider";
import { petsColumns } from "@/mocks/tableColumns";
import { getPetsOng } from "@/services/ongAPI";
import { exportacaoPets } from "@/services/onguserAPI";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const OngPet = () => {
  const [dataPets, setDataPets] = useState([]);
  const [filteredPets, setFilteredPets] = useState([]);

  const { auth } = useContext(AuthContext);

  useEffect(() => {
    if (auth?.userData?.ongId) {
      const fetchData = async () => {
        try {
          const response = await getPetsOng(auth.userData.ongId);
          const data = response.data;

          console.log(response.data);

          const dataFormat = data.map((pet) => ({
            ...pet,
            visibilidade: pet.visibilidade ? "Visível" : "Escondido",
          }));

          setDataPets(dataFormat);
          setFilteredPets(dataFormat);
        } catch (error) {
          if (error.name === "AbortError") return;
          console.error("Erro ao buscar os dados da API", error);
        }
      };

      fetchData();
    }
  }, [auth?.userData?.ongId]);

  const exportarPets = async (id) => {
    try {
      const response = await exportacaoPets(id);
      const href = URL.createObjectURL(response.data);

      const link = document.createElement("a");
      link.href = href;
      link.setAttribute("download", "pets.csv");
      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);
      URL.revokeObjectURL(href);
    } catch (err) {
      console.log("Não foi possível realizar o download, " + err);
    }
  };

  return (
    <>
      <PageTitle title="Pets" actionName="+ Adicionar pet">
        <button
          className="font-nunito px-3 py-2 rounded-lg bg-azul-main text-branco"
          onClick={() => exportarPets(auth?.userData?.ongId)}
        >
          Exportar registros
        </button>
        <Link className="font-nunito px-3 py-2 rounded-lg bg-amarelo-select text-branco">
          + Adicionar pet
        </Link>
      </PageTitle>
      <SearchLayout numberResults={filteredPets.length} registerName="Pets">
        <InputOng setTableData={setFilteredPets} originalData={dataPets} />
      </SearchLayout>
      <TableOng rows={filteredPets} columns={petsColumns} />
    </>
  );
};

export default OngPet;