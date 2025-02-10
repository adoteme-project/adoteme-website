import Botao from "@/components/common/Button";
import AuthContext from "@/context/AuthProvider";
import {postFavoritarAnimal} from "@/services/adotanteAPI"
import {deleteDesfavoritarAnimal} from "@/services/adotanteAPI"
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Avaliacao from "@/components/feature/Rating";

const Card = ({ colorBg, data = {}, onDoarClick, tipoCard, isCategoria, categoriaName }) => {
  const { auth } = useContext(AuthContext);
  const [favorito, setFavorito] = useState(false);
  const isPet = tipoCard === 'animal' || data.personalidade?.length > 0;


  
  const handleFavoriteClick = async () => {
    setFavorito(!favorito);
    // const idAdotante = auth?.userData?.id;
    console.log("Id animal",data.id);
    console.log("Id adotante", auth?.userData?.id)
    console.log("Favorito: ", favorito);
    const idAdotante = auth?.userData?.id
    const idAnimal = data.id

    if(!favorito){
      try{
        const response = await postFavoritarAnimal(idAdotante, idAnimal);
        console.log("Animal favoritado com sucesso", response);
      }catch(error){
        console.error("Ocorreu um erro durante a requisicao", error);
      }
    }else{
      try{
        const response = await deleteDesfavoritarAnimal(idAdotante,idAnimal);
        console.log("Animal desfavoritado", response);
      }catch(error){
        console.error("Ocorreu um erro para desfavoritar um animal", error);
      }
    }
    }


  return (
    <div className="bg-beje rounded-lg grid grid-cols-8 gap-x-8 pl-5 py-4 w-full shadow-sm">
      <div className="flex flex-col justify-center items-center col-span-3">
        <img
          src={data.imagem}
          alt={isPet ? "Imagem do animal que está disponível para adoção" : "Imagem da ONG"}
          className="w-full h-64 rounded-lg object-cover"
        />
      </div>
      <div className="col-span-5">
        <div className="font-roboto flex flex-col justify-between gap-6">
          <h1 style={{ backgroundColor: colorBg }} className="w-full text-left px-2 py-2 font-roboto text-2xl flex items-center">
            {data.nome}
          </h1>
          {isPet ? (
            <div className="font-nunito space-y-2">
              <h3>Idade: {data.idade}</h3>
              <h3>Porte: {data.porte}</h3>
              <h3>Sexo: {data.sexo}</h3>
              {isCategoria ? <div className="flex items-center gap-2">
                <span>{categoriaName} </span>
                <Avaliacao avaliacao={data.personalidade[categoriaName?.toLowerCase()]} cor="#A9B949" />
              </div>
                :
                <h3>Espécie: {data.especie}</h3>}
            </div>
          ) : (
            <div className="flex flex-col py-5 gap-2">
              <h3 className="font-medium font-nunito">Endereço: {data.endereco?.cidade}</h3>
              <h3 className="font-medium font-nunito">Bairro: {data.endereco?.bairro}</h3>
            </div>
          )}

          <div className="flex flex-row justify-between items-center pr-3">
            <div className="flex gap-4">
              <Link to={isPet ? `/pagina-pet/${data.id}` : `/pagina-ong/${data.id}`}>
                <Botao
                  textColor="#FFFFFF"
                  color={isPet ? "#4C8EB5" : "#FFC55E"}
                  tamanho="150"
                  altura="40"
                  nome="Ver mais"
                  titulo={isPet ? "Saiba mais" : "Ver mais"}
                />
              </Link>
              {!isPet && (
                <Botao
                  textColor="#FFFFFF"
                  color="#C6D668"
                  tamanho="150"
                  altura="40"
                  nome="Doar"
                  titulo="Doar"
                  onClick={onDoarClick}
                />
              )}
            </div>

            {auth.token && (
              <FontAwesomeIcon
                icon={favorito ? faHeartSolid : faHeartRegular}
                className="text-2xl cursor-pointer text-vermelho"
                onClick={handleFavoriteClick}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
