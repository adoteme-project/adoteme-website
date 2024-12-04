import NavItem from '@/components/common/NavItem';
import OngAuthContext from '@/context/AuthOngProvider';
import { faFileLines } from '@fortawesome/free-regular-svg-icons';
import { faArrowRightFromBracket, faChartLine, faGear, faPaw } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';

const SidebarOng = ({ role, ongInfo }) => {

  const { logout } = useContext(OngAuthContext);

  return (
    <div className="h-full flex-[0.2] p-4 bg-ong-color-bg flex flex-col gap-6">
      <div className="flex justify-center items-center gap-4">
        <img src={ongInfo.imageOng} className='w-20 h-16' />
        <h4 className='font-nunito text-azul-main font-bold text-xl'> {ongInfo.nomeOng} </h4>
      </div>
      <nav className='flex flex-col gap-4 font-nunito'>
        <hr className='my-2 border-ong-div' />
        {role === 'MODERATOR' || role === 'ADMIN' ? (<NavItem icon={faChartLine} label="Dashboard" pathTo="/dashboard" type="ong" />) : null}
        <NavItem icon={faPaw} label="Pets" pathTo="/pets" type="ong" />
        <NavItem icon={faFileLines} label="Aplicações" pathTo="/aplicacoes" type="ong" />
        {role === 'MODERATOR' || role === 'ADMIN' ? (
          <>
            <hr className='my-2 border-ong-div' />
            <NavItem icon={faGear} label="Configurações" pathTo="/configuracoes" type="ong" />
          </>
        ) : null
        }

        <NavItem icon={faArrowRightFromBracket} label="Sair" action={logout} type="ong" />
      </nav>

    </div>
  );
};

export default SidebarOng;
