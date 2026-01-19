import { createBrowserRouter } from "react-router";
import { Layout } from "@/layout/Layout";
import { GameOfLifePage } from "@pages/GameOfLife";
import { PokedexPage } from "@pages/Pokedex";
import { PokemonPage } from "@pages/Pokemon";
import { NotFoundPage } from "@pages/NotFound";

const routes = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { path: "/pokedex", Component: PokedexPage },
      { path: "/pokemon/:name", Component: PokemonPage },
      { path: "/game-of-life", Component: GameOfLifePage },
      { path: "*", Component: NotFoundPage },
    ],
  },
]);

export default routes;
