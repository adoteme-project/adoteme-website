import { AdvancedMarker, APIProvider, InfoWindow, Map, Pin } from "@vis.gl/react-google-maps";
import { useState } from "react";

const MapaAchados = () => {
    const posicao = {lat: -23.43896506940708, lng: -46.53214115945167}
    const [open, setOpen] = useState(false);

  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <div className="w-full flex justify-center">
        <Map style={{width: '90%', height: '100vh'}} zoom={19} center={posicao} mapId={import.meta.env.VITE_MAP_ID}>
            <AdvancedMarker position={posicao} onClick={() => setOpen(true)}>
                <Pin background={"#FFC55E"}/>
            </AdvancedMarker>
        </Map>
        {open && (
            <InfoWindow position={posicao} onCloseClick={() => setOpen(false)} maxWidth={450}>
                <div className="flex gap-4">
                    <img src="https://res.cloudinary.com/dddkrjki9/image/upload/v1726367700/pet_noha.png" alt="Pet perdido" className="h-32 w-36"/>
                    <div>
                        <h3 className="text-2xl font-bold"> Nome pet </h3>
                        <p>Endereço: Rua Petrópolis Jardim Iporanga, Guarulhos - SP</p>
                        <p>Data de resgate: 14/09/2024</p>
                    </div>
                </div>
            </InfoWindow>
        )}
      </div>
    </APIProvider>
  );
};

export default MapaAchados;
