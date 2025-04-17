import { useState, KeyboardEvent, ChangeEvent, FocusEvent } from 'react';
import { SearchInputProps } from "@/types/rickandmorty/component-props";

const SearchInput = ({ onSearch, onReset }: SearchInputProps) => {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        query.trim() === '' ?
            onReset():
            onSearch(query);
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
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
            className="p-2 border rounded w-full"
        />
    );
};

export default SearchInput;
