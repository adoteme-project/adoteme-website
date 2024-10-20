import useGeolocation from '@/hooks/useGeolocation';
import { createContext, useContext } from 'react';

const GeolocationContext = createContext();

export const GeoLocationProvider = ({ children }) => {
    const geolocation = useGeolocation();

    return (
        <GeolocationContext.Provider value={geolocation}>
            { children }
        </GeolocationContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useGeolocationContext = () => {
    const context = useContext(GeolocationContext);
    if(!context) {
        throw new Error("Gelocation context deve ser utilizado com um Geolocation Provider")
    }

    return context;
}