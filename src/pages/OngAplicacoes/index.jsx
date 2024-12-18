import InputOng from "@/components/common/InputOng";
import TableOng from "@/components/common/TableOng";
import PageTitle from "@/components/layout/PageTitle";
import SearchLayout from "@/components/layout/SearchLayout";
import OngAuthContext from "@/context/AuthOngProvider";
import { aplicacoesColumns } from "@/mocks/tableColumns";
import { listarAplicacoesOng } from "@/services/ongAPI";
import { formatarHorarioPassado } from "@/utils/formatMessageTime";
import { AssignmentTurnedIn, NewReleases, PendingActions, Pets } from "@mui/icons-material";
import { Tab, Tabs } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const OngAplicacoes = () => {
  const navigation = useNavigate();
  const { authOng } = useContext(OngAuthContext);

  const ongId = authOng?.userData?.ongId;

  const [aplicacoes, setAplicacoes] = useState([])
  const [filteredAplicacoes, setFilteredAplicacoes] = useState([]);
  const [value, setValue] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (ongId) {
      const fetchData = async () => {
        setLoading(true);
        try {
          const response = await listarAplicacoesOng(ongId);
          const data = response.data;

          const dataFormat = data.map((appl) => ({
            ...appl,
            enviado: appl.enviado == null ? "Sem requisições" : formatarHorarioPassado(appl.enviado),
          }));

          setAplicacoes(dataFormat);
          setFilteredAplicacoes(dataFormat);

        } catch (error) {
          console.error("Erro ao buscar dados da API", error);
        } finally {
          setLoading(false);
        }
      }

      fetchData();
    }
  }, [ongId])


  const handleNavigationPet = (params) => {
    console.log("Evento registrado " + params.row.id);
    navigation(`/ong/pets/${params.row.id}`);
  }

  const situacoes = ["Sem aplicação", "Revisão", "Aprovado", "Adotado"];

  const handleChange = (event, newValue) => {
    setValue(newValue);
    const situacaoSelecionada = situacoes[newValue];
    const aplicacoesFiltradas = aplicacoes.filter(
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
          <Tab icon={<NewReleases color="#FFBB1C" />} label={"Novo"} iconPosition="start" />
          <Tab icon={<PendingActions color="#FFBB1C" />} label={"Revisão"} iconPosition="start" />
          <Tab icon={<AssignmentTurnedIn color="#FFBB1C" />} label={"Aprovado"} iconPosition="start" />
          <Tab icon={<Pets color="#FFBB1C" />} label={"Concluído"} iconPosition="start" />
        </Tabs>
      </PageTitle>
      <SearchLayout numberResults={filteredAplicacoes.length} registerName="Aplicações">
        <InputOng setTableData={setFilteredAplicacoes} originalData={aplicacoes} />
      </SearchLayout>
      <TableOng rows={filteredAplicacoes} columns={aplicacoesColumns} eventRow={handleNavigationPet} height={500} loading={loading} />
    </>
  );
}


export default OngAplicacoes;