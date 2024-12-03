import DropDown from "@/components/section/DropDown";
import Banner from "@/components/section/Banner";
import BreadCrumb from "@/components/common/BreadCrumb";
import { useContext, useEffect, useState } from "react";
import GridLayout from "@/components/layout/Grid";
import Pagination from "@/components/common/Pagination";
import imgBanner from "@/assets/banner-favoritos.png";
import AuthContext from "@/context/AuthProvider";
import axios from "axios";

const FavoritosAnimais = () => {
    const [favorites, setFavorites] = useState([]); 
    const [filteredFavorites, setFilteredFavorites] = useState([]); 
    const [filters, setFilters] = useState({}); 
    const { auth } = useContext(AuthContext);

    const userId = auth?.userData?.id;

    useEffect(() => {
        const fetchFavorites = async () => {
            if (!userId) return; 

            try {
                const response = await axios.get(
                    `http://localhost:8080/adotantes/animais-favoritos-usuario/${userId}`
                );
                setFavorites(response.data.favoritos_animais || []); 
                setFilteredFavorites(response.data.favoritos_animais || []); 
            } catch (error) {
                console.error("Erro ao buscar favoritos de animais:", error);
            }
        };

        fetchFavorites();
    }, [userId]);

    const normalizeString = (str) =>
        str ? str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase() : "";

    const handleFilterChange = (key, value) => {
        setFilters((prev) => ({ ...prev, [key]: normalizeString(value) }));
    };

    useEffect(() => {
        const applyFilters = () => {
            const filtered = favorites.filter((animal) =>
                Object.keys(filters).every((key) =>
                    filters[key]
                        ? animal[key] && normalizeString(animal[key]).includes(filters[key])
                        : true
                )
            );
            setFilteredFavorites(filtered);
        };

        applyFilters();
    }, [filters, favorites]);

    if (!userId) {
        return <div>Carregando dados do usuário...</div>; 
    }

    return (
        <div>
            <Banner tamanho="700.25vh" imagensBanner={imgBanner} />
            <BreadCrumb
                tituloCaminho="Home"
                tituloCaminho2="Favoritos Animais"
                cor="#B2DED3"
                caminho="/favoritos-animais"
            />

            <div className="flex flex-row w-full justify-evenly gap-4 px-4 mt-16">
                <div className="flex flex-row w-8/12 gap-4">
                    <DropDown
                        filterKey="porte"
                        nome="Porte"
                        tamanho={200}
                        onFilterChange={handleFilterChange}
                    />
                    <DropDown
                        filterKey="sexo"
                        nome="Sexo"
                        tamanho={200}
                        onFilterChange={handleFilterChange}
                    />
                    <DropDown
                        filterKey="especie"
                        nome="Espécie"
                        tamanho={200}
                        onFilterChange={handleFilterChange}
                    />
                </div>
            </div>

            <Pagination
                items={filteredFavorites}
                renderGrid={(currentItems) => (
                    <GridLayout items={currentItems} titulo="Animal" tipoCard="animal" />
                )}
                itemsPerPageOptions={[2, 4, 6]}
                itemLabel="Animais"
            />
        </div>
    );
};

export default FavoritosAnimais;
