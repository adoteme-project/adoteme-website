import { Link } from "react-router-dom";
import Botao from "../Button";
import { useContext, useEffect, useState } from "react";
import { getAnimalFavoritoByAdotante } from "@/services/adotanteAPI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import AuthContext from "@/context/AuthProvider";

const RequestCard = ({ data, colorBg }) => {
  const [favoriteAnimals, setFavorites] = useState([]);
  const { auth } = useContext(AuthContext);
  const idAdotante = auth?.userData?.id;

  console.log("Id ADOTANTE", idAdotante);
  console.log("data", data);

  useEffect(() => {
    const getFavoritePet = async () => {
      if (!idAdotante) return;

      try {
        const response = await getAnimalFavoritoByAdotante(idAdotante);
        console.log("Animais favoritos: ", response);

        // Garante que sempre será um array
        const favorites = Array.isArray(response) ? response : [];
        setFavorites(favorites);
      } catch (error) {
        console.error("Erro ao buscar os animais favoritos", error);
        setFavorites([]); // Garante que seja um array em caso de erro
      }
    };

    getFavoritePet();
  }, [idAdotante]);

  const isFavorite =
    favoriteAnimals.length > 0 &&
    favoriteAnimals.some((animal) => animal.animalId === data.idAnimal);

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
          <FontAwesomeIcon
            icon={isFavorite ? regularHeart : solidHeart}
            className={`text-vermelho text-2xl ${
              isFavorite ? "text-cinza" : "text-vermelho"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default RequestCard;
