import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { faWpforms } from "@fortawesome/free-brands-svg-icons";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import AuthContext from "@/context/AuthProvider";
import NavItem from "@/components/common/NavItem";
import { useContext } from "react";

const SideBarUsuario = () => {
  const { logout } = useContext(AuthContext);

  return (
    <div className="h-screen flex-[0.2] p-4 bg-ong-color-bg flex flex-col gap-6">
      <div className="flex justify-center items-center gap-4">
        <img src="" alt="Imagem usuario" className="w-14 h-14 rounded-full " />
        <h4 className="font-nunito text-azul-main font-bold text-lg">
          USUARIO
        </h4>
      </div>
      <nav className="flex flex-col gap-4 font-nunito">
        <hr className="my-2 border-ong-div" />
        <NavItem icon={faUser} label="Perfil" type="perfil" pathTo="/usuario" />
        <NavItem
          icon={faWpforms}
          label="Formulario"
          pathTo="/formulario"
          type="perfil"
        />
        <NavItem
          icon={faClockRotateLeft}
          label="Pets"
          pathTo="/aplicacao"
          type="perfil"
        />
        <hr className="my-2 border-ong-div" />
        <NavItem icon={faArrowRightFromBracket} label="Sair" action={logout} />
      </nav>
    </div>
  );
};

export default SideBarUsuario;
