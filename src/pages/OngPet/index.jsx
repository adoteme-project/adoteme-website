import InputOng from "@/components/common/InputOng";
import TableOng from "@/components/common/TableOng";
import PageTitle from "@/components/layout/PageTitle";
import SearchLayout from "@/components/layout/SearchLayout";
import OngAuthContext from "@/context/AuthOngProvider";
import { petsColumns } from "@/mocks/tableColumns";
import { getPetsOng } from "@/services/ongAPI";
import { exportacaoPets } from "@/services/onguserAPI";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const OngPet = () => {
  const navigation = useNavigate();
  const [dataPets, setDataPets] = useState([]);
  const [filteredPets, setFilteredPets] = useState([]);


  const { authOng } = useContext(OngAuthContext);

  useEffect(() => {
    if (authOng?.userData?.ongId) {
      const fetchData = async () => {
        try {
          const response = await getPetsOng(authOng.userData.ongId);
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
  }, [authOng?.userData?.ongId]);

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

  const handleNavigationPet = (params) => {
    console.log("Evento registrado " + params.row.id);
    navigation(`/ong/pet/${params.row.id}`);
  }

  return (
    <>
      <PageTitle title="Pets" actionName="+ Adicionar pet">
        <button
          className="font-nunito px-3 py-2 rounded-lg bg-azul-main text-branco"
          onClick={() => exportarPets(authOng?.userData?.ongId)}
        >
          Exportar registros
        </button>
        <Link to={"/ong/cadastrar-pet"} className="font-nunito px-3 py-2 rounded-lg bg-amarelo-select text-branco">
          + Adicionar pet
        </Link>
      </PageTitle>
      <SearchLayout numberResults={filteredPets.length} registerName="Pets">
        <InputOng setTableData={setFilteredPets} originalData={dataPets} />
      </SearchLayout>
      <TableOng rows={filteredPets} columns={petsColumns} eventRow={handleNavigationPet} height={500}/>
    </>
  );
};

export default OngPet;