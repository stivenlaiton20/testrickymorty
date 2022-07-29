import { useState, useEffect, useMemo } from "react";
import Pagination from "./components/Pagination";
import axios from "axios";
import CharacterContainer from "./components/CharacterContainer";
import { Character } from "./interfaces/Character";

const App = () => {
  const [characterName, setCharacterName] = useState("rick");
  const [error, setError] = useState(false);
  //Pagination states
  const [results, setResults] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [resultsPerPage] = useState(12);

  const fetchCharacters = async (characterName: string) => {
    try {
      setError(false);

      const { data }: any = await axios.get(
        `https://rickandmortyapi.com/api/character/?name=${characterName}`
      );
      setResults(data.results);
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    fetchCharacters(characterName);
  }, [characterName]);

  useMemo(() => fetchCharacters(characterName), [characterName]);

  // Get current posts
  const indexOfLastResults = currentPage * resultsPerPage;
  const indexOfFirstResults = indexOfLastResults - resultsPerPage;
  const currentResults = results.slice(indexOfFirstResults, indexOfLastResults);

  // Change page
  const paginate = (pageNumber: any) => setCurrentPage(pageNumber);

  const handleSearch = (event: any) => {
    event.preventDefault();
    setCharacterName(event.target[0].value);
  };

  return (
    <div className="App">
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <form onSubmit={handleSearch}>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Buscar personaje por su nombre"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                  name="name-input"
                />
                <button
                  className="btn btn-outline-secondary"
                  type="submit"
                  id="button-addon2"
                >
                  Buscar
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="row">
          {error ? (
            <div className="text-center">
              Hubo un error al hacer la búsqueda, intente nuevamente porfavor.
            </div>
          ) : (
            <>
              <CharacterContainer
                characters={currentResults}
                loading={loading}
              />
              <Pagination
                resultsPerPage={resultsPerPage}
                totalResults={results.length}
                paginate={paginate}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};
// return ;

export default App;
