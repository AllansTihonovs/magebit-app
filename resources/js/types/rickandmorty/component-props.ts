import { CharacterType } from '@/types/rickandmorty/general';

export interface PaginatorProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export interface CharacterItemProps {
    character: CharacterType;
    removeCharacter: (id: number) => void;
}

export interface CharacterListProps {
    characters: CharacterType[];
    removeCharacter: (id: number) => void;
    onSelect: (id: number) => void;
}

export interface SearchInputProps {
    onSearch: (query: string) => void;
    onReset: () => void;
}

export interface CharacterDetailProps {
    id: number;
    onClose: () => void;
}
