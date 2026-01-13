import Header from "@/layout/Header";
import Footer from "@/layout/Footer";

import { GameOfLifePage } from "@pages/GameOfLife";
import { PokedexPage } from "@pages/Pokedex";
import { PokemonPage } from "@pages/Pokemon";

function App() {
  return (
    <main>
      <Header />
      <div className="router">
        {window.location.pathname === "/pokedex" ? (
          <PokedexPage />
        ) : window.location.pathname === "/pokemon" ? (
          <PokemonPage />
        ) : window.location.pathname === "/game-of-life" ? (
          <GameOfLifePage />
        ) : (
          <div>404 Not Found</div>
        )}
      </div>
      <Footer />
    </main>
  );
}

export default App;
