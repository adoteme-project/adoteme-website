import { Outlet } from "react-router-dom";
import SidebarOng from "../SidebarOng";
import HeaderOng from "../HeaderOng";
import BreadCrumbOng from "@/components/common/BreadCrumbOng";
import { useContext } from "react";
import AuthContext from "@/context/AuthProvider";
import { translateCargo } from "@/utils/propsTranslate";

const OngLayout = () => {

  const { auth } = useContext(AuthContext);

  const userInfo = {
    nome: auth.userData.nome,
    image: "https://res.cloudinary.com/dv5mhhq0h/image/upload/v1728944509/lonarayeyge3u5bbgrog.jpg",
    cargo: translateCargo(auth.userData.role)
  }

  return (
    <div className="w-full flex h-svh max-h-svh">
      <SidebarOng />
      <div className="h-full flex-1">
        <div className="flex h-full flex-col overflow-y-auto no-scrollbar">
          <HeaderOng userData={userInfo} />
          <div className="p-6 flex flex-col gap-8">
            <BreadCrumbOng />
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OngLayout;
