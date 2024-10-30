import DropDown from "@/components/section/DropDown";
import Banner from "@/components/section/Banner";
import BreadCrumb from "@/components/common/BreadCrumb";
import { useEffect, useState } from "react";
import GridLayout from "@/components/layout/Grid";
import { SearchInput } from "@/components/common/SearchInput";
import Pagination from "@/components/common/Pagination";
import axios from "axios";
import { useParams } from "react-router-dom";
import imgTeste from "@/assets/pexels-chevanon-1108099.jpg";

const normalizeString = (str) =>
  str ? str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase() : str;

const PaginaOng = () => {
    const { id } = useParams();
    const [ong, setOng] = useState(null);
    const [animais, setAnimais] = useState([]);
    const [filteredAnimals, setFilteredAnimals] = useState([]);
    const [filters, setFilters] = useState({});
    const [mensagemCopiado, setMensagemCopiado] = useState('');

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
                    result = result.filter((animal) => 
                        animal[key] && normalizeString(animal[key]) === filters[key]
                    );
                }
            });

            setFilteredAnimals(result);
        }
    }, [filters, animais]);

    const handleFilterChange = (key, value) => {
        setFilters((prev) => ({ ...prev, [key]: normalizeString(value) }));
    };

    const handleSearchChange = (searchResults) => {
        setFilteredAnimals(searchResults);
    };

    if (!ong) return <p>Carregando...</p>;

    const handleCopy = () => {
        navigator.clipboard.writeText(ong.chavePix)
            .then(() => {
                setMensagemCopiado('Copiado com sucesso!');
                setTimeout(() => {
                    setMensagemCopiado('');
                }, 2000);
            })
            .catch(err => {
                console.error('Erro ao copiar: ', err);
            })
    }

    const handleClearFilters = () => {
        setFilters({});
        setFilteredAnimals(animais);
    }

    return (
        <div>
            <Banner tamanho="700.25vh" imagensBanner={imgTeste} />
            <BreadCrumb tituloCaminho="Home" tituloCaminho2="Ongs" tituloCaminho3={ong.nome} cor="#B2DED3" caminho={`/pagina-ong/${ong.id}`} />

            <div className="flex flex-row w-full justify-evenly gap-4 px-4 mt-16">
                <div className="flex flex-row w-8/12 gap-4">
                    <DropDown filterKey="porte" nome="Porte" tamanho={200} fetchOptions={"/petCard.json"} onFilterChange={handleFilterChange} />
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

            <div className="mt-10 bg-[#FFF7EC] py-10">
                <h3 className="text-center font-bold text-2xl mb-6">Doações</h3>
                <div className="flex flex-col md:flex-row justify-center items-center gap-10">
                    <div className="bg-[#F0E0D6] p-6 rounded-lg text-center w-full md:w-[400px] shadow-lg">
                        <h4 className="font-semibold text-lg mb-2">Doações via PIX</h4>
                        <p className="text-sm text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <div className="my-3">
                            <input
                                type="text"
                                value={ong.chavePix}
                                className="border p-2 rounded w-full text-center"
                                readOnly
                            />
                            <button
                                className="mt-2 bg-[#4C8EB5] text-white py-2 px-4 rounded"
                                onClick={handleCopy}
                            >
                                Copiar chave PIX
                            </button>
                            {mensagemCopiado && (
                                <p className="text-green-500 mt-2">{mensagemCopiado}</p>
                            )}
                        </div>
                        <div className="mt-4">
                            <img src="/path/to/qr-code.png" alt="QR Code PIX" className="mx-auto w-32 h-32" />
                            <p className="text-sm text-gray-500 mt-2">{ong.qrCode}</p>
                        </div>
                    </div>
                    <div className="bg-[#FFE0B3] p-6 rounded-lg text-center w-full md:w-[400px] shadow-lg">
                        <h4 className="font-semibold text-lg mb-2">TED ou depósito em conta</h4>
                        <div className="text-sm text-gray-700">
                            <p>Banco: {ong.banco}</p>
                            <p>Agência: {ong.agencia}</p>
                            <p>Conta corrente: {ong.tipoConta}</p>
                            <p>Razão social: {ong.nome}</p>
                            <p>CNPJ: {ong.cnpj}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaginaOng;
