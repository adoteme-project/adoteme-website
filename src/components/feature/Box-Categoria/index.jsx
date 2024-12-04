import { useNavigate } from 'react-router-dom';

const BoxCategoria = ({ id, color, imagem, nome }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/categorias?categoria=${nome}`);
  };

  return (
    <div
      id={id}
      className="sm:w-[20%] md:w-[40%] lg:w-[50%] xl:w-[60%]  h-52 shadow-md rounded-xl cursor-pointer flex flex-col justify-evenly items-center px-4"
      style={{ backgroundColor: color }}
      onClick={handleClick}
    >
      <h1 className="text-center font-robot text-2xl font-semibold">
        {nome}
      </h1>
      <div className='w-[95%] '>
        <img
          src={imagem}
          alt="Imagem da Categoria"
          className="w-full h-32 object-cover"
        />
      </div>
    </div>
  );
};

export default BoxCategoria;
