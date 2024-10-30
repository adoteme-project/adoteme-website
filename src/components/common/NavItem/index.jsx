
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const NavItem = ({ icon, label, pathTo, action, type }) => {
    return (
        <>
            {action ? (
                <button
                    onClick={action}
                    className='flex items-center w-full p-2 leading-tight transition-all 
                    rounded-full outline-none text-start select-none whitespace-nowrap 
                    bg-vermelho text-branco focus:bg-opacity-80'
                >
                    <div className='grid mx-3 place-items-center'>
                        <FontAwesomeIcon icon={icon} />
                    </div>
                    {label}
                </button>
            ) : (
                <Link
                    to={`/${type}${pathTo}`}
                    className='flex items-center w-full p-2 leading-tight transition-all 
                    rounded-full outline-none text-start select-none whitespace-nowrap 
                    bg-amarelo text-branco hover:bg-amarelo-select focus:bg-opacity-80'
                >
                    <div className='grid mx-3 place-items-center'>
                        <FontAwesomeIcon icon={icon} />
                    </div>
                    {label}
                </Link>
            )}
        </>
    );
};

export default NavItem;
