import Botao from "@/components/common/Button";
import Avaliacao from "@/components/feature/Rating";

const Card = ({ colorBg, data = {} }) => {
  const isPet = !!data.personalidade; // Um atributo que seja exclusivo de pet (!! operador para checkar vazio)
  return (
    <div className="w-[41vw] h-[50.59vh] bg-beje rounded-lg grid grid-cols-2 gap-4 px-5 py-3 mb-5">
      <div className="h-[41.88vh] flex flex-col justify-center items-center py-4">
        <img
          src={data.imagem} // O mesmo atributo não precisa de validação
          alt={isPet ? "Imagem do animal que está disponível para adoção" : "Imagem da ONG"}
          className="w-[19.68vw] h-[40.68vh] rounded-lg"
        />
        {isPet && <p>A {data.distancia || 'N/A'} de distância</p>}
      </div>
      <div>
        <h1
          style={{ backgroundColor: `${colorBg}` }}
          className="w-full h-[7.52vh] text-left px-2 font-roboto text-2xl flex items-center"
        >
          {data.nome} {/* O mesmo atributo não precisa de validação */}
        </h1>
        <div className="font-roboto flex flex-col gap-3">
          {isPet ? (
            <>
              <h3>Idade: {data.idade}</h3>
              {data.personalidade?.map((p, index) => (
                <div key={index}>
                  <h3>{p.primeiraPersonalidade || p.segundaPersonalidade}:</h3>
                  <Avaliacao avaliacao={p.valor} cor={index === 0 ? "#A9B949" : "#EC5A49"} />
                </div>
              ))}
            </>
          ) : (
            <>
              <h3>Localização: {data.endereco}</h3>
              <h3>Contato: {data.descricao}</h3>
            </>
          )}
          <Botao
            textColor="#FFFFFF"
            color={isPet ? "#4C8EB5" : "#FFC55E"}
            tamanho="150"
            altura="40"
            nome="Ver mais"
            titulo={isPet ? "Saiba mais" : "Conheça a ONG"}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;