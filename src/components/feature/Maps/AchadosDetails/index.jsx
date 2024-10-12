const AchadoDetails = ({pet}) => {
  return (
    <div className="w-full flex flex-col gap-5">
      <img
        src="https://res.cloudinary.com/dddkrjki9/image/upload/v1726367700/pet_noha.png"
        alt="Pet Perdido"
        className="h-56 w-full"
      />
      <div className="bg-branco rounded-lg w-full">
        <div className="flex flex-col gap-2 p-2">
          <h3 className="text-xl">Detalhes Pet</h3>
          <div className="w-full grid grid-cols-2 bg-azul-">
            <div className="text-sm">
               <span className="font-semibold">Gênero: </span>{pet.genero ?? '?'}</div>
            <div className="text-sm">
               <span className="font-semibold">Tipo: </span>{pet.tipo ?? 'Cachorro'}</div>
            <div className="text-sm">
               <span className="font-semibold">Raça: </span>{pet.raca ?? 'Vira-lata'}</div>
            <div className="text-sm">
               <span className="font-semibold">Data de resgate: </span>{pet.dataResgate ?? '18/09/2024'}</div>
            <div className="text-sm">
               <span className="font-semibold">Tamanho: </span>{pet.tamanho ?? 'Médio'}</div>
            <div className="text-sm">
               <span className="font-semibold">Endereço: </span>{pet.endereço ?? 'rua -----'}</div>
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
      <div className="bg-branco rounded-lg w-full p-2 flex flex-col gap-2">
      <h3 className="text-xl"> Contato Ong </h3>
          <div className="w-full grid grid-cols-2">
            <div className="text-sm">
               <span className="font-semibold">Nome Ong: </span>{pet.ong ?? 'Cão sem Dono'} </div>
            <div className="text-sm">
               <span className="font-semibold">Celular: </span>{pet.celular ?? '(11) 99999-9999'} </div>
            <div className="text-sm">
               <span className="font-semibold">Endereço: </span>{pet.enderecoOng ?? 'rua ------'} </div>
            <div className="text-sm">
               <span className="font-semibold">Telefone: </span>{pet.telefone ?? '(11) 9999-9999'} </div>
            <div className="text-sm">
               <span className="font-semibold">Email: </span>{pet.email ?? 'email@exemplo.com'} </div>
          </div>
        </div>
    </div>
  );
};

export default AchadoDetails;
