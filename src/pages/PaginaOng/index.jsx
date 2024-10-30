import DropDown from "@/components/section/DropDown";
import Banner from "@/components/section/Banner";
import BreadCrumb from "@/components/common/BreadCrumb";
import Doacao from "@/components/section/Donation";
import { useEffect, useState } from "react";
import GridLayout from "@/components/layout/Grid";
import { SearchInput } from "@/components/common/SearchInput";
import Pagination from "@/components/common/Pagination";
import axios from "axios";
import { useParams } from "react-router-dom";
import BannerImage from "@/assets/banner-ong.svg"

const PaginaOng = () => {
    const { id } = useParams();
    const [ong, setOng] = useState(null);
    const [animais, setAnimais] = useState([]);
    const [filteredAnimals, setFilteredAnimals] = useState([]);
    const [filters, setFilters] = useState({});

    useEffect(() => {
        const fetchOng = async () => {
            try {
                const response = await axios.get('/animaisOngs.json');
                const ongData = response.data.ong;
                if (ongData.id === Number(id)) {
                    setOng(ongData);
                    setAnimais(ongData.animais || []);
                    setFilteredAnimals(ongData.animais || []);
                }
            } catch (error) {
                console.error("Erro ao buscar dados da ONG", error);
            }
        };

        fetchOng();
    }, [id]);

    useEffect(() => {
        if (animais.length > 0) {
            let result = [...animais];
            Object.keys(filters).forEach((key) => {
                if (filters[key]) {
                    result = result.filter((animal) => animal[key] === filters[key]);
                }
            });
            setFilteredAnimals(result);
        }
    }, [filters, animais]);

    const handleFilterChange = (key, value) => {
        setFilters((prev) => ({ ...prev, [key]: value }));
    };

    const handleSearchChange = (searchResults) => {
        setFilteredAnimals(searchResults);
    };

    if (!ong) return <p>Carregando...</p>;

    return (
        <div>
            <Banner tamanho='700.25vh' imagensBanner={BannerImage} />
            <BreadCrumb tituloCaminho="Home" tituloCaminho2="Ongs" tituloCaminho3={ong.nome} cor="#B2DED3" caminho={`/pagina-ong/${ong.id}`} />

            <div className="flex flex-row w-full justify-evenly gap-4 px-4">
                <div className="flex flex-row w-8/12 gap-4">
                    <DropDown filterKey="tamanho" nome="Tamanho" tamanho={200} fetchOptions={"/petCard.json"} onFilterChange={handleFilterChange} />
                    <DropDown filterKey="sexo" nome="Sexo" tamanho={200} fetchOptions={"/petCard.json"} onFilterChange={handleFilterChange} />
                    <DropDown filterKey="especie" nome="Espécie" tamanho={200} fetchOptions={"/petCard.json"} onFilterChange={handleFilterChange} />
                </div>
                <div className="w-[200px]">
                    <SearchInput data={animais} placeholder="Cidade" name="Search" onSearch={handleSearchChange} filterKey="cidade" />
                </div>
            </div>

            <Pagination
                items={filteredAnimals}
                renderGrid={(currentItems) => (
                    <GridLayout items={currentItems} titulo="Animal" tipoCard="animal" />
                )}
                itemsPerPageOptions={[2, 4, 6]}
                itemLabel="Animais"
            />

            <Doacao />
        </div>
    );
};

export default PaginaOng;
