import { useEffect } from "react";
import { useMap } from "@vis.gl/react-google-maps";
import calculateDistance from "../../utils/nearbyMarkers";

const MapHandler = ({ place, marker, pets, setNearbyPets }) => {
  const map = useMap();

  useEffect(() => {
    if (!map || !place || !marker) return;

    // Fit bounds to the place's geometry if available
    if (place.geometry?.viewport) {
      map.fitBounds(place.geometry.viewport);
    }

    // Update the marker's position to the selected place
    marker.position = place.geometry?.location;

    const selectedLocation = place.geometry?.location;
    const nearbyPets = pets.filter(pet => {
      const distance = calculateDistance(
        selectedLocation.lat(),
        selectedLocation.lng(),
        pet.position.lat,
        pet.position.lng
      );
      return distance <= 1; // 1 km radius
    });

    // Update the nearby pets state
    setNearbyPets(nearbyPets);

  }, [map, place, marker, pets, setNearbyPets]);

  return null;
};

export { MapHandler };
