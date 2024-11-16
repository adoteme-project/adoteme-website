import InputOng from "@/components/common/InputOng";
import TableOng from "@/components/common/TableOng";
import PageTitle from "@/components/layout/PageTitle";
import SearchLayout from "@/components/layout/SearchLayout";
import { usersColumns } from "@/mocks/tableColumns";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const OngUsuarios = () => {
  const [dataUsuarios, setDataUsuarios] = useState([]);
  const [filteredUsuarios, setFilteredUsuarios] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/usuariosOng.json");
        const data = response.data;

        const dataFormat = data.map((usuario) => ({
          ...usuario,
          dataEntrada: new Date(usuario.dataEntrada).toLocaleDateString(),
        }));

        setDataUsuarios(dataFormat);
        setFilteredUsuarios(dataFormat);
      } catch (error) {
        console.error("Erro ao buscar os dados", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <PageTitle title="Todos Usuários" actionName="+ Adicionar Novo Usuário">
        <button
          className="font-nunito px-3 py-2 rounded-lg bg-azul-main text-branco lg:px-4 lg:py-3"
          onClick={() => navigate("/ong/adicionar-usuario")}
        >
          + Adicionar Novo Usuário
        </button>
      </PageTitle>

      <SearchLayout numberResults={filteredUsuarios.length} registerName="Usuários">
        <InputOng setTableData={setFilteredUsuarios} originalData={dataUsuarios} />
      </SearchLayout>

      <div className="overflow-x-auto sm:overflow-hidden">
        <TableOng rows={filteredUsuarios} columns={usersColumns} />
      </div>

      <div className="flex justify-center mt-6">
        <button
          className="bg-amarelo px-6 py-3 rounded-md text-branco font-bold text-sm hover:bg-amarelo-hover shadow-md w-28 sm:w-32 md:w-40 lg:w-48"
          onClick={() => navigate(-1)}
        >
          Voltar
        </button>
      </div>
    </>
  );
};

export default OngUsuarios;
