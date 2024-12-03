import { useParams } from "react-router-dom";
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
import ModalAdocao from "@/components/feature/AdotarPet/ModalAdoacao";
import { MoonLoader } from "react-spinners";

const PaginaPet = () => {
  const { id } = useParams();
  const { sugestoes } = useCardContext();
  const [animal, setAnimal] = useState(null);
  const [animalImg, setAnimalImg] = useState([]);
  const [active, setActive] = useState(null);
  const [isShowing, toggleModal] = useModal();
  const { auth } = useContext(AuthContext);
  const cores = ["#FFC55E", "#A9B949", "#B2DED3", "#EC5A49"];

  useEffect(() => {
    if (sugestoes.length > 0) {
      const animalEncontrado = sugestoes
        .filter((sugestao) => sugestao.tipo === "animal")
        .find((animal) => animal.id === parseInt(id));

      if (animalEncontrado) {
        const imagensPet = [
          { imgelink: animalEncontrado.imagem },
          { imgelink: animalEncontrado.imagem2 },
          { imgelink: animalEncontrado.imagem3 },
          { imgelink: animalEncontrado.imagem4 },
          { imgelink: animalEncontrado.imagem5 },
        ].filter((img) => img.imgelink);

        setAnimalImg(imagensPet);
        setAnimal(animalEncontrado);
        setActive(imagensPet[0]?.imgelink || null);
      }
    }
  }, [id, sugestoes]);

  if (!animal) {
    window.scrollTo({top: 0})

    return (
      <div className="w-full flex justify-center h-[75vh]">
        <MoonLoader speedMultiplier={1} />
      </div>
    );
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

  return (
    <>
      <BreadCrumb
        tituloCaminho="Animais"
        tituloCaminho2="Página Pets"
        tituloCaminho3={animal.nome}
        cor="#B2DED3"
        caminho={`/pagina-pet/${animal.id}`}
      />

      <section className="p-10 bg-beje flex justify-center ">
        <div className="flex justify-evenly w-[95%] ">
          <div className="w-[35%] grid gap-4">
            <div>
              <img
                className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-96"
                src={active || animalImg[0]?.imgelink}
                alt="Imagem do animal"
              />
            </div>
            <div className="grid grid-cols-5 gap-4">
              {animalImg.map(({ imgelink }, index) => (
                <div key={index} className="flex justify-center">
                  <img
                    onClick={() => setActive(imgelink)}
                    src={imgelink}
                    className={`h-20 w-full cursor-pointer rounded-lg object-cover object-center ${
                      active === imgelink ? "border-2 border-blue-500" : ""
                    }`}
                    alt={`Imagem ${index + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="w-[35%]">
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

            <ul className="my-4 flex flex-col gap-1">
              <li><span className="text-lg font-semibold">Espécie: </span> {animal.especie}</li>
              <li><span className="text-lg font-semibold">Sexo: </span> {animal.sexo}</li>
              <li><span className="text-lg font-semibold">Idade: </span> {animal.idade}</li>
              <li><span className="text-lg font-semibold">Tamanho: </span> {animal.porte}</li>
            </ul>

            <div className="flex flex-col gap-3 mt-4 mb-4 w-[55%]">
              {Object.entries(animal.personalidade).map(([key, value]) => (
                <div key={key} className="flex items-center gap-4 justify-between">
                  {key.charAt(0).toUpperCase() + key.slice(1)}:
                  <Avaliacao avaliacao={value} cor="#A9B949" />
                </div>
              ))}
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

      <section className=" p-10 bg-branco py-12">
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
        <ModalAdocao isOpen={isShowing} onClose={toggleModal} />
      ) : (
        <ModalLogin isOpen={isShowing} onClose={toggleModal} />
      )}
    </>
  );
};

export default PaginaPet;