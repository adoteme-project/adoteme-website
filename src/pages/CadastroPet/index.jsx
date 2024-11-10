import iconeCadastroPet from '@/assets/icons/cadastro-pet-icone.png';
import iconeCadastroResgatado from '@/assets/icons/cadastro-resgatado-icone.png';
import { Link } from 'react-router-dom';

const CadastroPet = () => {
  return (
    <>
      <h2 className="text-3xl text-azul-main font-bold"> Selecionar método de Cadastro </h2>
      <div className="w-full flex justify-between gap-10">
        <Link to={'/ong/cadastrar-pet/abrigo/abrigo-imagens'} className="w-full px-12 py-20 bg-ong-div border-2 border-amarelo rounded-xl flex flex-col gap-3 items-center justify-center">
          <span className="rounded-full p-8 flex justify-center items-center bg-amarelo-select">
            <img src={iconeCadastroPet} />
          </span>
          <div className='text-center'>
            <p className="font-semibold"> Cadastrar pet </p>
            <p> Cadastrar pet de um abrigo </p>
          </div>
        </Link>
        <Link to={'/ong/cadastrar-pet/resgatado/resgatado-imagens'} className="w-full px-12 py-20 bg-ong-div border-2 border-amarelo rounded-xl flex flex-col gap-3 items-center justify-center">
          <span className="rounded-full p-8 flex justify-center items-center bg-amarelo-select">
            <img src={iconeCadastroResgatado} />
          </span>
          <div className='text-center'>
            <p className="font-semibold"> Cadastrar pet resgatado </p>
            <p> Cadastrar um pet resgatado para o achados e perdidos </p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default CadastroPet;