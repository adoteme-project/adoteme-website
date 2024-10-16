import { useState } from 'react';

const Pagination = ({ items, renderItem, itemsPerPageOptions = [3, 6, 9] }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(itemsPerPageOptions[0]);

    const totalPages = Math.ceil(items.length / itemsPerPage);

    const handleChangePage = (newPage) => {
        if (newPage > 0 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    const handleItemsPerPageChange = (event) => {
        setItemsPerPage(Number(event.target.value));
        setCurrentPage(1);  // Reseta para a primeira página ao mudar o número de itens por página
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = items.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className="w-full">
            {/* Seleção do número de itens por página */}
            <div className="flex justify-center mb-4">
                <label className="mr-2 font-medium">Cards por página:</label>
                <select
                    value={itemsPerPage}
                    onChange={handleItemsPerPageChange}
                    className="border px-2 py-1 rounded"
                >
                    {itemsPerPageOptions.map(option => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>

            {/* Renderizar os itens da página atual */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentItems.map(renderItem)}
            </div>

            {/* Controles de paginação */}
            <div className="flex justify-center items-center mt-6 gap-4">
                <button
                    className="bg-gray-300 px-4 py-2 rounded"
                    onClick={() => handleChangePage(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Anterior
                </button>
                <span>Página {currentPage} de {totalPages}</span>
                <button
                    className="bg-gray-300 px-4 py-2 rounded"
                    onClick={() => handleChangePage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Próxima
                </button>
            </div>
        </div>
    );
};

export default Pagination;
