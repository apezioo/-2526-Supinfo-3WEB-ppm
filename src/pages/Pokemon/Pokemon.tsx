import { useEffect, useState } from "react";
import { useParams } from "react-router";

const fetchPokemons = async (urlToFetch: string) => {
  const response = await fetch(urlToFetch);
  if (response.ok) {
    const data = await response.json();
    return data;
  }
  throw new Error("Failed to fetch pokemons");
};

interface Pokemon {
  name: string;
  types: PokemonType[];
  sprites: {
    front_default: string;
  };
}

interface PokemonType {
  type: {
    name: string;
  };
}

export const PokemonPage = () => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { name } = useParams();
  useEffect(() => {
    fetchPokemons(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((data) => {
        setPokemon(data);
      })
      .catch((error) => {
        console.error(error);
        setError("Failed to fetch pokemon");
      });
  }, [name]);
  if (error) {
    return <p>{error}</p>;
  }
  return pokemon ? (
    <>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      {pokemon.types &&
        pokemon.types.map((typeInfo: PokemonType) => <span key={typeInfo.type.name}>{typeInfo.type.name} </span>)}
    </>
  ) : (
    <p>Loading...</p>
  );
};
