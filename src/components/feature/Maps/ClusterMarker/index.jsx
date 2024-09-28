import { useMap } from '@vis.gl/react-google-maps';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { MarkerClusterer } from '@googlemaps/markerclusterer';
import CustomMarker from '@/components/feature/Maps/CustomMarker';
import JanelaInfo from '@maps/JanelaInfo';

/**
 * O componente ClusteredPetsMarkers é responsável por integrar os
 * marcadores com o MarkerClusterer.
 */
const ClusteredPetsMarkers = ({ pets }) => {
  const [markers, setMarkers] = useState({});
  const [selectedPet, setSelectedPet] = useState(null);

  // Criar o MarkerClusterer quando o mapa estiver disponível e atualizá-lo quando
  // os marcadores forem alterados
  const map = useMap();
  const clusterer = useMemo(() => {
    if (!map) return null;

    return new MarkerClusterer({ map });
  }, [map]);

  useEffect(() => {
    if (!clusterer) return;

    clusterer.clearMarkers();
    clusterer.addMarkers(Object.values(markers));
  }, [clusterer, markers]);

  // Este callback será passado como referência para os marcadores, para manter
  // o controle dos marcadores atualmente no mapa
  const setMarkerRef = useCallback((marker, key) => {
    setMarkers(markers => {
      if ((marker && markers[key]) || (!marker && !markers[key]))
        return markers;

      if (marker) {
        return { ...markers, [key]: marker };
      } else {
        const { [key]: _, ...newMarkers } = markers;
        return newMarkers;
      }
    });
  }, []);

  const handleInfoWindowClose = useCallback(() => {
    setSelectedPet(null);
  }, []);

  const handleMarkerClick = useCallback((pet) => {
    setSelectedPet(pet);
  }, []);

  return (
    <>
      {pets.map(pet => (
        <CustomMarker
          key={pet.id}
          pet={pet}
          onClick={handleMarkerClick}
          setMarkerRef={setMarkerRef}
        />
      ))}

      {selectedPet && (
        <JanelaInfo
          posicao={selectedPet.position}
          setOpen={handleInfoWindowClose}
          pet={selectedPet}
        />
      )}
    </>
  );
};

export default ClusteredPetsMarkers;
