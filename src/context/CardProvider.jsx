import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const CardContext = createContext();

export const CardProvider = ({ children }) => {
    const [sugestoes, setSugestoes] = useState([]);

    useEffect(() => {
        const fetchDados = async () => {
            try {
                const responseAnimais = await axios.get('/petCard.json', {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                const responseOngs = await axios.get('/ongs.json', {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                const dadosCombinados = [
                    ...responseAnimais.data.map(animal => ({ ...animal, tipo: 'animal' })),
                    ...responseOngs.data.map(ong => ({ ...ong, tipo: 'ong' }))
                ];

                setSugestoes(dadosCombinados);
            } catch (error) {
                console.error('Erro ao buscar dados', error);
            }
        };

        fetchDados();
    }, []);


    return (
        <CardContext.Provider value={{ sugestoes }}>
            {children}
        </CardContext.Provider>
    );
};

export const useCardContext = () => useContext(CardContext);