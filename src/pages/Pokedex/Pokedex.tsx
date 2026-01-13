import { useState, useEffect } from "react";

const LIMIT_PAGE = 20;

const fetchPokemons = async ({ offset }: { offset: number }) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${LIMIT_PAGE}`);
  if (response.ok) {
    const data = await response.json();
    return data.results;
  }
  throw new Error("Failed to fetch pokemons");
};

export const PokedexPage = () => {
  const [pokemons, setPokemons] = useState([]);
  const [current_page, setCurrentPage] = useState(0);
  const offset = current_page * LIMIT_PAGE;

  useEffect(() => {
    fetchPokemons({ offset })
      .then((data) => setPokemons(data))
      .catch((error) => console.error(error));
  }, [current_page, offset]);

  const can_go_back = current_page > 0;
  const can_go_next = (current_page + 1) * LIMIT_PAGE < 150;

  return (
    <div>
      <button onClick={() => setCurrentPage(current_page - 1)} disabled={!can_go_back}>
        {" "}
        Précédent
      </button>
      <button onClick={() => setCurrentPage(current_page + 1)} disabled={!can_go_next}>
        Suivant
      </button>
      <ul>
        {pokemons.map((pokemon: { name: string; url: string }) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
};
