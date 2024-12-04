import { useEffect, useState } from "react";
import BoxOng from "@/components/feature/Box-Ongs";
import Carrosel from "@/components/common/Carousel/index";
import { getOngs } from "@/services/siteAPI";

const CarouselOngs = ({ titulo }) => {
    const [ongs, setOngs] = useState([]);
    const cores = ['#FFC55E', '#C6D668', '#4C8EB5'];

    const carregarOngs = async () => {
        try {
            const response = await getOngs();
            const data = await response.json();
            setOngs(data);
        } catch (error) {
            console.error("Erro ao carregar o JSON de ONGs:", error);
        }
    };

    useEffect(() => {
        carregarOngs();
    }, []);

    return (
        <section className="w-full bg-white flex flex-col justify-center items-center py-12">
            <h1 className="text-4xl text-center font-bold font-nunito text-azul-dark">
                {titulo}
            </h1>
            <Carrosel
                data={ongs}
                slidePerview={3}
                color={cores}
                BoxComponent={BoxOng}
            />
        </section>
    );
};

export default CarouselOngs;
