import RequestCard from "@/components/common/RequestCard/index.jsx";
import { useContext, useEffect, useState } from "react";
import { getRequisicoesByAdotante } from "@/services/adotanteAPI";
import AuthContext from "@/context/AuthProvider";

const Aplicacao = () => {
  const { auth } = useContext(AuthContext);
  const idAdotante = auth?.userData?.id;
  const [requisicoes, setRequisicoes] = useState([]);
  const cores = ["#FFC55E", "#A9B949", "#B2DED3", "#EC5A49"];

  useEffect(() => {
    const fetchRequisicoes = async () => {
      try {
        console.log("ID ADOTANTE", idAdotante);
        const response = await getRequisicoesByAdotante(idAdotante);
        console.log("Resposta", response.data);
        
        if (Array.isArray(response.data)) {
            setRequisicoes(response.data);
        }
      } catch (error) {
        console.error("Erro ao buscar requisições:", error);
        setRequisicoes([]);
      }
    };

    fetchRequisicoes();
  }, []);

  const getRandomColorFromArray = () => {
    const randomIndex = Math.floor(Math.random() * cores.length);
    return cores[randomIndex];
  };

  return (
    <section className="flex w-full">
      <div className="w-full py-20 px-16 flex-col">
        <h1 className="text-center font-nunito font-medium text-3xl pb-16">
          Minhas Aplicações
        </h1>
        <div className="flex flex-wrap gap-6">
          {requisicoes.length > 0 ? (
            requisicoes.map((req) => {
              const colorBg = getRandomColorFromArray(); 
              return (
                <RequestCard
                  key={req.id}
                  data={req}
                  colorBg={colorBg}
                />
              );
            })
          ) : (
            <p className="text-center text-gray-500">Nenhuma aplicação encontrada.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Aplicacao;
