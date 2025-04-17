export interface CharacterType {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: {
        name: string;
        url: string;
    };
    image: string;
    location: string;
}

export interface PaginationInfo {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
}

export interface RickAndMortyResponse {
    info: PaginationInfo;
    results: CharacterType[];
}

export interface FetchState<T> {
    data: T | null;
    loading: boolean;
    error: Error | null;
}

export interface UseCharacterPageResult {
    characters: CharacterType[];
    totalPages: number;
    loading: boolean;
    error: string | null;
}
