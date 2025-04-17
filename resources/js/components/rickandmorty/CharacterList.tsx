import { CharacterListProps } from '@/types/rickandmorty';
import CharacterItem from './CharacterItem';

const CharacterList = ({ characters, removeCharacter, onSelect }: CharacterListProps) => {
    return (
        <ul className="flex flex-col space-y-2 max-w-md m-auto">
            {characters.map((character) => (
                <CharacterItem
                    key={character.id}
                    character={character}
                    removeCharacter={removeCharacter}
                    onSelect={onSelect}
                />
            ))}
        </ul>
    );
};

export default CharacterList;
