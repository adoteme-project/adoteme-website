import { useFormState } from "@/context/FormStateProvider";
import { useGeolocationContext } from "@/context/GeolocationProvider";
import { AdvancedMarker, APIProvider, Map, Pin } from "@vis.gl/react-google-maps";
import { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PlaceAutocomplete } from "../../Maps/PlaceAutocomplete";

const PetsLocalStep = () => {
    const navigate = useNavigate();
    const { formState, setFormState } = useFormState();
    const [selectedPlace, setSelectedPlace] = useState(null);

    const defaultPosition = { zoom: 19, center: { lat: -23.558052381604917, lng: -46.661807140459345 } };
    const { position, error: geoError } = useGeolocationContext();
    const { state } = useLocation();

    const [cameraProps, setCameraProps] = useState(state?.mapCenter || defaultPosition);

    const handleCameraChange = useCallback(
        (ev) => setCameraProps(ev.detail),
        []
    );

    useEffect(() => {
        if (position && !geoError) {
            setCameraProps((prevCamera) => ({
                ...prevCamera,
                center: { lat: position.lat, lng: position.lng },
                zoom: 19,
            }));
        } else if (geoError) {
            console.error("Geolocation error: ", geoError);
            alert("Não foi possível acessar sua localização");
            setCameraProps(defaultPosition);
        }
    }, [position, geoError]);

    const handleLocal = (place) => {
        if (place.geometry && place.geometry.location) {
            const location = place.geometry.location;
            const newCenter = { lat: location.lat(), lng: location.lng() };
            setSelectedPlace(newCenter);
            setCameraProps((prevCamera) => ({
                ...prevCamera,
                center: newCenter,
                zoom: 19,
            }));
        }
    }

    const saveLocal = () => {

        const posicao = {latitude: selectedPlace.lat, longitude: selectedPlace.lng }

        setFormState({
            ...formState,
            posicao
        });
        console.log(posicao);
        navigate("/ong/cadastrar-pet/resgatado/resgatado-imagens");
    }

    return (
        <div className="flex flex-col gap-10">
            <h1 className="text-azul-main font-nunito text-3xl font-semibold">Localização</h1>
            <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY} region="BR" language="pt-BR">
                <PlaceAutocomplete onPlaceSelect={handleLocal} />
                <Map
                    style={{ width: "100%", height: "60vh" }}
                    mapId={import.meta.env.VITE_MAP_ID}
                    zoom={cameraProps.zoom}
                    center={cameraProps.center}
                    onCameraChanged={handleCameraChange}
                    disableDefaultUI={true}
                    reuseMaps={true}
                >
                    {selectedPlace && (
                        <AdvancedMarker position={selectedPlace}>
                            <Pin />
                        </AdvancedMarker>
                    )}
                </Map>
            </APIProvider>
            <nav>
                <button onClick={saveLocal}>Continuar</button>
            </nav>
        </div>
    )
}

export default PetsLocalStep;