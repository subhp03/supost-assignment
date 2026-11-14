# Tic Tac Toe

A simple two-player tic tac toe game built with Next.js (App Router), TypeScript and Tailwind CSS. Built for a hiring assignment.

## Features

- Two players take turns as X and O, with X always moving first
- Game logic lives in `lib/game.ts`: a win is any of the 8 three-in-a-row lines (3 rows, 3 columns, 2 diagonals) held by one player, and a draw is a full board with no winner
- The result is shown above the board, and the board locks once the game ends
- Scoreboard tracking wins and draws (resets on page reload)
- Victory popup, confetti ([react-rewards](https://www.npmjs.com/package/react-rewards)) and a sound on a win
- Click sound on every button press
- **New Game** button clears the board and keeps the scores
- Retro look with Press Start 2P and VT323 fonts

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Other scripts:

```bash
npm run build   # production build
npm run start   # run the production build
npm run lint    # run ESLint
```

## Project structure

```
app/
  layout.tsx          Root layout and fonts
  page.tsx            Game state and logic
  globals.css         Tailwind import and color theme
components/
  Board.tsx           3x3 grid of squares
  Scoreboard.tsx      X / draws / O counts
  VictoryPopup.tsx    Modal shown when a player wins
lib/
  game.ts             Win and draw checks
public/               Sound effects (Mixkit)
```

## Credits

Sound effects from [Mixkit](https://mixkit.co/).
