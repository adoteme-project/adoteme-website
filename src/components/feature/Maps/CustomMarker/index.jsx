import { AdvancedMarker } from "@vis.gl/react-google-maps";
import { useCallback } from "react";

const CustomMarker = (props) => {
  const { pet, onClick, setMarkerRef } = props;
  const position = {lat: pet.latitude, lng: pet.longitude}

  const handleShowInfo = useCallback(() => onClick(pet), [onClick, pet]);
    
  const ref = useCallback(
    (marker) => setMarkerRef(marker, pet.id),
    [setMarkerRef, pet.id]
  );

  return (
    <AdvancedMarker position={position} ref={ref} onClick={handleShowInfo}>
      <span className="text-2xl">{pet.especie === 'Cachorro'.toUpperCase() ? `🐶` : `🐱`}</span>
    </AdvancedMarker>
  );
};

export default CustomMarker;
