import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Banner from '@/components/section/Banner';
import BreadCrumb from '@/components/common/BreadCrumb';
import axios from 'axios';
import GridLayout from '@/components/layout/Grid';
import Filter from '@/components/common/Filter';

const PaginaOng = () => {
    const { id } = useParams();
    const [ong, setOng] = useState(null);
    const [animais, setAnimais] = useState([]);
    const [filteredAnimals, setFilteredAnimals] = useState([]);

    useEffect(() => {
        const fetchOng = async () => {
            try {
                const response = await axios.get('/animaisOngs.json', {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                const ongData = response.data.ong;

                if (ongData.id === Number(id)) {
                    setOng(ongData);
                    setAnimais(ongData.animais || []);
                } else {
                    console.log('ONG não encontrada');
                }
            } catch (error) {
                console.error('Erro ao buscar dados da ONG', error);
            }
        };

        fetchOng();
    }, [id]);

    const handleFilterChange = (name, value) => {
        const filtered = animais.filter(animal => {
            if (name === 'size' && value) return animal.tamanho === value;
            if (name === 'species' && value) return animal.especie === value;
            if (name === 'sex' && value) return animal.sexo === value;
            if (name === 'city' && value) return animal.cidade === value;
            return true; // Para outros filtros, retorna true para manter
        });
        setFilteredAnimals(filtered);
    };


    if (!ong) {
        return <p>Carregando...</p>;
    }

    return (
        <div>

            <Banner tamanho='700.25vh' />
            <BreadCrumb
                tituloCaminho="Home"
                tituloCaminho2="Ongs"
                tituloCaminho3={ong.nome}
                cor="#B2DED3"
                caminho={`/pagina-ong/${ong.id}`}
            />


            <h2 className="text-center font-bold text-3xl mt-6 mb-4">{ong.nome}</h2>

            {/* Adicionando o componente de filtro */}
            <Filter onFilterChange={handleFilterChange} />

            <GridLayout
                items={filteredAnimals} // Usando animais filtrados
                tipoCard="animal"
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
                                value="chavepix@exemplo.com"
                                className="border p-2 rounded w-full text-center"
                                readOnly
                            />
                            <button
                                className="mt-2 bg-[#4C8EB5] text-white py-2 px-4 rounded"
                                onClick={() => navigator.clipboard.writeText("chavepix@exemplo.com")}
                            >
                                Copiar chave PIX
                            </button>
                        </div>
                        <div className="mt-4">
                            <img src="/path/to/qr-code.png" alt="QR Code PIX" className="mx-auto w-32 h-32" />
                            <p className="text-sm text-gray-500 mt-2">QR Code PIX</p>
                        </div>
                    </div>

                    <div className="bg-[#FFE0B3] p-6 rounded-lg text-center w-full md:w-[400px] shadow-lg">
                        <h4 className="font-semibold text-lg mb-2">TED ou depósito em conta</h4>
                        <div className="text-sm text-gray-700">
                            <p>Banco: XXXX</p>
                            <p>Agência: XXXX</p>
                            <p>Conta corrente: XXXXX-X</p>
                            <p>Razão social: Nome da ONG</p>
                            <p>CNPJ: 00.000.000/0000-00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaginaOng;
