type grid = boolean[][];

type coords = {
  x: number;
  y: number;
};

export const generateGrid = (size: number): grid =>
  Array.from({ length: size }, () => {
    return Array.from({ length: size }, () => Math.random() > 0.8);
  });

const isOutOfBound = ({ length }: { length: number }, { x, y }: coords) => x < 0 || y < 0 || x >= length || y >= length;

const countAliveNeighbour = (grid: grid, { x, y }: coords): number =>
  [
    [x - 1, y - 1],
    [x - 1, y],
    [x - 1, y + 1],
    [x, y - 1],
    [x, y + 1],
    [x + 1, y - 1],
    [x + 1, y],
    [x + 1, y + 1],
  ].filter(([i, j]) => !isOutOfBound(grid, { x: i, y: j }) && grid[i][j]).length;

const nextState = (isAlive: boolean, numberOfAliveNeighbour: number) =>
  isAlive ? numberOfAliveNeighbour === 2 || numberOfAliveNeighbour === 3 : numberOfAliveNeighbour === 3;

export const nextGrid = (grid: grid) => {
  const newgrid = structuredClone(grid);
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      newgrid[i][j] = nextState(grid[i][j], countAliveNeighbour(grid, { x: i, y: j }));
    }
  }
  return newgrid;
};
