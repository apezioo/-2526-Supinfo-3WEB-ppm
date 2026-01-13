import { useState, useEffect } from "react";

const fetchPokemons = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon");
  if (response.ok) {
    const data = await response.json();
    return data.results;
  }
  throw new Error("Failed to fetch pokemons");
};

export const PokedexPage = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetchPokemons()
      .then((data) => setPokemons(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <ul>
        {pokemons.map((pokemon: { name: string; url: string }) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
};
