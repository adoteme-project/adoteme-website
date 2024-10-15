import { faAngleUp, faArrowRightFromBracket, faCircleUser, faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faWpforms } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

export default function Modal({isOpen, toggleModal}) {
    if (!isOpen) return null;

    


    return (
        <div className="w-[240px] h-fit rounded-lg flex flex-col absolute top-5 py-4 px-4 mt-4 bg-[#FDF6F0] shadow-lg">
            <div className="flex flex-row items-center border-b-[1px] border-verde py-1 gap-2">
                <FontAwesomeIcon icon={faCircleUser} className="text-[#307299] text-4xl" />
                <h1 className="font-nunito text-1xl">Nome usuário</h1>
            </div>
            <div className="flex flex-col gap-2 pt-2">
            <div className="flex flex-row items-center gap-4">
                <FontAwesomeIcon icon={faUser} className="text-azul-light " />Meu perfil
                <Link to="/perfil" onClick={toggleModal}>
                    <FontAwesomeIcon icon={faAngleUp} rotation={90} />
                </Link>
            </div>
            <div className="flex flex-row items-center gap-4">
                <FontAwesomeIcon icon={faClockRotateLeft} className="text-amarelo" /> Aplicações
            <Link to="/perfil-formulario onClick={toggleModal}">
            <FontAwesomeIcon icon={faAngleUp} rotation={90} />
            </Link>
            </div>
            <div className="flex flex-row items-center gap-4">
                <FontAwesomeIcon icon={faWpforms} className="text-verde" />Formulário
                <Link to="perfil-formulario onClick={toggleModal}">
                    <FontAwesomeIcon icon={faAngleUp} rotation={90} />
                </Link>
            </div>
            <div className="flex flex-row items-center gap-4">
                <FontAwesomeIcon
                icon={faArrowRightFromBracket}
                className="text-vermelho font-bold text-1xl"
                rotation={180}
            /> Sair
            </div>
            </div>
            
            
        </div>

    );
}