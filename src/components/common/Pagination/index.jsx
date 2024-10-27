import { useState } from 'react';

const Pagination = ({ items, renderGrid, itemsPerPageOptions = [3, 6, 9], itemLabel = "Cards" }) => {
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
        setCurrentPage(1);
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = items.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className="w-full">

            {renderGrid(currentItems)}

            <div className="flex flex-col items-center mt-8 gap-4">

                <div className="flex justify-center items-center gap-2 mb-4">
                    <label className="font-medium text-gray-700">{itemLabel} por página:</label>
                    <select
                        value={itemsPerPage}
                        onChange={handleItemsPerPageChange}
                        className="border px-3 py-1 rounded bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                    >
                        {itemsPerPageOptions.map(option => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="flex items-center gap-4">
                    <button
                        className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 ${currentPage === 1 ? 'bg-gray-400 text-gray-800 cursor-not-allowed' : 'bg-blue-700 text-white hover:bg-blue-800'
                            }`}
                        onClick={() => handleChangePage(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        Anterior
                    </button>

                    <span className="text-gray-800 font-medium">
                        Página <span className="font-bold">{currentPage}</span> de <span className="font-bold">{totalPages}</span>
                    </span>

                    <button
                        className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 ${currentPage === totalPages ? 'bg-gray-400 text-gray-800 cursor-not-allowed' : 'bg-blue-700 text-white hover:bg-blue-800'
                            }`}
                        onClick={() => handleChangePage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        Próxima
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Pagination;
