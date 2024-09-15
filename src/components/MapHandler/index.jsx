import { useEffect } from "react";
import { useMap } from "@vis.gl/react-google-maps"; // Hook to access map

const MapHandler = ({ place, marker }) => {
  const map = useMap();

  useEffect(() => {
    if (!map || !place || !marker) return;

    // Fit bounds to the place's geometry if available
    if (place.geometry?.viewport) {
      map.fitBounds(place.geometry.viewport);
    }

    // Update the marker's position to the selected place
    marker.position = place.geometry?.location;
  }, [map, place, marker]);

  return null;
};

export { MapHandler };
