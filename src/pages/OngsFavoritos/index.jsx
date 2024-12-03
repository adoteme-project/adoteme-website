import Banner from "@/components/section/Banner";
import BreadCrumb from "@/components/common/BreadCrumb";
import { useContext, useEffect, useState } from "react";
import GridLayout from "@/components/layout/Grid";
import Pagination from "@/components/common/Pagination";
import imgBanner from "@/assets/banner-favoritos.png";
import { SearchInput } from "@/components/common/SearchInput";
import AuthContext from "@/context/AuthProvider";

const FavoritosOngs = () => {
    const [favorites, setFavorites] = useState([]);
    const [filteredFavorites, setFilteredFavorites] = useState([]);
    const { auth } = useContext(AuthContext);

    const userId = auth.userData?.id;

    useEffect(() => {
        const fetchFavorites = async () => {
            if (!userId) return;
            try {
                const response = await fetch(`http://localhost:8080/adotantes/ong-favoritas-usuario/${userId}`);
                const data = await response.json();
                setFavorites(data.favoritos_ongs || []);
                setFilteredFavorites(data.favoritos_ongs || []);
            } catch (error) {
                console.error("Erro ao buscar favoritos de ONGs:", error);
            }
        };

        fetchFavorites();
    }, [userId]);

    const normalizeString = (str) =>
        str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

    const handleSearchChange = (searchValue) => {
        const normalizedSearch = normalizeString(searchValue);
        const filtered = favorites.filter((ong) =>
            normalizeString(ong.endereco.cidade).includes(normalizedSearch)
        );
        setFilteredFavorites(filtered);
    };

    if (!userId) {
        return <div>Carregando...</div>;
    }


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
