import { DEFAULT_IMAGE, DESCRICAO_LOREM } from "@/mocks/petsMocks";


const AchadoDetails = ({ pet }) => {

  const endereco = `${pet.ruaPerdido}, ${pet.bairroPerdido}, ${pet.cidadePerdido}, ${pet.estadoPerdido}`

  return (
    <div className="w-full flex flex-col gap-5">
      <img
        src={pet ? pet.imagem : DEFAULT_IMAGE}
        alt="Pet Perdido"
        className="h-56 w-full"
      />
      <div className="bg-branco rounded-lg w-full">
        <div className="flex flex-col gap-2 p-2">
          <h3 className="text-xl">Detalhes Pet</h3>
          <div className="w-full grid grid-cols-2 bg-azul-">
            <div className="text-sm">
              <span className="font-semibold">Sexo: </span>{pet.sexo ?? '?'}</div>
            <div className="text-sm">
              <span className="font-semibold">Tipo: </span>{pet.especie ?? 'Cachorro'}</div>
            <div className="text-sm">
              <span className="font-semibold">Raça: </span>{pet.raca ?? 'Vira-lata'}</div>
            <div className="text-sm">
              <span className="font-semibold">Data de resgate: </span>{pet.dataResgate ?? '18/09/2024'}</div>
            <div className="text-sm">
              <span className="font-semibold">Porte: </span>{pet.porte ?? 'Médio'}</div>
            <div className="text-sm">
              <span className="font-semibold">Endereço: </span>{pet.endereco ?? 'rua -----'}</div>
          </div>
          <h3 className="text-xl">Descrição </h3>
          <p className="text-xs">
            {pet ? pet.descricao : DESCRICAO_LOREM}
          </p>
        </div>
      </div>
      <div className="bg-branco rounded-lg w-full p-2 flex flex-col gap-2">
        <h3 className="text-xl"> Contato Ong </h3>
        <div className="w-full grid grid-cols-2">
          <div className="text-sm">
            <span className="font-semibold">Nome Ong: </span>{pet.nomeOng ?? 'Cão sem Dono'} </div>
          <div className="text-sm">
            <span className="font-semibold">Telefone: </span>{pet.telefone ?? '(11) 99999-9999'} </div>
          <div className="text-sm">
            <span className="font-semibold">Endereço: </span>{endereco ?? 'Endereco'} </div>
          <div className="text-sm">
            <span className="font-semibold">Email: </span>{pet.email ?? 'email@exemplo.com'} </div>
        </div>
      </div>
    </div>
  );
};

export default AchadoDetails;