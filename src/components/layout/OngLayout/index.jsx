import { Outlet } from "react-router-dom"
import SidebarOng from "../SidebarOng"

const OngLayout = () => {
    return (
        <div className="w-full flex h-svh max-h-svh">
            <SidebarOng />
            <Outlet />
        </div>
    )
}


export default OngLayout;