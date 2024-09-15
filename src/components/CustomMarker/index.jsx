import { AdvancedMarker } from "@vis.gl/react-google-maps";
import { useCallback } from "react";

const CustomMarker = (props) => {
    const {pets, onClick, setMarkerRef} = props;

    const handleShowInfo = useCallback(() => onClick(pets), [onClick, pets]);

    const ref = useCallback(
        (marker) => setMarkerRef(marker, pets.key),
        [setMarkerRef, pets.key]
    )

    return (
        <AdvancedMarker position={props.position} ref={ref} onClick={handleShowInfo}>
            <span className="text-2xl">🐶</span>
        </AdvancedMarker>
    )
}

export default CustomMarker;