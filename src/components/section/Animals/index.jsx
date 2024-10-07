import Selecao from '@/components/common/DropDown/index.jsx'
import AnimaisProximos from '@/components/section/Near-Animals/index.jsx'
import Botao from "@/components/common/Button/index.jsx"
import { useEffect, useState } from 'react'
import axios from 'axios'

const animais = () => {

    const[data, setData] = useState([]);
    const[dataKeys, setDataKeys] = useState([]);

    useEffect((data) => {
        const fetchData = async (data) => {
            try{
                const requestData = await axios.get(`${import.meta.env.VITE_API_URL}/animais`)
                setData[requestData.data];
                setDataKeys[Object.keys(requestData.data[0])];
            }catch(err){
                console.error("Erro ao buscar animais:", err);
            }
            
        }
            fetchData(data)
        
        },[]);

    function handleInput(e){
        var input = document.getElementById("input-search").value
        setData(searchInput(input,data));
    }

    function searchInput(value, data){
        var filteredData = [];
        for(var i = 0; i < data.length; i++){
            value = value.toLowerCase();
            var animal = data[i].animal.toLowerCase();
            if(animal.includes(value)){
                filteredData.push(data[i]);
            }
        }
        return filteredData;
    }


    return (

        <section >
            <AnimaisProximos tipo="animal">Animais
            <div className="flex py-5 gap-7">
                <div className=" h-[40px] flex gap-3 w-[759px]">
                    <Selecao nome="Tamanhos" tamanho="300" />
                    <Selecao nome="Sexo" tamanho="230" />
                    <Selecao nome="Espécies" tamanho="190" />
                </div>
                <div className="flex justify-center gap-5 ">
                    <input type="text" id="input-search" className="border rounded-lg h-[40px] w-[253px] text-xs pl-2"
                        placeholder='Cidade'
                        onKeyUp={() => {
                            handleInput()
                        }} 
                    />
                    <Botao color="#C6D668"  titulo="Buscar" tamanho="120" altura="40" fontSize="15"  ></Botao>
                </div>
            </div>
            </AnimaisProximos>
        </section>
    );
}

export default animais;