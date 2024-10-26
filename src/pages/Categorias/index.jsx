import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import BreadCrumb from "@/components/common/BreadCrumb";
import Banner from "@/components/section/Banner";
import Doacao from "@/components/section/Donation";
import GridLayout from '@/components/layout/Grid';

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
};

const Categorias = () => {
    const query = useQuery();
    const categoria = query.get('categoria');
    const [animais, setAnimais] = useState([]);
    const [animaisFiltrados, setAnimaisFiltrados] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAnimais = async () => {
            try {
                const response = await fetch('/petCard.json');
                const data = await response.json();

                // Normalizar as chaves do objeto personalidade para minúsculas
                const animaisNormalizados = data.map(animal => ({
                    ...animal,
                    personalidade: Object.fromEntries(
                        Object.entries(animal.personalidade).map(([key, value]) => [key.toLowerCase(), value])
                    )
                }));

                setAnimais(animaisNormalizados);
                setLoading(false);
            } catch (error) {
                console.error("Erro ao buscar os dados:", error);
                setLoading(false);
            }
        };

        fetchAnimais();
    }, []);

    useEffect(() => {
        if (categoria && animais.length > 0) {
            const filtrados = animais.filter(animal => {
                return animal.personalidade[categoria.toLowerCase()] !== undefined; // Use toLowerCase para garantir a correspondência
            });

            const ordenados = filtrados.sort((a, b) => {
                const valorA = a.personalidade[categoria.toLowerCase()];
                const valorB = b.personalidade[categoria.toLowerCase()];

                return valorB - valorA;
            });

            setAnimaisFiltrados(ordenados);
        }
    }, [animais, categoria]);

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (!loading && animaisFiltrados.length === 0) {
        return <div>Nenhum animal encontrado na categoria {categoria}</div>;
    }

    return (
        <>
            <Banner tamanho='700.25vh' />
            <BreadCrumb
                tituloCaminho="Home"
                tituloCaminho2="Animais"
                tituloCaminho3={categoria}
                cor="#B2DED3"
                caminho={`/`}
            />

            <GridLayout
                items={animaisFiltrados}
                tipoCard="animal"
            />

            <Doacao />
        </>
    );
};

export default Categorias;