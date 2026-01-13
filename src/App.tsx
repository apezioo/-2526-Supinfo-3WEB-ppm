import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { generateGrid } from "./services/gameOfLife";

function App() {
  const grid = generateGrid(10);

  return (
    <main>
      <Header />
      <div className="app">
        {grid.map((line, index) => (
          <div className="line" key={index}>
            {line.map((cell, index) => (
              <span className="cell" key={index}>
                {cell ? "🦊" : "🤡"}
              </span>
            ))}
          </div>
        ))}
      </div>
      <Footer />
    </main>
  );
}

export default App;
