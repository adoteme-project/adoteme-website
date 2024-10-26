import logoOng from '@/assets/logo_adotme.png';
import NavItem from '@/components/common/NavItem';
import AuthContext from '@/context/AuthProvider';
import { faFileLines } from '@fortawesome/free-regular-svg-icons';
import { faArrowRightFromBracket, faChartLine, faGear, faPaw } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';

const SidebarOng = () => {

  const { logout } = useContext(AuthContext);

  return (
    <div className="h-full flex-[0.2] p-4 bg-ong-color-bg flex flex-col gap-6">
      <div className="flex justify-center items-center gap-4">
        <img src={logoOng} className='w-14 h-12' />
        <h4 className='font-nunito text-azul-main font-bold text-2xl'> Nome empresa </h4>
      </div>
      <nav className='flex flex-col gap-4 font-nunito'>
        <hr className='my-2 border-ong-div' />
        <NavItem icon={faChartLine} label="Dashboard" pathTo="dashboard"/>
        <NavItem icon={faPaw} label="Pets" pathTo="pets"/>
        <NavItem icon={faFileLines} label="Aplicações" pathTo="aplicacoes"/>
        <hr className='my-2 border-ong-div' />
        <NavItem icon={faGear} label="Configurações" pathTo="configuracoes"/>
        <NavItem icon={faArrowRightFromBracket} label="Sair" action={logout}/>
      </nav>

    </div>
  );
};

export default SidebarOng;
