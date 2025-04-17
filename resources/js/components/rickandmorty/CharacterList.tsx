import { CharacterListProps } from '@/types/rickandmorty';
import CharacterItem from './CharacterItem';

const CharacterList = ({ characters, removeCharacter, onSelect }: CharacterListProps) => {
    return (
        <ul className="m-auto flex max-w-md flex-col space-y-2">
            {characters.map((character) => (
                <CharacterItem key={character.id} character={character} removeCharacter={removeCharacter} onSelect={onSelect} />
            ))}
        </ul>
    );
};

export default CharacterList;
