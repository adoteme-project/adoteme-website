import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";

const Institucional = () => {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default Institucional;