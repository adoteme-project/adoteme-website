import TableOng from "@/components/common/TableOng";
import AuthContext from "@/context/AuthProvider";
import { petsColumns } from "@/mocks/tableColumns";
import axios from "axios";
import { useContext, useEffect, useState } from "react";

const Teste = () => {
  const [dataPets, setDataPets] = useState([]);
  const { logout } = useContext(AuthContext);

  useEffect(() => {
    const abortController = new AbortController();
    const fetchData = async () => {
      try {
        const response = await axios.get('/petsOng.json', { signal: abortController.signal });
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

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <>
      <div className="w-[90%] ml-10">
        <TableOng rows={dataPets} columns={petsColumns} />
        <button onClick={logout} className="bg-azul-main p-4 text-branco">
          Logout
        </button>
      </div>

    </>
  );
};

export default Teste;