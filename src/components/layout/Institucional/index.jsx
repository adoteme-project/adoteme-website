import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import { GeoLocationProvider } from "@/context/GeolocationProvider";

const Institucional = () => {

    return (
        <>
            <Header />
            <GeoLocationProvider>
                <Outlet />
            </GeoLocationProvider>
            <Footer />
        </>
    )
}

export default Institucional;