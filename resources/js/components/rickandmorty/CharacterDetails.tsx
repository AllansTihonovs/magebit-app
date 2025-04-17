import useCharacterFetch from '@/hooks/useCharacterFetch';
import { CharacterDetailProps } from '@/types/rickandmorty/component-props';

export default function CharacterDetail({ id, onClose }: CharacterDetailProps) {
    const { character, error } = useCharacterFetch(id);

    if (error || !character) return <p>{error || 'Character not found.'}</p>;

    return (
        <div className="mb-4 rounded border bg-white p-4">
            <h2 className="mb-4 text-2xl font-bold">Details:</h2>
            <button className="mb-2 cursor-pointer rounded border bg-gray-100 px-2 hover:bg-gray-200" onClick={onClose}>
                ← Back
            </button>
            <div className="flex items-center">
                <img src={character.image} alt={character.name} className="mr-4 h-50 w-50" />
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
