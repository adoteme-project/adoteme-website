import InputOng from "@/components/common/InputOng";
import TableOng from "@/components/common/TableOng";
import PageTitle from "@/components/layout/PageTitle";
import SearchLayout from "@/components/layout/SearchLayout";
import { aplicacoesColumns } from "@/mocks/tableColumns";
import { useNavigate } from "react-router-dom";

const dataAplicaoes = [
  {
    id: 1,
    nomePet: "Tob",
    qtdAplicacao: 5,
    dtEnviado: "2024-11-13",
    taxaPet: "150.00",
    dtEntreda: "2024-11-01",
    situacao: "Revisão"
  }
]

const OngAplicacoes = () => {
  const navigation = useNavigate();

  const handleNavigationPet = (params) => {
    console.log("Evento registrado " + params.row.id);
    navigation(`/ong/pet/${params.row.id}`);
  }


  return (
    <>
      <PageTitle title="Aplicações">
        <button className="font-nunito px-3 py-2  rounded-lg bg-azul-main text-branco">Exportar registros</button>
      </PageTitle>
      <SearchLayout numberResults={0} registerName="Aplicações">
        <InputOng />
      </SearchLayout>
      <TableOng rows={dataAplicaoes} columns={aplicacoesColumns} eventRow={handleNavigationPet} height={500}/>
    </>
  );
}


export default OngAplicacoes;