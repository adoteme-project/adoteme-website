import { useEffect, useState } from "react";
import Box from "@/components/feature/Box-Carousel";
import Slider from "@/components/common/Carousel/index";

const Carousel = (props) => {
    const [personalidades, setPersonalidades] = useState([]);
    const [categorias, setCategorias] = useState([]);
    const cores = ['#FFC55E', '#C6D668', '#4C8EB5'];

    const carregarPersonalidades = async () => {
        try {
            const response = await fetch('/personalidade.json'); 
            const data = await response.json();
            setPersonalidades(data);
        } catch (error) {
            console.error("Erro ao carregar o JSON de personalidades:", error);
        }
    };

    
    const obterCategorias = (personalidades) => {
        if (personalidades.length === 0) return [];

        const primeiraPersonalidade = personalidades[0];
        const categorias = Object.keys(primeiraPersonalidade).filter(key => key !== "id");

        return categorias.map((categoria, index) => ({
            id: index + 1,
            nome: categoria.charAt(0).toUpperCase() + categoria.slice(1),
            imagem: `/path/to/${categoria}.jpg`
        }));
    };

    useEffect(() => {
        if (props.tipo === "categorias") {
            carregarPersonalidades();
        }
    }, [props.tipo]);

    useEffect(() => {
        if (personalidades.length > 0) {
            const categorias = obterCategorias(personalidades);
            setCategorias(categorias);
        }
    }, [personalidades]);

    return (
        <section className="h-[71.79vh] bg-white flex flex-col justify-center">
            <h1 className="text-4xl text-center font-bold font-nunito text-azul-dark">
                {props.titulo}
            </h1>
            <Slider slidePerview={3} data={categorias} color={cores}>
                {categorias.map((item, index) => (
                    <Box
                        key={item.id}
                        id={item.id}
                        color={cores[index % cores.length]}
                        nome={item.nome}
                        imagem={item.imagem}
                    />
                ))}
            </Slider>
        </section>
    );
};

export default Carousel;
