import { useEffect, useState } from "react";
import BoxCategoria from "@/components/feature/Box-Categoria";
import Carrosel from "@/components/common/Carousel/index";
import sociavel from "@/assets/box/dog_soc.png";
import imgEnergia from "@/assets/box/cat_enr.png";
import imgInt from "@/assets/box/dog_int.png";
import imgObd from "@/assets/box/dog_obd.png";
import imgTol from "@/assets/box/cat_tol.png";
import imgTerr from "@/assets/box/dog_territorial.png";

const CarouselCategorias = ({ titulo }) => {
    const [categorias, setCategorias] = useState([]);
    const cores = ['#FFC55E', '#C6D668', '#4C8EB5'];

    const mockImages = {
        energia: imgEnergia,
        inteligencia: imgInt,
        obediente: imgObd,
        sociabilidade: sociavel,
        territorial: imgTerr,
        tolerante: imgTol,
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
        <section className="w-full bg-white flex flex-col justify-center items-center py-12">
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
