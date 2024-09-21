import Selecao from '../Selecao/selecao.jsx'
import AnimaisProximos from '../Animais-Proximos/AnimaisProximos.jsx'
import Botao from "../Button/botao.jsx"

const animais = () => {
    return (

        <section >
            <AnimaisProximos>Animais
            <div className="flex py-5 gap-7">
                <div className="bg-amarelo  h-[30px] flex gap-7 justify-between">
                    <Selecao nome="Tamanhos" tamanho="100" />
                    <Selecao nome="Sexo" tamanho="220" />
                    <Selecao nome="Espécies" tamanho="194" />
                </div>
                <div className="flex justify-center gap-5 ">
                    <input type="text" className="border rounded-lg h-[30px] w-[253px] text-xs pl-2" placeholder='Cidade' />
                    <Botao color=""></Botao>
                </div>
            </div>
            </AnimaisProximos>
        </section>
    );
}

export default animais;