import { useEffect, useState } from "react";
import BoxCategoria from "@/components/feature/Box-Categoria";
import Carrosel from "@/components/common/Carousel/index";
import brincalhao from "@/assets/brincalhao.svg";
import sociavel from "@/assets/sociavel.svg";

const CarouselCategorias = ({ titulo }) => {
    const [categorias, setCategorias] = useState([]);
    const cores = ['#FFC55E', '#C6D668', '#4C8EB5'];

    const mockImages = {
        energia: '/path/to/mock/energia.jpg',
        inteligencia: '/path/to/mock/inteligencia.jpg',
        obediente: '/path/to/mock/obediente.jpg',
        sociabilidade: sociavel,
        territorial: '/path/to/mock/territorial.jpg',
        tolerante: '/path/to/mock/tolerante.jpg',
        brincalhao: brincalhao,
    };

    const carregarPersonalidades = async () => {
        try {
            const response = await fetch('/personalidade.json');
            const data = await response.json();
            setCategorias(obterCategorias(data));
        } catch (error) {
            console.error("Erro ao carregar o JSON de personalidades:", error);
        }
    };

    const obterCategorias = (personalidades) => {
        if (!personalidades.length) return [];
        return Object.keys(personalidades[0])
            .filter(key => key !== "id")
            .map((categoria, index) => ({
                id: index + 1,
                nome: categoria.charAt(0).toUpperCase() + categoria.slice(1),
                imagem: mockImages[categoria] || '/path/to/default/image.jpg',
            }));
    };

    useEffect(() => {
        carregarPersonalidades();
    }, []);

    return (
        <section className="h-[71.79vh] bg-white flex flex-col justify-center">
            <h1 className="text-4xl text-center font-bold font-nunito text-azul-dark">
                {titulo}
            </h1>
            <Carrosel
                data={categorias}
                slidePerview={3}
                color={cores}
                BoxComponent={BoxCategoria}
            />
        </section>
    );
};

export default CarouselCategorias;
