import {
  AdvancedMarker,
  APIProvider,
  ControlPosition,
  Map,
  MapControl,
  Pin,
  useAdvancedMarkerRef,
} from "@vis.gl/react-google-maps";
import { useEffect, useState } from "react";
import { PlaceAutocomplete } from "../PlaceAutocomplete";
import { MapHandler } from "../MapHandler";
import ClusteredPetsMarkers from "../ClusterMarker";
import ListAchados from "../ListAchados";
import useModal from "../../hooks/useModal";

const MapaAchados = () => {
  const posicao = { lat: -23.43896506940708, lng: -46.53214115945167 };

  const [markerRef, marker] = useAdvancedMarkerRef();

  const [selectedPlace, setSelectedPlace] = useState(null);

  const [pets, setPets] = useState([]);
  const [nearbyPets, setNearbyPets] = useState([]);

  const [isShowingModal, toogleModal] = useModal();

  useEffect(() => {
    fetch("/pets.json")
      .then((response) => response.json())
      .then((data) => setPets(data))
      .catch((error) => console.error("Erro json pets", error));
  }, []);

  const handlePlaceSelect = (place) => {
    setSelectedPlace(place);

    if (!isShowingModal) {
      toogleModal(); 
    }
  };

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
              <PlaceAutocomplete onPlaceSelect={handlePlaceSelect} />
            </div>
          </MapControl>

          <MapControl position={ControlPosition.RIGHT_CENTER}>
            <ListAchados
              pets={nearbyPets}
              show={isShowingModal}
              onClose={toogleModal}
            />
          </MapControl>

          <ClusteredPetsMarkers pets={pets} />

          <AdvancedMarker ref={markerRef} position={null}>
            <Pin />
          </AdvancedMarker>
        </Map>
        <MapHandler
          place={selectedPlace}
          marker={marker}
          pets={pets}
          setNearbyPets={setNearbyPets}
        />
      </div>
    </APIProvider>
  );
};

export default MapaAchados;
