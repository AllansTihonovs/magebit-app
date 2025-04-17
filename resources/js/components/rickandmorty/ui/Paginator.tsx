import { PaginatorProps } from '@/types/rickandmorty/component-props';
import { useMemo } from 'react';

const Paginator = ({ currentPage, totalPages, onPageChange }: PaginatorProps) => {
    const paginationNumbers = useMemo(() => {
        const maxVisible = 10;
        const pages = [];
        let startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));
        let endPage = startPage + maxVisible - 1;

        if (endPage > totalPages) {
            endPage = totalPages;
            startPage = Math.max(1, endPage - maxVisible + 1);
        }

        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }
        return pages;
    }, [currentPage, totalPages]);

    return (
        <div className="mt-4 flex items-center justify-center space-x-2">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="bg-gray-300 px-3 py-1 text-black disabled:opacity-50"
            >
                Previous
            </button>
            {paginationNumbers.map((page) => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={`px-3 py-1 ${page === currentPage ? 'bg-gray-500 text-white' : 'bg-gray-300 text-black'}`}
                >
                    {page}
                </button>
            ))}
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="bg-gray-300 px-3 py-1 text-black disabled:opacity-50"
            >
                Next
            </button>
        </div>
    );
};

export default Paginator;
