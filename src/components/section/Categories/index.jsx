import { useEffect, useState } from "react";
import BoxCategoria from "@/components/feature/Box-Categoria";
import BoxOng from "@/components/feature/Box-Ongs";
import Carrosel from "@/components/common/Carousel/index";
import brincalhao from "@/assets/brincalhao.svg"
import sociavel from "@/assets/sociavel.svg"
import { getOngComDadosBancarios } from "@/services/ongAPI";

const Carousel = ({ tipo, titulo }) => {
    const [personalidades, setPersonalidades] = useState([]);
    const [categorias, setCategorias] = useState([]);
    const [ongs, setOngs] = useState([]);
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
            setPersonalidades(data);
        } catch (error) {
            console.error("Erro ao carregar o JSON de personalidades:", error);
        }
    };

    const carregarOngs = async () => {
        try {
            const response = await getOngComDadosBancarios();
            setOngs(response.data);
        } catch (error) {
            console.error("Erro ao carregar o JSON de ONGs:", error);
        }
    };

    const obterCategorias = (personalidades) => {
        if (!personalidades.length) return [];

        return Object.keys(personalidades[0]).filter(key => key !== "id").map((categoria, index) => ({
            id: index + 1,
            nome: categoria.charAt(0).toUpperCase() + categoria.slice(1),
            imagem: mockImages[categoria] || '/path/to/default/image.jpg', 
        }));
    };

    useEffect(() => {
        if (tipo === "categorias") {
            carregarPersonalidades();
        } else if (tipo === "ongs") {
            carregarOngs();
        }
    }, [tipo]);

    useEffect(() => {
        if (personalidades.length > 0) {
            setCategorias(obterCategorias(personalidades));
        }
    }, [personalidades]);

    const data = tipo === "categorias" ? categorias : ongs;
    const BoxComponent = tipo === "categorias" ? BoxCategoria : BoxOng;

    return (
        <section className="bg-white flex flex-col justify-center py-10">
            <h1 className="text-4xl text-center font-bold font-nunito text-azul-dark">
                {titulo}
            </h1>
            <Carrosel
                data={data}
                slidePerview={3}
                color={cores}
                BoxComponent={BoxComponent}
            />
        </section>
    );
};

export default Carousel;
