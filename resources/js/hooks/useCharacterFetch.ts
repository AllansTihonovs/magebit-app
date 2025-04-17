import { useState, useEffect } from 'react';
import axios from 'axios';
import { CharacterType } from '@/types/rickandmorty';

const useCharacterFetch = (id: number) => {
    const [character, setCharacter] = useState<CharacterType | null>(null);
    const [error, setError] = useState<string|null>(null);

    useEffect(() => {
        setError(null);

        axios
            .get<CharacterType>(`https://rickandmortyapi.com/api/character/${id}`)
            .then((res) => setCharacter(res.data))
            .catch(() => setError('Failed to load character.'));
    }, [id]);

    return { character, error };
}

export default useCharacterFetch
