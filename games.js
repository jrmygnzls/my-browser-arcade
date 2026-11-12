/*
  GAME CATALOG — this is the only file you need to edit when adding/removing games.
  Add one object per game. The href must point to that game's index.html.
*/
window.ARCADE_GAMES = [
  {
    id: "sudoku",
    title: "Endless Sudoku",
    genre: "Puzzle",
    description: "Randomly generated Sudoku puzzles with endless levels, notes, hints, and saved progress.",
    href: "./games/sudoku/index.html",
    icon: "▦",
    theme: "sudoku",
    tags: ["Offline", "Endless"]
  },
  {
    id: "chess",
    title: "Chess Arena",
    genre: "Strategy",
    description: "Play against computer opponents or challenge a friend online using a six-digit room code.",
    href: "./games/chess/index.html",
    icon: "♞",
    theme: "chess",
    tags: ["Bot AI", "Online multiplayer"]
  },
  {
    id: "nightfall",
    title: "Nightfall: Endless Hunt",
    genre: "Survival Roguelite",
    description: "Build randomized weapon and passive combinations, defeat monster hordes, and survive endless waves.",
    href: "./games/nightfall/index.html",
    icon: "☄",
    theme: "nightfall",
    tags: ["Offline", "Endless waves"]
  },
  {
    id: "mazebound",
    title: "Mazebound: Ancients Defense",
    genre: "Tower Defense",
    description: "Build your own maze with towers, unlock specializations, and defend the Ancient through escalating waves.",
    href: "./games/mazebound/index.html",
    icon: "⌖",
    theme: "mazebound",
    tags: ["Offline", "Unlockable towers"]
  }
];
