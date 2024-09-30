import Selecao from '@/components/common/DropDown/index.jsx'
import SectionGrid from '@/components/section/SectionGrid/index.jsx'
import Botao from "@/components/common/Button/index.jsx"
import { useEffect, useState } from 'react';

const Animais = () => {

    const [pets, setPets] = useState([]);

    useEffect(() => {
      fetch("/petsResumido.json")
        .then((response) => response.json())
        .then((data) => setPets(data))
        .catch((error) => console.error("Erro json pets", error));
    }, []);

    return (

        <section >
            <SectionGrid data={pets}>Animais
            <div className="flex py-5 gap-7">
                <div className=" h-[40px] flex gap-3 w-[759px]">
                    <Selecao nome="Tamanhos" tamanho="300" />
                    <Selecao nome="Sexo" tamanho="230" />
                    <Selecao nome="Espécies" tamanho="190" />
                </div>
                <div className="flex justify-center gap-5 ">
                    <input type="text" className="border rounded-lg h-[40px] w-[253px] text-xs pl-2" placeholder='Cidade' />
                    <Botao color="#C6D668"  titulo="Buscar" tamanho="120" altura="40" fontSize="15"  ></Botao>
                </div>
            </div>
            </SectionGrid>
        </section>
    );
}

export default Animais;