import { Outlet } from "react-router-dom";
import SidebarOng from "../SidebarOng";
import HeaderOng from "../HeaderOng";
import BreadCrumbOng from "@/components/common/BreadCrumbOng";
import { useContext, useEffect, useState } from "react";
import { translateCargo } from "@/utils/propsTranslate";
import OngAuthContext from "@/context/AuthOngProvider";
import { getSidebarInfoOng } from "@/services/ongAPI";

const OngLayout = () => {
  const { authOng } = useContext(OngAuthContext);
  const [infoSideBar, setInfoSideBar] = useState({})

  const userInfo = {
    nome: authOng?.userData?.nome || "Nome",
    image:
      "https://res.cloudinary.com/dv5mhhq0h/image/upload/v1728944509/lonarayeyge3u5bbgrog.jpg",
    cargo: authOng ? translateCargo(authOng.userData?.role) : "Cargo",
  };

  useEffect(() => {
    const identityOngInfo = async () => {
      const response = await getSidebarInfoOng(authOng?.userData?.ongId);

      setInfoSideBar({
        imageOng: response.data.imagem,
        nomeOng: response.data.nome
      })
    };
    identityOngInfo();
  }, [authOng?.userData?.ongId]);

  return (
    <div className="w-full flex h-svh max-h-svh relative">
      <SidebarOng role={authOng.userData?.role} ongInfo={infoSideBar} />
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
