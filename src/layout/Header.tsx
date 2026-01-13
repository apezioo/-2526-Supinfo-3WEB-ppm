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
    </header>
  );
};
export default Header;
