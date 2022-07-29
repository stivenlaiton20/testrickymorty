import { Character as ICharacter } from "../interfaces/Character";

const Character = (character: ICharacter) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={character.image} className="card-img-top" alt="character pic" />
      <div className="card-body">
        <h5 className="card-title">{character.name}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Status: {character.status}</li>
        <li className="list-group-item">Location: {character.location.name}</li>
        <li className="list-group-item">Specie: {character.species}</li>
      </ul>
    </div>
  );
};

export default Character;
