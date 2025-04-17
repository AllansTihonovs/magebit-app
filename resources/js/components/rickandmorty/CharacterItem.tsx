import { MouseEvent } from 'react';
import { CharacterItemProps } from '@/types/rickandmorty';

const CharacterItem = ({ character, removeCharacter, onSelect }: CharacterItemProps) => {
    const handleRowClick = () => onSelect(character.id);

    const handleRemoveClick = (e: MouseEvent) => {
        e.stopPropagation();

        removeCharacter(character.id);
    };

    return (
        <li
            className={`flex justify-between border shadow-xs p-2 cursor-pointer`}
            onClick={handleRowClick}
            role="button"
        >
            <div className="flex items-center">
                <img src={character.image} alt={character.name} className="w-20 h-20 mr-4" />
                <div className="flex flex-col">
                    <span className="font-bold">Name: {character.name}</span>
                    <span>Species: {character.species}</span>
                    <span className="text-sm">Origin: {character.origin.name}</span>
                </div>
            </div>
            <button className="ml-4 font-bold cursor-pointer" aria-label="Remove character" onClick={handleRemoveClick}>
                X
            </button>
        </li>
    );
};

export default CharacterItem;
