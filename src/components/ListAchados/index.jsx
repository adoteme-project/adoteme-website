import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CardList from "../CardListAchados";
import { faArrowLeft, faClose } from "@fortawesome/free-solid-svg-icons";
import AchadoDetails from "../AchadosDetails";
import { useState } from "react";

const ListAchados = ({ pets, show, onClose }) => {
  const [selectedPet, setSelectedPet] = useState(null);
  if (!show) {
    return null;
  }

  function handleBack() {
    setSelectedPet(null);
  }

  return (
    <div className="bg-branco border rounded-md p-3 w-[500px]">
      <div className="flex w-full justify-between items-center mb-2">
        <h3 className="text-2xl mb-2">
          {selectedPet ? selectedPet.nome : "Pets Encontrados"}
        </h3>
        <div>
          {selectedPet && (
            <FontAwesomeIcon
              icon={faArrowLeft}
              onClick={handleBack}
              className="cursor-pointer mr-4 text-xl"
            />
          )}
          <FontAwesomeIcon
            icon={faClose}
            onClick={onClose}
            className="cursor-pointer text-xl"
          />
        </div>
      </div>

      <div className="overflow-y-auto h-[400px] no-scrollbar">
        {selectedPet ? (
          <div>
            <AchadoDetails pet={selectedPet} />
          </div>
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
