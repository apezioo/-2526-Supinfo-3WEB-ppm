import { Card } from "./components/Card";

import "./App.css";

function App() {
  const maListe = ["a", "b", "c"];

  return (
    <>
      <ul>
        {maListe.map((element) => (
          <li>{element}</li>
        ))}
      </ul>
      <Card title="Card 1" />
      <Card title="Card 2" />
      <Card title="Card 3" />
      <Card title="Card 4" />
      <Card title="Card 5" />
      <h1>Vite + React</h1>

      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
