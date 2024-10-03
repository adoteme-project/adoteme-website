import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';


const CardContext = createContext();


export const CardProvider = ({ children }) => {
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
        <CardContext.Provider value={{ sugestoes }}>
            {children}
        </CardContext.Provider>
    );
};

export const useCardContext = () => useContext(CardContext);
