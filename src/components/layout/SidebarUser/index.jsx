import { faUser } from "@fortawesome/free-regular-svg-icons";
import { getUserById } from "@/services/adotanteAPI";
import { faClockRotateLeft, faGear } from "@fortawesome/free-solid-svg-icons";
import { faWpforms } from "@fortawesome/free-brands-svg-icons";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import AuthContext from "@/context/AuthProvider";
import NavItem from "@/components/common/NavItem";
import { useContext, useEffect, useState } from "react";

const SideBarUsuario = () => {
  const { logout, auth } = useContext(AuthContext);
  const [requisicao, setRequisicoes] = useState([]);
  const [image, setImage] = useState("/default-user.png");
  const [loading, setLoading] = useState(true);

  const idAdotante = auth?.userData?.id;
  console.log("Id usuario:", idAdotante);

  useEffect(() => {
    const fetchRequisicoes = async () => {
      if (!idAdotante) return;

      try {
        const response = await getUserById(idAdotante);
        setRequisicoes(response);
        setImage(response?.data?.urlFoto || "/default-user.png"); 
      } catch (error) {
        console.error("Erro ao buscar o usuário:", error);
        setImage("/default-user.png"); 
      } finally {
        setLoading(false);
      }
    };

    fetchRequisicoes();
  }, [idAdotante]);

  if (loading) {
    return <div className="text-center">Carregando...</div>;
  }

  return (
    <div className="h-screen flex-[0.2] p-4 bg-ong-color-bg flex flex-col gap-6">
      <div className="flex justify-center items-center gap-4">
        <img
          src={image}
          alt="Imagem do usuário"
          className="w-[4rem] h-[4rem] object-cover rounded-full"
        />
        <h4 className="font-nunito text-azul-main font-bold text-lg">
          {auth?.userData?.nome || "Nome"}
        </h4>
      </div>
      <nav className="flex flex-col gap-4 font-nunito">
        <hr className="my-2 border-ong-div" />
        <NavItem icon={faUser} label="Perfil" type="perfil" pathTo="/usuario" />
        <NavItem
          icon={faWpforms}
          label="Formulário"
          pathTo="/formulario"
          type="perfil"
        />
        <NavItem
          icon={faClockRotateLeft}
          label="Pets"
          pathTo="/aplicacao"
          type="perfil"
        />
        <NavItem
          icon={faGear}
          label="Configurações"
          pathTo="/configuracao"
          type="perfil"
        />
        <hr className="my-2 border-ong-div" />
        <NavItem icon={faArrowRightFromBracket} label="Sair" action={logout} />
      </nav>
    </div>
  );
};

export default SideBarUsuario;
