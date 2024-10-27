import SideBarUsuario from "../SidebarUser";
import { Outlet } from "react-router-dom"; 

const LayoutUsuario = () => {
  return (
    <section className="flex w-full h-full">
      <div className="w-3/12">
      <SideBarUsuario/>
      </div>
      <div className="w-9/12">
      <Outlet/>
      </div>
    </section>
  );
};

export default LayoutUsuario;
