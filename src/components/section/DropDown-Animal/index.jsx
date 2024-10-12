import Selecao from '@/components/common/DropDown/index.jsx';
import Botao from "@/components/common/Button/index.jsx";
import Grid from '@/components/layout/Grid/index';


const DropDown = ({ items = [], titulo }) => {
    return (
        <section className="flex flex-col" >
            <div className="w-full  flex h-[40px]">
                <div className="w-8/12 flex px-6 h-full  gap-6">
                    <Selecao nome="Tamanhos" tamanho={250} />
                    <Selecao nome="Sexo" tamanho={190} />
                    <Selecao nome="Espécies" tamanho={230} />
                </div>
                <div className="flex w-4/12 gap-6 px-6 ">
                    <input
                        type="text"
                        id="input-search"
                        className="border rounded-lg h-[40px] w-[253px] pl-2"
                        placeholder="Cidade"
                    />
                    <Botao color="#C6D668" titulo="Buscar" tamanho="120" altura="40" fontSize="15" />
                </div>
            </div>
            <Grid items={items} titulo={titulo} />

        </section>

    );
};

export default DropDown;
