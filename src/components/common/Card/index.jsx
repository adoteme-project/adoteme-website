import Botao from "@/components/common/Button";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ colorBg, data = [], onDoarClick,tipoCard }) => {
  const [favorito,setFavorito] = useState(false);
  const isPet = tipoCard === 'animal' || data.personalidade?.length > 0;

  const handleFavoriteClick = () => {
    setFavorito(!favorito);
  }

  return (
    <div className="w-[41vw] h-[50.59vh] bg-beje rounded-lg grid grid-cols-2 gap-4 px-5 py-3 mb-5">
      <div className="h-[41.88vh] flex flex-col justify-center items-center py-4">
        <img
          src={data.imagem}
          alt={
            isPet
              ? "Imagem do animal que está disponível para adoção"
              : "Imagem da ONG"
          }
          className="w-[19.68vw] h-[40.68vh] rounded-lg"
        />
        {isPet && <p>A {data.distancia || "N/A"} de distância</p>}
      </div>
      <div>
        <h1
          style={{ backgroundColor: `${colorBg}` }}
          className="w-full h-[7.52vh] text-left px-2 font-roboto text-2xl flex items-center"
        >
          {data.nome}
        </h1>
        <div className="font-roboto flex flex-col gap-3">
          {isPet ? (
            <>
              <div className="font-nunito space-y-4 py-2">
                <h3>Idade: {data.idade}</h3>
                <h3>Tamanho: {data.porte}</h3>
                <h3>Sexo: {data.sexo}</h3>
                <h3>Espécie: {data.especie}</h3>
              </div>
            </>
          ) : (
            <>
              <div className="flex flex-col py-5 gap-2">
                <h3 className="font-medium font-nunito ">
                  Endereço: {data.endereco.cidade}
                </h3>
                <h3 className="font-medium font-nunito">
                  Bairro: {data.endereco.bairro}
                </h3>
              </div>
            </>
          )}

          {isPet ? ( 
            <>
            <div className="flex flex-row justify-between items-center">
              <Link to={`/pagina-pet/${data.id}`}>
                <Botao
                  textColor="#FFFFFF"
                  color="#4C8EB5"
                  tamanho="150"
                  altura="40"
                  nome="Ver mais"
                  titulo={isPet ? "Saiba mais" : "Ver mais"}
                />
              </Link>
              <FontAwesomeIcon
                icon={favorito ? faHeartSolid : faHeartRegular}
                className="text-2xl cursor-pointer text-vermelho"
                onClick={handleFavoriteClick}
              />
            </div>
            </>
          ) : (
            <div className="flex gap-2">
              <Link to={`/pagina-ong/${data.id}`}>
                <Botao
                  textColor="#FFFFFF"
                  color="#FFC55E"
                  tamanho="150"
                  altura="40"
                  nome="Ver mais"
                  titulo="Ver mais"
                />
              </Link>
              <Botao
                textColor="#FFFFFF"
                color="#C6D668"
                tamanho="150"
                altura="40"
                nome="Doar"
                titulo="Doar"
                onClick={onDoarClick}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;

