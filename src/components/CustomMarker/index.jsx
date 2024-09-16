import { AdvancedMarker } from "@vis.gl/react-google-maps";
import { useCallback } from "react";

const CustomMarker = (props) => {
  const { pet, onClick, setMarkerRef } = props;

  const handleShowInfo = useCallback(() => onClick(pet), [onClick, pet]);
    
  const ref = useCallback(
    (marker) => setMarkerRef(marker, pet.key),
    [setMarkerRef, pet.key]
  );

  return (
    <AdvancedMarker position={pet.position} ref={ref} onClick={handleShowInfo}>
      <span className="text-2xl">🐶</span>
    </AdvancedMarker>
  );
};

export default CustomMarker;
