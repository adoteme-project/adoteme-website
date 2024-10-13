import {
  AdvancedMarker,
  APIProvider,
  ControlPosition,
  Map,
  MapControl,
  Pin,
  useAdvancedMarkerRef,
} from "@vis.gl/react-google-maps";
import { useCallback, useEffect, useState } from "react";
import { PlaceAutocomplete } from "./PlaceAutocomplete";
import { MapHandler } from "./MapHandler";
import ClusteredPetsMarkers from "./ClusterMarker";
import useModal from "@/hooks/useModal";
import useGeolocation from "@/hooks/useGeolocation";
import { useLocation } from "react-router-dom";
import { getPetsPerdido } from "@/services/pets";
import ListAchados from "./ListAchados";


const MapaAchados = () => {
  const defaultPosition = { zoom: 19, center: { lat: -23.558052381604917, lng: -46.661807140459345 } };

  const { position, error: geoError } = useGeolocation();
  const { state } = useLocation();


  const [cameraProps, setCameraProps] = useState(state?.mapCenter || defaultPosition);
  const [pets, setPets] = useState([]);
  const [markerRef, marker] = useAdvancedMarkerRef();
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [nearbyPets, setNearbyPets] = useState([]);
  const [isShowingModal, toggleModal] = useModal();

  const handleCameraChange = useCallback(
    (ev) => setCameraProps(ev.detail),
    []
  );


  useEffect(() => {
    if (position && !geoError) {
      console.log(position)
      setCameraProps((prevCamera) => ({
        ...prevCamera,
        center: { lat: position.lat, lng: position.lng },
        zoom: 15,
      }));
    } else if (geoError) {
      console.error("Geolocation error: ", geoError);
      alert("Não foi possível acessar sua localização");
      setCameraProps(defaultPosition);
    }
  }, [position, geoError]);

  useEffect(() => {
    const fetchPetsPerdidos = async () => {
      try {
        const response = await getPetsPerdido();
        console.log(response.data);
        setPets(response.data);
      } catch (error) {
        console.log("Erro ao trazer os pets perdidos: ", error);
      }
    }

    fetchPetsPerdidos();
  }, [])

  const handlePlaceSelect = (place) => {
    setSelectedPlace(place);
    if (!isShowingModal) toggleModal();
  };

  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <div className="w-full flex justify-center relative">

        <Map
          style={{ width: "100%", height: "100vh" }}
          zoom={cameraProps.zoom}
          mapId={import.meta.env.VITE_MAP_ID}
          center={cameraProps.center}
          disableDefaultUI={true}
          onCameraChanged={handleCameraChange}
          reuseMaps={true}
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
                onClose={toggleModal}
              />
          </MapControl>

          <ClusteredPetsMarkers pets={pets} />

          <AdvancedMarker ref={markerRef} position={null} onClick={toggleModal}>
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
