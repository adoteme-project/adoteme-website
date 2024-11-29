import InputOng from "@/components/common/InputOng";
import TableOng from "@/components/common/TableOng";
import PageTitle from "@/components/layout/PageTitle";
import SearchLayout from "@/components/layout/SearchLayout";
import OngAuthContext from "@/context/AuthOngProvider";
import { lostPetsColumns, petsColumns } from "@/mocks/tableColumns";
import { deletePetOng, deletePetPerdidoOng, getPetsOng, getPetsPerdidosOng } from "@/services/ongAPI";
import { exportacaoPets } from "@/services/onguserAPI";
import downloadFile from "@/utils/downloadFile";
import { Box, Tab, Tabs } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const OngPet = () => {
  const navigation = useNavigate();
  const [dataPets, setDataPets] = useState([]);
  const [filteredPets, setFilteredPets] = useState([]);
  const [dataPerdidos, setDataPerdidos] = useState([]);
  const [value, setValue] = useState(0);
  const [loading, setLoading] = useState(true);

  const { authOng } = useContext(OngAuthContext);

  const ongId = authOng?.userData?.ongId;

  const fetchPets = async (ongId) => {
    setLoading(true);
    try {
      const response = await getPetsOng(ongId);
      const data = response.data.map((pet) => ({
        ...pet,
        visibilidade: pet.visibilidade ? "Visível" : "Escondido",
      }));
      setDataPets(data);
      if (value === 0) setFilteredPets(data);
    } catch (error) {
      console.error("Erro ao buscar pets:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchLostPets = async (ongId) => {
    setLoading(true);
    try {
      const response = await getPetsPerdidosOng(ongId);
      const data = response.data.map((pet) => ({
        ...pet,
        endereco: `${pet.cidadePerdido}, ${pet.bairroPerdido}, ${pet.ruaPerdido}`,
      }));
      setDataPerdidos(data);
      if (value === 1) setFilteredPets(data);
    } catch (error) {
      console.error("Erro ao buscar pets perdidos:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (ongId) {
      if (value === 0) {
        fetchPets(ongId);
      } else if (value === 1) {
        fetchLostPets(ongId);
      }
    }
  }, [ongId, value]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) {
      setFilteredPets(dataPets);
    } else if (newValue === 1) {
      setFilteredPets(dataPerdidos);
    }
  };

  const exportarPets = async (id) => {
    try {
      const response = await exportacaoPets(id);
      downloadFile(response.data, "pets.csv");
    } catch (err) {
      console.error("Erro ao exportar os registros:", err);
    }
  };

  const handleNavigationPet = (params) => {
    navigation(`/ong/pets/${params.row.id}`);
  };

  const handleDelete = async (id, type) => {
    try {
      if (type === "pet") {
        await deletePetOng(id);
        setDataPets((prev) => prev.filter((pet) => pet.id !== id));
        if (value === 0) setFilteredPets((prev) => prev.filter((pet) => pet.id !== id));
      } else if (type === "lostPet") {
        await deletePetPerdidoOng(id);
        setDataPerdidos((prev) => prev.filter((pet) => pet.id !== id));
        if (value === 1) setFilteredPets((prev) => prev.filter((pet) => pet.id !== id));
      }
    } catch (error) {
      console.error(`Erro ao deletar o ${type}:`, error);
    }
  };

  const currentColumns = value === 0 ? petsColumns(authOng, (id) => handleDelete(id, "pet")) : lostPetsColumns(authOng, (id) => handleDelete(id, "lostPet"));

  return (
    <>
      <PageTitle title="Pets" actionName="+ Adicionar pet">
        <button
          className="font-nunito px-3 py-2 rounded-lg bg-azul-main text-branco"
          onClick={() => exportarPets(ongId)}
        >
          Exportar registros
        </button>
        <Link to={"/ong/cadastrar-pet"} className="font-nunito px-3 py-2 rounded-lg bg-amarelo-select text-branco">
          + Adicionar pet
        </Link>
      </PageTitle>
      <SearchLayout numberResults={filteredPets.length} registerName="Pets">
        <InputOng setTableData={setFilteredPets} originalData={value === 0 ? dataPets : dataPerdidos} />
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
      <TableOng rows={filteredPets} columns={currentColumns} eventRow={value === 0 ? handleNavigationPet : null} height={500} loading={loading} />
    </>
  );
};

export default OngPet;