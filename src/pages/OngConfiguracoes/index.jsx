import { useNavigate } from "react-router-dom";
import PageTitle from "@/components/layout/PageTitle";
import imgOrganizacao from '@/assets/Business Building.png';
import imgUsuarios from '@/assets/People.png';

const OngConfiguracoes = () => {
  const navigate = useNavigate();

  const handleRedirect = (path) => {
    navigate(path);
  };

  return (
    <>
      <PageTitle title="Configurações" />
      <div className="flex justify-center items-center h-screen">
        <div className="grid grid-cols-2 gap-12">
          {[{
            title: "Organização",
            text: "Editar perfil da organização",
            iconPath: imgOrganizacao,
            redirectPath: "/ong/organizacao"
          }, {
            title: "Usuários",
            text: "Editar usuários cadastrados",
            iconPath: imgUsuarios, 
            redirectPath: "/path2"
          }].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-8 border border-gray-800 bg-gray-200/50 rounded-2xl cursor-pointer transition-transform transform hover:scale-105 w-64 h-64"
              onClick={() => handleRedirect(item.redirectPath)}
            >
              <div className="w-24 h-24 flex items-center justify-center bg-white rounded-full shadow-lg mb-6">
                <img src={item.iconPath} alt={`Ícone ${index + 1}`} className="w-12 h-12" />
              </div>
              <h2 className="text-2xl font-bold text-center">{item.title}</h2>
              <p className="text-center text-gray-600 mt-2">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OngConfiguracoes;
