import BreadCrumb from '@/components/common/BreadCrumb';
import Card from '@/components/common/Card';
import Doacao from '@/components/section/Donation';
import Avaliacao from '@/components/feature/Rating';
import { useState, useEffect } from 'react';
import axios from 'axios';

const PaginaPet = () => {
    const [animal] = useState({
        nome: "NOAH",
        localizacao: "São Paulo - SP",
        especie: "Cachorro",
        sexo: "Macho",
        idade: "2 anos",
        tamanho: "Médio",
        taxaAdocao: "R$70",
        energia: 4,
        sociavel: 5,
        territorialista: 2,
        inteligente: 4,
        historico: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec velit ligula dignissim ...",
    });

    const [sugestoes, setSugestoes] = useState([]);

    useEffect(() => {
        const fetchAnimais = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/animais`, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                setSugestoes(response.data);
            } catch (error) {
                console.error('Erro ao buscar animais', error);
            }
        };

        fetchAnimais();
    }, []);

    return (
        <>
            <BreadCrumb tituloCaminho="Animais" tituloCaminho2="Página Pets" tituloCaminho3="id" cor="#B2DED3" caminho="/pagina-pet" />

            {/* Seção do Animal */}
            <section className="p-10 bg-beje">
                <div className="grid grid-cols-2 gap-10">
                    <div>
                        <img src="/images/noah.jpg" alt={`Imagem de ${animal.nome}`} className="w-full h-auto rounded-lg" />
                        <div className="flex gap-4 mt-4">
                            <img src="/images/noah.jpg" alt="Miniatura 1" className="w-20 h-20 rounded-lg" />
                            <img src="/images/noah2.jpg" alt="Miniatura 2" className="w-20 h-20 rounded-lg" />
                            <img src="/images/noah3.jpg" alt="Miniatura 3" className="w-20 h-20 rounded-lg" />
                        </div>
                        <button className="mt-6 bg-green-500 text-white py-2 px-4 rounded-lg">Adotar</button>
                    </div>

                    <div>
                        <h1 className="text-4xl font-bold">{animal.nome}</h1>
                        <p className="text-lg">{animal.localizacao}</p>
                        <p className="mt-2">Espécie: {animal.especie}</p>
                        <p>Sexo: {animal.sexo}</p>
                        <p>Idade: {animal.idade}</p>
                        <p>Tamanho: {animal.tamanho}</p>
                        <div className="flex flex-col gap-4 mt-4">
                            <div className="flex items-center">
                                Energia: <Avaliacao avaliacao={animal.energia} cor='#A9B949' />
                            </div>
                            <div className="flex items-center">
                                Sociável: <Avaliacao avaliacao={animal.sociavel} cor='#A9B949' />
                            </div>
                            <div className="flex items-center">
                                Territorialista: <Avaliacao avaliacao={animal.territorialista} cor='#A9B949' />
                            </div>
                            <div className="flex items-center">
                                Inteligente: <Avaliacao avaliacao={animal.inteligente} cor='#A9B949' />
                            </div>
                        </div>
                        <p className="mt-4 font-bold">TAXA DE ADOÇÃO: {animal.taxaAdocao}</p>
                    </div>
                </div>

                <div className="mt-10">
                    <h2 className="text-3xl font-bold">História</h2>
                    <p className="mt-4 text-lg">{animal.historico}</p>
                </div>
            </section>

            {/* Seção de Sugestão */}
            <section className="mt-10 p-10 bg-gray-100">
                <h2 className="text-3xl font-bold mb-6">Sugestão</h2>
                <div className="flex overflow-x-auto gap-6">
                    {sugestoes.length > 0 ? (
                        sugestoes.map((animal, index) => (
                            <Card
                                key={index}
                                nome={animal.nome}
                                idade={animal.idade}
                                sociavel={animal.sociavel}
                                img={animal.imagem}
                            />
                        ))
                    ) : (
                        <p>Nenhuma sugestão disponível no momento.</p>
                    )}
                </div>
            </section>

            {/* Doação */}
            <Doacao />
        </>
    );
}

export default PaginaPet;
