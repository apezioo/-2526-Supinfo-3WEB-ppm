import { Layout } from "@/layout/Layout";

import { GameOfLifePage } from "@pages/GameOfLife";
import { PokedexPage } from "@pages/Pokedex";
import { PokemonPage } from "@pages/Pokemon";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router";

function App() {
  return (
    <Router>
      <main>
        <div className="router">
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/pokedex" replace />} />
              <Route path="/pokedex" element={<PokedexPage />} />
              <Route path="/pokemon" element={<PokemonPage />} />
              <Route path="/game-of-life" element={<GameOfLifePage />} />
              <Route path="*" element={<div>404 Not Found</div>} />
            </Route>
          </Routes>
        </div>
      </main>
    </Router>
  );
}

export default App;
