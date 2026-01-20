import { useParams } from "react-router";
import { useAtom } from "jotai";
import { useQuery } from "@tanstack/react-query";
import { userAtom } from "@/services/store";
import { config } from "@/services/config";

const fetchPokemon = async (name: string) => {
  const response = await fetch(`${config.BASE_API_URL}/${name}`);
  if (response.ok) {
    const data = await response.json();
    return data;
  }
  throw new Error("Failed to fetch pokemon");
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
  const { name } = useParams();
  const [user] = useAtom(userAtom);

  const {
    data: pokemon,
    isLoading,
    error,
  } = useQuery<Pokemon>({
    queryKey: ["pokemon", name],
    queryFn: () => fetchPokemon(name!),
    enabled: !!name,
  });

  if (error) {
    return <p>Failed to fetch pokemon</p>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isLoading) {
    return <p>Loading...</p>;
  }

  return pokemon ? (
    <>
      <h2>
        {pokemon.name} {pokemon.types.find((typeInfo) => typeInfo.type.name === user?.type) && "❤️"}
      </h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <div>
        <h3>Types</h3>
        <ul>
          {pokemon.types &&
            pokemon.types.map((typeInfo: PokemonType) => <li key={typeInfo.type.name}>{typeInfo.type.name}</li>)}
        </ul>
      </div>
    </>
  ) : null;
};
