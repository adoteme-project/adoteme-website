const CardList = ({pet, chosenPet}) => {
  return (
    <div className="border shadow-sm p-3 flex gap-5 w-full mb-3">
      <img
        src="https://res.cloudinary.com/dddkrjki9/image/upload/v1726367700/pet_noha.png"
        alt="Pet Perdido"
        className="h-36 w-40"
      />
      <div className="flex flex-col justify-between">
        <h3 className="text-xl">{pet.nome}</h3>
        <ul>
          <li className="text-sm">Endereço</li>
          <li className="text-sm">Gênero: Masculino</li>
          <li className="text-sm">Data de resgate: {pet.dataResgate}</li>
        </ul>
        <button className="inline-block rounded bg-azul-main px-6 py-2 text-sm font-medium 
        text-white transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring 
        active:bg-azul-main text-branco" onClick={chosenPet}>
            Saiba mais
        </button>
      </div>
    </div>
  );
};

export default CardList;
