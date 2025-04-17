import React from 'react';
import useCharacterFetch from '@/hooks/useCharacterFetch';
import { CharacterDetailProps } from "@/types/rickandmorty/component-props";

export default function CharacterDetail({ id, onClose }: CharacterDetailProps) {
    const { character, error } = useCharacterFetch(id);

    if (error || !character) return <p>{error || 'Character not found.'}</p>;

    return (
        <div className="border rounded p-4 mb-4 bg-white">
            <h2 className="text-2xl font-bold mb-4">Details:</h2>
            <button className="mb-2 border px-2 rounded cursor-pointer bg-gray-100 hover:bg-gray-200" onClick={onClose}>← Back</button>
            <div className="flex items-center">
                <img src={character.image} alt={character.name} className="w-50 h-50 mr-4" />
                <div>
                    <h2 className="text-xl font-bold">{character.name}</h2>
                    <p>Status: {character.status}</p>
                    <p>Species: {character.species}</p>
                    <p>Type: {character.type || 'unknown'}</p>
                    <p>Gender: {character.gender}</p>
                    <p>Origin: {character.origin.name}</p>
                    <p>Location: {character.location.name}</p>
                </div>
            </div>
        </div>
    );
}
