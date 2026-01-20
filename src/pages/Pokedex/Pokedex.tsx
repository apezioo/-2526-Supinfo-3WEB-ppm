import { useState } from "react";
import { Link } from "react-router";
import { useDebounce } from "use-debounce";
import { useQuery } from "@tanstack/react-query";
import { config } from "@/services/config";

const fetchPokemons = async (urlToFetch: string, limit: number) => {
  const url = new URL(urlToFetch);
  url.searchParams.set("limit", limit.toString());
  const response = await fetch(url.toString());
  if (response.ok) {
    const data = await response.json();
    return data;
  }
  throw new Error("Failed to fetch pokemons");
};

export const PokedexPage = () => {
  const [limit, setLimit] = useState(20);
  const [search, setSearch] = useState("");
  const [urlToFetch, setUrlToFetch] = useState(config.BASE_API_URL);
  const [searchdebounce] = useDebounce(search, 1000);

  const { data, isLoading, error } = useQuery({
    queryKey: ["pokemons", urlToFetch, limit],
    queryFn: () => fetchPokemons(urlToFetch, limit),
  });

  const pokemons = data?.results || [];
  const next = data?.next || null;
  const previous = data?.previous || null;
  const count = data?.count || null;

  if (error) {
    return <p>Erreur lors du chargement des pokémons</p>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <button onClick={() => setUrlToFetch(previous!)} disabled={!previous}>
        Précédent
      </button>
      <button onClick={() => setUrlToFetch(next!)} disabled={!next}>
        Suivant
      </button>
      <select name="limit" id="limit" value={limit} onChange={(e) => setLimit(Number(e.target.value))}>
        <option value={20}>20</option>
        <option value={50}>50</option>
        <option value={100}>100</option>
        <option value={count || 0}>all</option>
      </select>
      {limit === count && (
        <input type="text" name="search" id="search" value={search} onChange={(e) => setSearch(e.target.value)} />
      )}
      {limit === count && searchdebounce !== "" && (
        <ul>
          {pokemons
            .filter((pokemon: { name: string; url: string }) => pokemon.name.includes(searchdebounce))
            .map((pokemon: { name: string; url: string }) => (
              <li key={pokemon.name}>
                <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
              </li>
            ))}
        </ul>
      )}
      {limit !== count && (
        <ul>
          {pokemons.map((pokemon: { name: string; url: string }) => (
            <li key={pokemon.name}>
              <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
