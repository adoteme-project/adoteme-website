import InputOng from "@/components/common/InputOng";
import TableOng from "@/components/common/TableOng";
import PageTitle from "@/components/layout/PageTitle";
import SearchLayout from "@/components/layout/SearchLayout";
import { aplicacoesColumns } from "@/mocks/tableColumns";
import { AssignmentTurnedIn, NewReleases, PendingActions } from "@mui/icons-material";
import { Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const dataAplicaoes = [
  {
    id: 1,
    nomePet: "Tob",
    qtdAplicacao: 5,
    dtEnviado: "2024-11-13",
    taxaPet: "70.00",
    dtEntreda: "2024-11-01",
    situacao: "Revisão"
  },
  {
    id: 2,
    nomePet: "Mey",
    qtdAplicacao: 0,
    dtEnviado: "2024-11-13",
    taxaPet: "70.00",
    dtEntreda: "2024-11-01",
    situacao: "Novo"
  },
  {
    id: 3,
    nomePet: "Mimiko",
    qtdAplicacao: 2,
    dtEnviado: "2024-11-13",
    taxaPet: "0.00",
    dtEntreda: "2024-11-01",
    situacao: "Concluído"
  }
]

const OngAplicacoes = () => {
  const navigation = useNavigate();

  const [filteredAplicacoes, setFilteredAplicacoes] = useState(dataAplicaoes);
  const [value, setValue] = useState(0);

  const handleNavigationPet = (params) => {
    console.log("Evento registrado " + params.row.id);
    navigation(`/ong/pet/${params.row.id}`);
  }

  const situacoes = ["Novo", "Revisão", "Concluído"];

  const handleChange = (event, newValue) => {
    setValue(newValue);
    const situacaoSelecionada = situacoes[newValue];
    const aplicacoesFiltradas = dataAplicaoes.filter(
      (aplicacao) => aplicacao.situacao === situacaoSelecionada
    );
    setFilteredAplicacoes(aplicacoesFiltradas);
  };


  return (
    <>
      <PageTitle title="Aplicações">
        <Tabs textColor="primary" TabIndicatorProps={{
          style: {
            backgroundColor: "#A9B949",
          }
        }} sx={{
          '& .Mui-selected': {
            color: "#FFBB1C",
          }
        }} value={value} onChange={handleChange}>
          <Tab icon={<NewReleases color="#FFBB1C"/>} label={"Novo"} iconPosition="start" />
          <Tab icon={<PendingActions color="#FFBB1C"/>} label={"Revisão"} iconPosition="start" />
          <Tab icon={<AssignmentTurnedIn color="#FFBB1C"/>} label={"Concluído"} iconPosition="start" />
        </Tabs>
      </PageTitle>
      <SearchLayout numberResults={0} registerName="Aplicações">
        <InputOng setTableData={setFilteredAplicacoes} originalData={dataAplicaoes} />
      </SearchLayout>
      <TableOng rows={filteredAplicacoes} columns={aplicacoesColumns} eventRow={handleNavigationPet} height={500} />
    </>
  );
}


export default OngAplicacoes;