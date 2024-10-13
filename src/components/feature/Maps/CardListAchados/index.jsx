import { DEFAULT_IMAGE } from "@/mocks/petsMocks";
import { getPetPerdidoPorId } from "@/services/pets";


const CardList = ({ pet, chosenPet }) => {

  const enderecoFormatado = `${pet.ruaPerdido} ${pet.bairroPerdido}, ${pet.cidadePerdido}, ${pet.estadoPerdido}`

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
    <div 
    className="bg-branco rounded-lg shadow-sm p-3 flex gap-5 w-full mb-3
    cursor-pointer" 
    onClick={fetchPetPerdidoPorId}>
      <img
        src={pet ? pet.imagem : DEFAULT_IMAGE}
        alt="Pet Perdido"
        className="h-36 w-40 rounded-xl"
      />
      <div className="flex flex-col justify-between items-start">
        <h3 className="bg-beje p-2 rounded-lg text-lg w-fit font-semibold">{pet.raca ?? "Vira-Lata"}</h3>
        <ul>
          <li className="text-sm">Encontrado em: {pet ? enderecoFormatado : "Rua exemplo..."}</li>
          <li className="text-sm">Sexo: {pet ? pet.sexo : 'Masculino'}</li>
          <li className="text-sm">Data de resgate: {pet ? pet.dataResgate : '01/01/2024'}</li>
        </ul>
      </div>
    </div>
  );
};

export default CardList;
