import { InfoWindow } from "@vis.gl/react-google-maps";

const JanelaInfo = ({posicao, setOpen}) => {
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
          className="h-32 w-36"
        />
        <div>
          <h3 className="text-2xl font-bold"> Nome pet </h3>
          <p>Endereço: Rua Petrópolis Jardim Iporanga, Guarulhos - SP</p>
          <p>Data de resgate: 14/09/2024</p>
        </div>
      </div>
    </InfoWindow>
  );
};

export default JanelaInfo;
