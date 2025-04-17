import { SearchInputProps } from '@/types/rickandmorty/component-props';
import { ChangeEvent, KeyboardEvent, useState } from 'react';

const SearchInput = ({ onSearch, onReset }: SearchInputProps) => {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        query.trim() === '' ? onReset() : onSearch(query);
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        e.key === 'Enter' && handleSearch();
    };

    const handleBlur = () => {
        handleSearch();
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    return (
        <input
            type="text"
            placeholder="Search characters by name"
            value={query}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            onBlur={handleBlur}
            className="w-full rounded border p-2"
        />
    );
};

export default SearchInput;
