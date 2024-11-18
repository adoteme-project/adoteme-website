import { DEFAULT_IMAGE } from "@/mocks/petsMocks";
import { InfoWindow } from "@vis.gl/react-google-maps";

const JanelaInfo = ({ setOpen, pet, enderecoFormatado}) => {
  const position = {lat: pet.latitude, lng: pet.longitude}

  return (
    <InfoWindow
      position={position}
      onCloseClick={() => setOpen(false)}
      maxWidth={450}
    >
      <div className="flex gap-4">
        <img
          src={pet ? pet.imagem : DEFAULT_IMAGE}
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
              Liberdade, São Paulo 
            </p>
            <p>
              <span className="font-bold">Data de resgate: </span>
              {pet.cadastro ?? "01/01/2024"}
            </p>
          </div>
        </div>
      </div>
    </InfoWindow>
  );
};

export default JanelaInfo;
