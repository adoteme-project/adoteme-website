import { DEFAULT_IMAGE } from "@/mocks/petsMocks";
import { getPetPerdidoPorId } from "@/services/pets";


const CardList = ({ pet, chosenPet }) => {

  const fetchPetPerdidoPorId = async () => {
    try {
      const response = await getPetPerdidoPorId(pet.id);
      console.log(response.data);
      chosenPet(response.data);
    } catch (error) {
      console.error("Erro ao trazer os pets perdidos: ", error);
    }
  };


  return (
    <div className="bg-branco rounded-lg shadow-sm p-3 flex gap-5 w-full mb-3">
      <img
        src={pet ? pet.fotoPerfil.url : DEFAULT_IMAGE}
        alt="Pet Perdido"
        className="h-36 w-40 rounded-xl"
      />
      <div className="flex flex-col justify-between items-start">
        <h3 className="bg-beje p-2 rounded-lg text-lg w-fit font-semibold">{pet.raca ?? "Vira-Lata"}</h3>
        <ul>
          <li className="text-sm">Endereço: {pet ? pet.endereco : "Rua exemplo..."}</li>
          <li className="text-sm">Sexo: {pet ? pet.sexo : 'Masculino'}</li>
          <li className="text-sm">Data de resgate: {pet ? pet.cadastro : '01/01/2024'}</li>
        </ul>
        <button className="inline-block rounded bg-azul-main px-6 py-2 text-sm font-medium 
        text-white transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring 
        active:bg-azul-main text-branco" onClick={fetchPetPerdidoPorId}>
          Saiba mais
        </button>
      </div>
    </div>
  );
};

export default CardList;
