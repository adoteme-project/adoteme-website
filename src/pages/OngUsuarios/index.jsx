import InputOng from "@/components/common/InputOng";
import TableOng from "@/components/common/TableOng";
import PageTitle from "@/components/layout/PageTitle";
import SearchLayout from "@/components/layout/SearchLayout";
import { usersColumns } from "@/mocks/tableColumns";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import OngAuthContext from "@/context/AuthOngProvider";
import { listarUsuariosOng } from "@/services/onguserAPI";

const OngUsuarios = () => {
  const [dataUsuarios, setDataUsuarios] = useState([]);
  const [filteredUsuarios, setFilteredUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { authOng } = useContext(OngAuthContext);
  const navigate = useNavigate();

  const ongId = authOng?.userData?.ongId;

  useEffect(() => {
    if (!ongId) {
      setError("ID da ONG não encontrado. Faça login novamente.");
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await listarUsuariosOng(ongId);

        if (response.status === 204) {
          setError("Nenhum usuário encontrado para esta ONG.");
          setDataUsuarios([]);
          setFilteredUsuarios([]);
          return;
        }

        const dataFormat = response.data.map((usuario) => ({
          ...usuario,
          dataEntrada: new Date(usuario.dataCadastro).toLocaleDateString(),
        }));

        setDataUsuarios(dataFormat);
        setFilteredUsuarios(dataFormat);
        setError(null);
      } catch (err) {
        setError("Erro ao buscar os dados. Tente novamente mais tarde.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [ongId]);

  if (loading) {
    return <div>Carregando dados dos usuários...</div>;
  }

  if (error) {
    return (
      <div className="text-red-500 text-center mt-4">
        {error}
        <div className="mt-4">
          <button
            className="bg-amarelo px-6 py-3 rounded-md text-branco font-bold text-sm hover:bg-amarelo-hover shadow-md"
            onClick={() => navigate(-1)}
          >
            Voltar
          </button>
        </div>
      </div>
    );
  }

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
