const AchadoDetails = ({pet}) => {
  return (
    <div className="w-full flex flex-col gap-5">
      <img
        src="https://res.cloudinary.com/dddkrjki9/image/upload/v1726367700/pet_noha.png"
        alt="Pet Perdido"
        className="h-56 w-full"
      />
      <div className="border w-full">
        <div className="flex flex-col gap-2 p-2">
          <h3 className="text-xl">Detalhes Pet</h3>
          <div className="w-full grid grid-cols-2 bg-azul-">
            <div className="text-sm"> Gênero: {pet.genero ?? '?'} </div>
            <div className="text-sm"> Tipo: {pet.tipo ?? 'Cachorro'} </div>
            <div className="text-sm"> Raça: {pet.raca ?? 'Vira-lata'} </div>
            <div className="text-sm"> Data de resgate: {pet.dataResgate ?? '18/09/2024'} </div>
            <div className="text-sm"> Tamanho: {pet.tamanho ?? 'Médio'} </div>
            <div className="text-sm"> Endereço: {pet.endereço ?? 'rua -----'} </div>
          </div>
          <h3 className="text-xl">Descrição </h3>
          <p className="text-xs">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non nemo
            voluptatem necessitatibus eaque velit, animi sint minima consequatur
            ipsum eligendi delectus vel fugit obcaecati consectetur aperiam? Ab
            culpa earum voluptates.
          </p>
        </div>
      </div>
      <div className="border w-full p-2 flex flex-col gap-2">
      <h3 className="text-xl"> Contato Ong </h3>
          <div className="w-full grid grid-cols-2">
            <div className="text-sm"> Nome Ong: {pet.ong ?? 'Cão sem Dono'} </div>
            <div className="text-sm"> Celular: {pet.celular ?? '(11) 99999-9999'} </div>
            <div className="text-sm"> Endereço: {pet.enderecoOng ?? 'rua ------'} </div>
            <div className="text-sm"> Telefone: {pet.telefone ?? '(11) 9999-9999'} </div>
            <div className="text-sm"> email: {pet.email ?? 'email@exemplo.com'} </div>
          </div>
        </div>
    </div>
  );
};

export default AchadoDetails;
