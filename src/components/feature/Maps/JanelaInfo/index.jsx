import { InfoWindow } from "@vis.gl/react-google-maps";

const JanelaInfo = ({ posicao, setOpen, pet }) => {
  return (
    <InfoWindow
      position={posicao}
      onCloseClick={() => setOpen(false)}
      maxWidth={450}
    >
      <div className="flex gap-4">
        <img
          src="https://res.cloudinary.com/dddkrjki9/image/upload/v1726367700/pet_noha.png"
          alt="Pet perdido"
          className="h-28 w-36"
        />
        <div className="flex flex-col justify-between gap-3 h-fit">
          <h3 className="text-2xl font-medium bg-beje p-1 rounded-xl w-fit">
            {pet.raca ?? "Vira-Lata"}
          </h3>
          <div className="flex flex-col gap-2">
            <p>
              <span className="font-bold">Endereço: </span>
              Rua Petrópolis Jardim Iporanga, Guarulhos - SP
            </p>
            <p>
              <span className="font-bold">Data de resgate: </span>
              {pet.dataResgate ?? "01/01/2024"}
            </p>
          </div>
        </div>
      </div>
    </InfoWindow>
  );
};

export default JanelaInfo;
