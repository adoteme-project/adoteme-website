import {
  AdvancedMarker,
  APIProvider,
  ControlPosition,
  Map,
  MapControl,
  Pin,
  useAdvancedMarkerRef,
} from "@vis.gl/react-google-maps";
import { useState } from "react";
import JanelaInfo from "../JanelaInfo";
import { PlaceAutocomplete } from "../PlaceAutocomplete";
import { MapHandler } from "../MapHandler";

const MapaAchados = () => {
  const posicao = { lat: -23.43896506940708, lng: -46.53214115945167 };

  const [open, setOpen] = useState(false);
  const [markerRef, marker] = useAdvancedMarkerRef();

  const [selectedPlace, setSelectedPlace] = useState(null);

  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <div className="w-full flex justify-center">
        <Map
          style={{ width: "90%", height: "100vh" }}
          zoom={19}
          mapId={import.meta.env.VITE_MAP_ID}
          defaultCenter={posicao}
          disableDefaultUI={true}
        >
          <MapControl position={ControlPosition.TOP}>
            <div className="m-6 bg-branco w-[500px] flex justify-center">
              <PlaceAutocomplete onPlaceSelect={setSelectedPlace} />
            </div>
          </MapControl>
          <AdvancedMarker
            ref={markerRef}
            position={null}
            onClick={() => setOpen(true)}
          >
            <Pin background={"#FFC55E"} />
          </AdvancedMarker>
        </Map>
        <MapHandler place={selectedPlace} marker={marker} />
        {open && <JanelaInfo posicao={posicao} setOpen={setOpen} />}
      </div>
    </APIProvider>
  );
};

export default MapaAchados;
