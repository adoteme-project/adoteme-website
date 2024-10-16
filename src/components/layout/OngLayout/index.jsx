import { Outlet } from "react-router-dom"
import SidebarOng from "../SidebarOng"
import HeaderOng from "../HeaderOng";

const userData = {
    nome: 'Fernando',
    image: 'https://res.cloudinary.com/dv5mhhq0h/image/upload/v1728944509/lonarayeyge3u5bbgrog.jpg',
    cargo: 'Admin'
}

const OngLayout = () => {
    return (
        <div className="w-full flex h-svh max-h-svh">
            <SidebarOng />
            <div className="h-full flex-1">
                <div className="flex h-full flex-col justify-between overflow-y-auto no-scrollbar">
                    <HeaderOng userData={userData} />

                    <Outlet />
                </div>
            </div>
        </div>
    )
}


export default OngLayout;