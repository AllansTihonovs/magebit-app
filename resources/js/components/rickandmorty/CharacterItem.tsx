import { CharacterItemProps } from '@/types/rickandmorty';
import { MouseEvent } from 'react';

const CharacterItem = ({ character, removeCharacter, onSelect }: CharacterItemProps) => {
    const handleRowClick = () => onSelect(character.id);

    const handleRemoveClick = (e: MouseEvent) => {
        e.stopPropagation();

        removeCharacter(character.id);
    };

    return (
        <li className={`flex cursor-pointer justify-between border p-2 shadow-xs`} onClick={handleRowClick} role="button">
            <div className="flex items-center">
                <img src={character.image} alt={character.name} className="mr-4 h-20 w-20" />
                <div className="flex flex-col">
                    <span className="font-bold">Name: {character.name}</span>
                    <span>Species: {character.species}</span>
                    <span className="text-sm">Origin: {character.origin.name}</span>
                </div>
            </div>
            <button className="ml-4 cursor-pointer font-bold" aria-label="Remove character" onClick={handleRemoveClick}>
                X
            </button>
        </li>
    );
};

export default CharacterItem;
