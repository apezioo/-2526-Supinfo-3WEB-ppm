import { Link } from "react-router";

const titles: Record<string, string> = {
  pokedex: "Pokedex",
  gameoflife: "Game of Life",
  pokemon: "Pokemon Detail",
};

const Header = () => {
  const title = titles[window.location.pathname.substring(1)];

  return (
    <header>
      <h1>Supinfo - 2526 - 3WEB</h1>
      <h2>{title}</h2>
      <title>{title}</title>
      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/pokedex">Pokedex</Link>
          </li>
          <li>
            <Link to="/gameoflife">Game of Life</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
