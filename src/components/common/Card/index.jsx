import Botao from "@/components/common/Button";
import Avaliacao from "@/components/feature/Rating";

const Card = ({ colorBg, data = [], onDoarClick }) => {
  const isPet = !!data.personalidade; // Verifica se é um pet

  return (
    <div className="w-[41vw] h-[50.59vh] bg-beje rounded-lg grid grid-cols-2 gap-4 px-5 py-3 mb-5">
      <div className="h-[41.88vh] flex flex-col justify-center items-center py-4">
        <img
          src={data.imagem}
          alt={isPet ? "Imagem do animal que está disponível para adoção" : "Imagem da ONG"}
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
              <h3>Idade: {data.idade}</h3>
              {data.personalidade?.map((p, index) => (
                <div key={index}>
                  <h3>{p.primeiraPersonalidade || p.segundaPersonalidade}:</h3>
                  <Avaliacao
                    avaliacao={p.valor}
                    cor={index === 0 ? "#A9B949" : "#EC5A49"}
                  />
                </div>
              ))}
            </>
          ) : (
            <>
            <div className="flex flex-col py-5 gap-2">
              <h3 className="font-medium font-nunito ">Endereço: {data.endereco}</h3>
              <h3 className="font-medium font-nunito">Descrição: {data.descricao}</h3>
            </div>
            </>
          )}

          {isPet ? (
            <Botao
              textColor="#FFFFFF"
              color="#4C8EB5"
              tamanho="150"
              altura="40"
              nome="Ver mais"
              titulo="Saiba mais"
            />
          ) : (
            <div className="flex gap-2">
              <Botao
                textColor="#FFFFFF"
                color="#FFC55E"
                tamanho="150"
                altura="40"
                nome="Ver mais"
                titulo="Ver mais"
              />
              {/* Quando clicar no botão Doar, chama a função onDoarClick */}
              <Botao
                textColor="#FFFFFF"
                color="#4C8EB5"
                tamanho="150"
                altura="40"
                nome="Doar"
                titulo="Doar"
                onClick={onDoarClick} // Chama a função do modal ao clicar
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
