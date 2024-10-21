import { Link } from "react-router-dom";

const PetsImagesStep = () => {
  return (
    <div className="w-full px-5 py-10 flex flex-col gap-6">
      <h1 className="text-center text-azul-main font-nunito text-2xl font-semibold">
        Imagens do Pet
      </h1>
      <div className="w-full grid grid-rows-2 grid-flow-col gap-4 gap-x-10 h-96">
        <div className="border-2 border-dotted border-azul-main row-span-2 col-span-2"> Foto1 </div>
        <div className="border-2 border-dotted border-azul-main col-span-1"> Foto2 </div>
        <div className="border-2 border-dotted border-azul-main col-span-1"> Foto3 </div>
        <div className="border-2 border-dotted border-azul-main col-span-1"> Foto4</div>
        <div className="border-2 border-dotted border-azul-main col-span-1"> Foto5 </div>
      </div>
      <nav className="w-full flex justify-center">
        <Link className="bg-verde px-4 py-3 rounded-md text-branco">
         Continuar 
        </Link>
      </nav>
    </div>
  );
};

export default PetsImagesStep;
