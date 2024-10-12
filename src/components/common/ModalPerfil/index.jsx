import { faCircleUser, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function Modal(isOpen) {
    if (!isOpen) return null;

    return (
        <div className="w-[240px] h-[170px] rounded-lg flex flex-col absolute top-5 py-4 px-4 mt-4 bg-[#FDF6F0] shadow-lg">
            <div className="flex items-center border-b-1-verde">
                <FontAwesomeIcon icon={faCircleUser} className="text-[#307299] text-xl" />
                <h1 className="font-nunito text-1xl">Nome usuário</h1>
            </div>
            <Link to="/perfil">
                <FontAwesomeIcon icon={faUser} className="text-#B2DED3" />Meu perfil
            </Link>
        </div>

    );
}