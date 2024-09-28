import Selecao from '../../feature/Selecao/selecao.jsx'
import AnimaisProximos from '../Animais-Proximos/AnimaisProximos.jsx'
import Botao from "../../common/Button/botao.jsx"

const animais = () => {
    return (

        <section >
            <AnimaisProximos>Animais
            <div className="flex py-5 gap-7">
                <div className="bg-verde  h-[50px] flex gap-7 justify-between">
                    <Selecao nome="Tamanhos" tamanho="100" />
                    <Selecao nome="Sexo" tamanho="220" />
                    <Selecao nome="Espécies" tamanho="194" />
                </div>
                <div className="bg-amarelo w-[500px ] h-[30px] flex justify-center gap-5 ">
                    <input type="text" className="border rounded-lg h-[40] w-[200] text-xs pl-2" placeholder='Cidade' />
                    <Botao color="azul-main" texto="Buscar" tamanho="40" altura="30" textColor="preto" fontWeight="medium" fontSize="3xl"></Botao>
                </div>
            </div>
            </AnimaisProximos>
        </section>
    );
}

export default animais;