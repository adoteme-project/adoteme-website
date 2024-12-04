import { useParams } from "react-router-dom";
import { postRequisicaoAdocao } from "@/services/adotanteAPI";
import { useContext, useEffect, useState } from "react";
import BreadCrumb from "@/components/common/BreadCrumb";
import Card from "@/components/common/Card";
import Doacao from "@/components/section/Donation";
import Avaliacao from "@/components/feature/Rating";
import { useCardContext } from "@/context/CardProvider";
import Botao from "@/components/common/Button";
import Carousel from "@/components/common/Carrossel";
import AuthContext from "@/context/AuthProvider";
import useModal from "@/hooks/useModal";
import ModalLogin from "@/components/common/ModalLogin";
import ModalAdocao from "@/components/feature/AdotarPet/ModalAdoacao/index";
import { toast } from "react-toastify";

const PaginaPet = () => {
  const { id } = useParams();
  const { sugestoes } = useCardContext();
  const [animal, setAnimal] = useState(null);
  const [isShowing, toggleModal] = useModal();
  const { auth } = useContext(AuthContext);
  const cores = ["#FFC55E", "#A9B949", "#B2DED3", "#EC5A49"];

  console.log("id:", id);
  console.log("id adotante: ", auth?.userData?.id );
  useEffect(() => {
    if (sugestoes.length > 0) {
      const animalEncontrado = sugestoes
        .filter((sugestao) => sugestao.tipo === "animal")
        .find((animal) => animal.id === parseInt(id));

      if (animalEncontrado) {
        setAnimal(animalEncontrado);
      }
    }
  }, [id, sugestoes]);

  if (!animal) {
    return <p>Carregando...</p>;
  }

  const generatePastelColorFromString = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";
    for (let i = 0; i < 3; i++) {
      const value = ((hash >> (i * 8)) & 0xff) + 127;
      color += ("00" + (value % 256).toString(16)).slice(-2);
    }
    return color;
  };

  const handleAdoptAnimal = async ()=> {
    const IdAdotante = auth?.userData?.id;
    const IdAnimal = id;
    try{
        const response = await postRequisicaoAdocao(
            IdAdotante,
            IdAnimal
        );
        console.log("Requisicao feita com sucesso!", response.data);
        toast.success("Sua solicitação foi feita com sucesso!");

    }catch(error){
        console.error("Erro ao fazer a adoção", error);
        toast.error("Erro ao realizar a adoção. Tente novamente.")
    };
  }

  return (
    <>
      <BreadCrumb
        tituloCaminho="Animais"
        tituloCaminho2="Página Pets"
        tituloCaminho3={animal.nome}
        cor="#B2DED3"
        caminho={`/pagina-pet/${animal.id}`}
      />

      <section className="p-10 bg-beje">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="flex flex-col items-center">
            <img
              src={animal.imagem}
              alt={`Imagem de ${animal.nome}`}
              className="w-[350px] h-auto rounded-lg"
            />
            <div className="flex gap-4 mt-4 justify-center">
              <img
                src={animal.imagem}
                alt="Miniatura 1"
                className="w-20 h-20 rounded-lg"
              />
              <img
                src={animal.imagem}
                alt="Miniatura 2"
                className="w-20 h-20 rounded-lg"
              />
              <img
                src={animal.imagem}
                alt="Miniatura 3"
                className="w-20 h-20 rounded-lg"
              />
            </div>
          </div>

          <div>
            <h1
              className="text-4xl font-bold inline-block px-4 py-1"
              style={{
                backgroundColor: generatePastelColorFromString(animal.nome),
                paddingLeft: "16px",
                paddingRight: "200px",
                borderRadius: "4px",
              }}
            >
              {animal.nome}
            </h1>
            <p className="text-lg mt-2">{animal.localizacao}</p>
            <p className="mt-2">Espécie: {animal.especie}</p>
            <p>Sexo: {animal.sexo}</p>
            <p>Idade: {animal.idade}</p>
            <p>Tamanho: {animal.porte}</p>

            <div className="flex flex-col gap-4 mt-4 mb-4 w-[40%]">
              <div className="flex items-center gap-4 justify-between">
                Energia:
                <Avaliacao
                  avaliacao={animal.personalidade.energia}
                  cor="#A9B949"
                />
              </div>
              <div className="flex items-center gap-4 justify-between">
                Sociável:
                <Avaliacao
                  avaliacao={animal.personalidade.sociabilidade}
                  cor="#A9B949"
                />
              </div>
              <div className="flex items-center gap-4 justify-between">
                Tolerante:
                <Avaliacao
                  avaliacao={animal.personalidade.tolerante}
                  cor="#A9B949"
                />
              </div>
              <div className="flex items-center gap-4 justify-between">
                Obediente:
                <Avaliacao
                  avaliacao={animal.personalidade.obediente}
                  cor="#A9B949"
                />
              </div>
              <div className="flex items-center gap-4 justify-between">
                Territorialista:
                <Avaliacao
                  avaliacao={animal.personalidade.territorial}
                  cor="#A9B949"
                />
              </div>
              <div className="flex items-center gap-4 justify-between">
                Inteligente:
                <Avaliacao
                  avaliacao={animal.personalidade.inteligencia}
                  cor="#A9B949"
                />
              </div>
            </div>

            <Botao
              className="bg-amarelo text-white py-2 px-6 rounded-lg"
              titulo="Adotar"
              color="#4C8EB5"
              textColor="white"
              fontWeight="bold"
              onClick={toggleModal}
            />
          </div>
        </div>
      </section>

      <section className=" p-10 bg-branco">
        <h2 className="text-3xl font-bold mb-6 text-center">Sugestão</h2>
        {sugestoes.length > 0 ? (
          <Carousel
            items={sugestoes
              .filter((sugestao) => sugestao.tipo === "animal")
              .slice(0, 8)}
            renderItem={(sugestao) => (
              <Card
                key={sugestao.id}
                data={sugestao}
                tipoCard="animal"
                colorBg={cores[sugestao.id % cores.length]}
              />
            )}
            slidesPerView={2}
            spaceBetween={10}
          />
        ) : (
          <p>Nenhuma sugestão disponível no momento.</p>
        )}
      </section>
      <Doacao />
      {auth?.token ? (
        <ModalAdocao isOpen={isShowing} onClose={toggleModal} handleAdoptAnimal={handleAdoptAnimal} />
      ) : (
        <ModalLogin isOpen={isShowing} onClose={toggleModal} />
      )}
    </>
  );
};

export default PaginaPet;
