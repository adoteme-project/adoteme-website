import { useState } from 'react';

const Filter = ({ onFilterChange }) => {
    const [selectedSize, setSelectedSize] = useState('');
    const [selectedSpecies, setSelectedSpecies] = useState('');
    const [selectedSex, setSelectedSex] = useState('');
    const [selectedCity, setSelectedCity] = useState('');

    const sizes = ['Pequeno', 'Médio', 'Grande'];
    const species = ['Cachorro', 'Gato', 'Pássaro', 'Outro'];
    const sexes = ['Masculino', 'Feminino'];

    const handleChange = (type, value) => {
        switch (type) {
            case 'size':
                setSelectedSize(value);
                break;
            case 'species':
                setSelectedSpecies(value);
                break;
            case 'sex':
                setSelectedSex(value);
                break;
            case 'city':
                setSelectedCity(value);
                break;
            default:
                break;
        }

        onFilterChange({
            size: selectedSize,
            species: selectedSpecies,
            sex: selectedSex,
            city: selectedCity,
        });
    };

    return (
        <div className="flex justify-center items-center space-x-4 mb-8 mt-28">
            <select
                value={selectedSize}
                onChange={(e) => handleChange('size', e.target.value)}
                className="border rounded-lg px-4 py-2 w-48"
            >
                <option value="">Todos os tamanhos</option>
                {sizes.map((size) => (
                    <option key={size} value={size}>{size}</option>
                ))}
            </select>

            <select
                value={selectedSpecies}
                onChange={(e) => handleChange('species', e.target.value)}
                className="border rounded-lg px-4 py-2 w-48"
            >
                <option value="">Todas as espécies</option>
                {species.map((species) => (
                    <option key={species} value={species}>{species}</option>
                ))}
            </select>

            <select
                value={selectedSex}
                onChange={(e) => handleChange('sex', e.target.value)}
                className="border rounded-lg px-4 py-2 w-48"
            >
                <option value="">Todos os sexos</option>
                {sexes.map((sex) => (
                    <option key={sex} value={sex}>{sex}</option>
                ))}
            </select>

            <input
                type="text"
                value={selectedCity}
                onChange={(e) => handleChange('city', e.target.value)}
                placeholder="Cidade"
                className="border rounded-lg px-4 py-2 w-48"
            />

            <button
                className="bg-lime-500 text-white px-6 py-2 rounded-lg"
                onClick={() => console.log('Filtrar')}
            >
                Buscar
            </button>
        </div>
    );
};

export default Filter;
