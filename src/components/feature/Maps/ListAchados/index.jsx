import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CardList from "../CardListAchados";
import { faArrowLeft, faClose } from "@fortawesome/free-solid-svg-icons";
import AchadoDetails from "../AchadosDetails";
import { useState, useEffect } from "react";
import { MoonLoader } from "react-spinners";

const ListAchados = ({ pets, show, onClose, endereco }) => {
  const [selectedPet, setSelectedPet] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (pets.length > 0) {
      setTimeout(() => setLoading(false), 1000);
    }
  }, [pets]);

  if (!show) {
    return null;
  }

  function handleBack() {
    setSelectedPet(null);
  }

  return (
    <div className="bg-beje rounded-lg p-5 shadow-lg font-nunito mr-8
      sm:h-[150px] sm:w-[100px] md:h-[200px] md:w-[150px] 
      lg:h-[400px] lg:w-[300px] xl:h-[500px] xl:w-[450px] 2xl:h-[550px] 2xl:w-[600px]">
      <div className="flex w-full justify-between mb-2">
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-bold">
            {selectedPet ? selectedPet.raca : "Pets Encontrados"}
          </h3>
          {!selectedPet && (
            <div>
              <h4 className="text-azul-main text-xl">Pets da região</h4>
              <p className="text-base">
                {`Foram encontrados ${pets.length} pets próximos de ${endereco ?? 'nome da região'}`}
              </p>
            </div>
          )}
        </div>
        <div>
          {selectedPet && (
            <FontAwesomeIcon
              icon={faArrowLeft}
              onClick={handleBack}
              className="cursor-pointer mr-4 text-lg"
            />
          )}
          <FontAwesomeIcon
            icon={faClose}
            onClick={onClose}
            className="cursor-pointer text-lg"
          />
        </div>
      </div>

      <div className="overflow-y-auto max-h-[calc(100%-100px)] no-scrollbar">
        {loading ? (
          <div className="flex justify-center items-center h-[300px]">
            <MoonLoader speedMultiplier={1}/>
          </div>
        ) : selectedPet ? (
          <AchadoDetails pet={selectedPet} />
        ) : (
          <div>
            {pets.map((pet) => (
              <CardList
                key={pet.id}
                pet={pet}
                chosenPet={() => setSelectedPet(pet)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ListAchados;
