import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CardList from "../CardListAchados";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const ListAchados = ({ pets, show, onClose}) => {

    if(!show) {
        return null;
    }

  return (
    <div className="bg-branco border rounded-md p-3 w-[500px]">
      <div className="flex w-full justify-between items-center">
        <h3 className="text-2xl mb-2"> Pets encontrados </h3>
        <FontAwesomeIcon icon={faClose} onClick={onClose}/>
      </div>

      <h4 className="text-xl mb-2"> Endereço </h4>
      <div className="overflow-y-auto h-[350px]">
        {pets.map((pet) => (
          <CardList key={pet.key} pet={pet} />
        ))}
      </div>
    </div>
  );
};

export default ListAchados;
