import SideBarUsuario from "../SidebarUser";
import { Outlet } from "react-router-dom";

const LayoutUsuario = () => {
  return (
    <div className="w-full flex h-svh max-h-svh">
      <SideBarUsuario />
      <div className="h-full flex-1">
        <div className="flex h-full flex-col overflow-y-auto no-scrollbar">
          <div className="flex flex-col gap-10">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutUsuario;
