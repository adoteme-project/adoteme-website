import {
  AdvancedMarker,
  APIProvider,
  ControlPosition,
  Map,
  MapControl,
  Pin,
  useAdvancedMarkerRef,
} from "@vis.gl/react-google-maps";
import React, { useEffect, useState } from "react";
import { PlaceAutocomplete } from "../PlaceAutocomplete";
import { MapHandler } from "../MapHandler";
import ClusteredPetsMarkers from "../ClusterMarker";
import ListAchados from "../ListAchados";
import useModal from "../../hooks/useModal";
import useGeolocation from "../../hooks/useGeolocation";
import { useLocation } from "react-router-dom";

const MapaAchados = () => {
  const { position, error: geoError } = useGeolocation();

  const {state} = useLocation();
  const defaultPosition = { lat: -23.43896506940708, lng: -46.53214115945167 };
  const [mapCenter, setMapCenter] = useState(state?.mapCenter || defaultPosition);
  const [pets, setPets] = useState([])

  const [markerRef, marker] = useAdvancedMarkerRef();
  const [selectedPlace, setSelectedPlace] = useState(null);;
  const [nearbyPets, setNearbyPets] = useState([]);
  const [isShowingModal, toogleModal] = useModal();

  const ClusteredPetsMarkersMemo = React.memo(ClusteredPetsMarkers);
  const PlaceAutocompleteMemo = React.memo(PlaceAutocomplete);
  const ListAchadosMemo = React.memo(ListAchados);

  useEffect(() => {
    fetch("/pets.json")
      .then((response) => response.json())
      .then((data) => setPets(data))
      .catch((error) => console.error("Erro json pets", error));
  }, []);


  useEffect(() => {
    if (position) {
      setMapCenter(position);
    } else if (geoError) {
      setMapCenter(defaultPosition);
    }
  }, [position, geoError]);

  const handlePlaceSelect = (place) => {
    setSelectedPlace(place);
    if (!isShowingModal) toogleModal(); 
  };

  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <div className="w-full flex justify-center">
        <Map style={{ width: "100%", height: "100vh" }} zoom={19} mapId={import.meta.env.VITE_MAP_ID}
          defaultCenter={mapCenter} disableDefaultUI={true} reuseMaps={true}>
          <MapControl position={ControlPosition.TOP}>
            <div className="m-6 bg-branco w-[500px] flex justify-center">
              <PlaceAutocompleteMemo onPlaceSelect={handlePlaceSelect} />
            </div>
          </MapControl>

          <MapControl position={ControlPosition.RIGHT_CENTER}>
            <ListAchadosMemo pets={nearbyPets} show={isShowingModal} onClose={toogleModal}/>
          </MapControl>

          <ClusteredPetsMarkersMemo pets={pets} />

          <AdvancedMarker ref={markerRef} position={null} onClick={toogleModal}>
            <Pin />
          </AdvancedMarker>

        </Map>
        <MapHandler place={selectedPlace} marker={marker} pets={pets} setNearbyPets={setNearbyPets}/>
      </div>
    </APIProvider>
  );
};

export default MapaAchados;