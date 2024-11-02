import Banner from "@/components/section/Banner";
import BreadCrumb from "@/components/common/BreadCrumb";
import { useEffect, useState } from "react";
import GridLayout from "@/components/layout/Grid";
import Pagination from "@/components/common/Pagination";
import imgBanner from "@/assets/banner-favoritos.png";
import { SearchInput } from "@/components/common/SearchInput";

const FavoritosOngs = () => {
    const [favorites, setFavorites] = useState([]); 
    const [filteredFavorites, setFilteredFavorites] = useState([]); 

    useEffect(() => {
        const fetchFavorites = async () => {
            try {
                const response = await fetch("/ongsFavoritos.json");
                const data = await response.json();
                setFavorites(data.favoritos_ongs);
                setFilteredFavorites(data.favoritos_ongs);
            } catch (error) {
                console.error("Erro ao buscar favoritos de ONGs:", error);
            }
        };

        fetchFavorites();
    }, []);

    const handleSearchChange = (searchValue) => {
        const normalizedSearch = searchValue.toLowerCase();
        const filtered = favorites.filter((ong) => 
            ong.endereco.cidade.toLowerCase().includes(normalizedSearch)
        );
        setFilteredFavorites(filtered);
    };

    return (
        <div>
            <Banner tamanho="700.25vh" imagensBanner={imgBanner} />
            <BreadCrumb tituloCaminho="Home" tituloCaminho2="Favoritos ONGs" cor="#B2DED3" caminho="/favoritos-ongs" />

            <div className="w-[200px] mt-4">
                <SearchInput
                    placeholder="Cidade"
                    onSearch={handleSearchChange}
                />
            </div>

            <Pagination
                items={filteredFavorites}
                renderGrid={(currentItems) => (
                    <GridLayout items={currentItems} titulo="ONG" tipoCard="ong" />
                )}
                itemsPerPageOptions={[2, 4, 6]}
                itemLabel="ONGs"
            />
        </div>
    );
};

export default FavoritosOngs;
