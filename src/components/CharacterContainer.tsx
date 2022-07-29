import Character from "./Character";
import { Character as ICharacter } from "../interfaces/Character";

interface Props {
  characters: ICharacter[];
  loading: boolean;
}

const CharacterContainer = ({ characters, loading }: Props) => {
  if (loading) {
    return <div className="text-center">Buscando personajes...</div>;
  }

  return (
    <>
      {characters.length > 0 &&
        characters.map((character: ICharacter) => (
          <div className="col mb-3" key={character.id}>
            <Character {...character} />
          </div>
        ))}
    </>
  );
};

export default CharacterContainer;
