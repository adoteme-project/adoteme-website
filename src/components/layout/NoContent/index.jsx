import image from "@/assets/icons/coming_soon.png";

const NoContect = () => {
    return (
        <div className="flex w-full justify-center items-center gap-8 h-[60vh]">
            <img src={image} height={200} width={225} />
            <div className="flex flex-col gap-4">
                <h1 className="text-azul-main text-6xl font-bold"> Em breve! </h1>
                <p className="text-lg w-2/3"> Estamos trabalhando para trazer essa funcionalidade para você. Fique de olho, novidades estão a caminho! </p>
            </div>
        </div>
    )
}

export default NoContect;