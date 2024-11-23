import InputOng from "@/components/common/InputOng";
import TableOng from "@/components/common/TableOng";
import PageTitle from "@/components/layout/PageTitle";
import SearchLayout from "@/components/layout/SearchLayout";
import OngAuthContext from "@/context/AuthOngProvider";
import { lostPetsColumns, petsColumns } from "@/mocks/tableColumns";
import { getPetsOng, getPetsPerdidosOng } from "@/services/ongAPI";
import { exportacaoPets } from "@/services/onguserAPI";
import { Box, Tab, Tabs } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const OngPet = () => {
  const navigation = useNavigate();
  const [dataPets, setDataPets] = useState([]);
  const [filteredPets, setFilteredPets] = useState([]);
  const [dataPerdidos, setDataPerdidos] = useState([]);
  const [value, setValue] = useState(0);

  const { authOng } = useContext(OngAuthContext);

  const ongId = authOng?.userData?.ongId

  useEffect(() => {
    if (ongId) {
      const fetchData = async () => {
        try {
          const response = await getPetsOng(ongId);
          const data = response.data;

          const dataFormat = data.map((pet) => ({
            ...pet,
            visibilidade: pet.visibilidade ? "Visível" : "Escondido",
          }));

          setDataPets(dataFormat);
          setFilteredPets(dataFormat);

          const responsePerdidos = await getPetsPerdidosOng(ongId);
          const dataPerdidos = responsePerdidos.data;

          const dataPerdidosFormat = dataPerdidos.map((petPerdido) => ({
            ...petPerdido,
            endereco: `${petPerdido.cidadePerdido}, ${petPerdido.bairroPerdido}, ${petPerdido.ruaPerdido}`,
          }));

          setDataPerdidos(dataPerdidosFormat);

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

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) {
      setFilteredPets(dataPets);
    } else if (newValue === 1) {
      setFilteredPets(dataPerdidos);
    } else {
      setFilteredPets([]);
    }
  };

  const currentColumns = value === 0 ? petsColumns : lostPetsColumns;

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
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="primary"
          TabIndicatorProps={{ style: { backgroundColor: "#A9B949" } }}
          sx={{
            "& .Mui-selected": {
              color: "#FFBB1C",
            },
          }}
        >
          <Tab label="Todos os Pets" />
          <Tab label="Pets Perdidos" />
        </Tabs>
      </Box>
      <TableOng rows={filteredPets} columns={currentColumns} eventRow={value == 0 ? handleNavigationPet : null} height={500}/>
    </>
  );
};

export default OngPet;