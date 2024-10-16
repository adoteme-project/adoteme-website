const HeaderOng = ({userData}) => {
    return (
        <div className="sticky top-0 w-full shadow-md">
            <div className="flex justify-end py-3 px-8">
                <div className="flex gap-4">
                    <img src={userData.image ?? ''} alt="Foto de Perfil" 
                    className="bg-cinza relative inline-block h-12 w-12 !rounded-full  object-cover object-center"/>
                    <div className="text-left flex flex-col">
                        <span className="text-lg font-bold"> {userData.nome ?? 'Nome'} </span>
                        <span className="text-sm"> {userData.cargo ?? 'Cargo'} </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderOng;