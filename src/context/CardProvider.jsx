import { createContext, useContext, useState, useEffect } from 'react';
import { getOngComDadosBancarios } from '@/services/ongAPI';
import { getTodosAnimaisComPersonalidade } from '@/services/pets';

const CardContext = createContext();

export const CardProvider = ({ children }) => {
    const [sugestoes, setSugestoes] = useState([]);

    useEffect(() => {
        const fetchDados = async () => {
            try {
                const responseAnimais = await getTodosAnimaisComPersonalidade();

                const responseOngs = await getOngComDadosBancarios();

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
