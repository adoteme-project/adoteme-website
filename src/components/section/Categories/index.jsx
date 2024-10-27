import { useEffect, useState } from "react";
import BoxCategoria from "@/components/feature/Box-Categoria";
import BoxOng from "@/components/feature/Box-Ongs";
import Carrosel from "@/components/common/Carousel/index";

const Carousel = (props) => {
    const [personalidades, setPersonalidades] = useState([]);
    const [categorias, setCategorias] = useState([]);
    const [ongs, setOngs] = useState([]);
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

    const carregarOngs = async () => {
        try {
            const response = await fetch('/ongs.json');
            const data = await response.json();
            setOngs(data);
        } catch (error) {
            console.error("Erro ao carregar o JSON de ongs:", error);
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
        } else if (props.tipo === "ongs") {
            carregarOngs();
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

            {props.tipo === "categorias" ? (
                <Carrosel
                    data={categorias}
                    slidePerview={3}
                    color={cores}
                    BoxComponent={BoxCategoria}
                />
            ) : (
                <Carrosel
                    data={ongs}
                    slidePerview={3}
                    color={cores}
                    BoxComponent={BoxOng}
                />
            )}
        </section>
    );
};

export default Carousel;
