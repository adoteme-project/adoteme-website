import Botao from "@/components/common/Button";
import AuthContext from "@/context/AuthProvider";
import {postFavoritarAnimal} from "@/services/adotanteAPI"
import {deleteDesfavoritarAnimal} from "@/services/adotanteAPI"
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import imgOng from "@/assets/imagem-ong.png";

const Card = ({ colorBg, data = {}, onDoarClick, tipoCard }) => {
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
    <div className="w-[41vw] bg-beje rounded-lg grid grid-cols-2 gap-4 px-5 py-3 mb-5">
      <div className="h-[41.88vh] flex flex-col justify-center items-center py-4">
        <img
          src={isPet && data.imagem ? data.imagem : imgOng}
          alt={isPet ? "Imagem do animal que está disponível para adoção" : "Imagem da ONG"}
          className="w-[19.68vw] h-[40.68vh] rounded-lg"
        />
        {isPet && <p>A {data.distancia || "N/A"} de distância</p>}
      </div>
      <div>
        <h1
          style={{ backgroundColor: colorBg }}
          className="w-full h-[7.52vh] text-left px-2 font-roboto text-2xl flex items-center"
        >
          {data.nome}
        </h1>
        <div className="font-roboto flex flex-col gap-3">
          {isPet ? (
            <div className="font-nunito space-y-4 py-2">
              <h3>Idade: {data.idade}</h3>
              <h3>Porte: {data.porte}</h3>
              <h3>Sexo: {data.sexo}</h3>
              <h3>Espécie: {data.especie}</h3>
            </div>
          ) : (
            <div className="flex flex-col py-5 gap-2">
              <h3 className="font-medium font-nunito">Endereço: {data.endereco?.cidade}</h3>
              <h3 className="font-medium font-nunito">Bairro: {data.endereco?.bairro}</h3>
            </div>
          )}

          <div className="flex flex-row justify-between items-center">
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
            {auth.token && (
              <FontAwesomeIcon
                icon={favorito ? faHeartSolid : faHeartRegular}
                className="text-2xl cursor-pointer text-vermelho"
                onClick={handleFavoriteClick}
              />
            )}
          </div>

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
      </div>
    </div>
  );
};

export default Card;
