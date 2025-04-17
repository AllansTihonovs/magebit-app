import { useState, useEffect, useCallback, useRef } from 'react';
import axios from 'axios';
import { CharacterType, RickAndMortyResponse, UseCharacterPageResult } from '@/types/rickandmorty';

const useCharacterPagedListFetch = (page: number, searchQuery: string): UseCharacterPageResult => {
    const [characters, setCharacters] = useState<CharacterType[]>([]);
    const [totalPages, setTotalPages] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const isMounted = useRef(true);

    //Avoid setting state after unmount
    useEffect(() => {
        return () => {
            isMounted.current = false;
        };
    }, []);

    const fetchPage = useCallback(async () => {
        if (!isMounted.current) return;
        setLoading(true);
        setError(null);

        try {
            const params = new URLSearchParams({ page: String(page) });
            if (searchQuery.trim()) {
                params.append('name', searchQuery.trim());
            }
            const url = `https://rickandmortyapi.com/api/character/?${params.toString()}`;
            const response = await axios.get<RickAndMortyResponse>(url);

            if (isMounted.current) {
                setCharacters(response.data.results);
                setTotalPages(response.data.info.pages);
            }
        } catch (err: any) {
            if (isMounted.current) {
                setError('Failed to fetch characters.');
                setCharacters([]);
                setTotalPages(0);
            }
        } finally {
            if (isMounted.current) {
                setLoading(false);
            }
        }
    }, [page, searchQuery]);

    useEffect(() => {
        fetchPage();
    }, [fetchPage]);

    return { characters, totalPages, loading, error };
};

export default useCharacterPagedListFetch;
