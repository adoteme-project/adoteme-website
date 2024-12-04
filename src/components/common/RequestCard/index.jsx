import { Link } from "react-router-dom";
import Botao from "../Button";
import { useContext} from "react";
import AuthContext from "@/context/AuthProvider";

const RequestCard = ({ data, colorBg }) => {
  const { auth } = useContext(AuthContext);
  const idAdotante = auth?.userData?.id;

  console.log("Id ADOTANTE", idAdotante);
  console.log("data", data);

  const getStatusData = (status) => {
    if (status === "Nova") {
      return "Aguardando";
    }
    return status;
  };

  const getStatusClass = (status) => {
    if (status === "NEGADO") {
      return "bg-vermelho text-white";
    }
    if (status === "APROVADO") {
      return "bg-verde text-white";
    }
    return "bg-cinza text-black";
  };

  return (
    <div className="flex flex-row bg-beje rounded-lg w-full">
      <div className="p-4 w-[25%] relative">
        <img
          src={data.imagem || "/default-image.jpg"}
          alt={data.nomePet}
          className="rounded-lg w-[100%] h-[100%] object-cover"
        />
      </div>
      <div className="p-4 flex flex-col gap-4 w-full">
        <h1 className="w-full text-left px-2 py-1 font-roboto text-2xl flex items-center"
            style={{backgroundColor: colorBg }}>
          {data.nomePet}
        </h1>
        <p>Data da aplicação: {new Date(data.dataAplicacao).toLocaleDateString("pt-BR")}</p>
        <div className="flex gap-2 items-center">
          <p>Status:</p>
          <p
            className={`w-fit text-center py-1 p-4 rounded ${getStatusClass(
              data.status
            )}`}
          >
            {getStatusData(data.status)}
          </p>
        </div>
        <div className="flex gap-2">
          <strong>Motivo:</strong>
          <p>{data.motivo || "Não especificado."}</p>
        </div>
        <div className="w-full flex  gap-10 items-center">
          <Link to={`/pagina-pet/${data.idAnimal}`}>
            <Botao
              textColor="#FFFFFF"
              color={"#4C8EB5"}
              tamanho="150"
              altura="40"
              nome="Ver mais"
              titulo={"Ver mais"}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RequestCard;
