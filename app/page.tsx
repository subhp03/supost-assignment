"use client";

import { useRef, useState } from "react";
import { confetti, useReward } from "react-rewards";
import Board from "@/components/Board";
import Scoreboard from "@/components/Scoreboard";
import VictoryPopup from "@/components/VictoryPopup";
import { calculateWinner, isDraw, type Cell } from "@/lib/game";

export default function Home() {
  const [squares, setSquares] = useState<Cell[]>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [scores, setScores] = useState({ X: 0, O: 0, draws: 0 });
  const [popupDismissed, setPopupDismissed] = useState(false);

  const winner = calculateWinner(squares);
  const draw = isDraw(squares);
  const gameOver = winner !== null || draw;

  const celebrationRef = useRef<HTMLDivElement>(null);
  const { reward } = useReward(celebrationRef, confetti);

  function handlePlay(index: number) {
    if (gameOver || squares[index]) return;

    const next = squares.slice();
    next[index] = xIsNext ? "X" : "O";
    setSquares(next);
    setXIsNext(!xIsNext);

    const newWinner = calculateWinner(next);
    if (newWinner) {
      setScores((s) => ({ ...s, [newWinner]: s[newWinner] + 1 }));
      reward();
    } else if (isDraw(next)) {
      setScores((s) => ({ ...s, draws: s.draws + 1 }));
    }
  }

  function newGame() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    setPopupDismissed(false);
  }

  let status: string;
  if (winner) status = `Player ${winner} wins!`;
  else if (draw) status = "It's a draw!";
  else status = `Next turn: ${xIsNext ? "X" : "O"}`;

  return (
    <main className="mx-auto max-w-sm px-4 py-8 text-center">
      <h1 className="text-3xl font-bold">Tic Tac Toe</h1>
      <Scoreboard scores={scores} />
      <div ref={celebrationRef} className="my-4 min-h-7 text-lg">
        {status}
      </div>
      <Board squares={squares} disabled={gameOver} onPlay={handlePlay} />
      <button
        className="cursor-pointer rounded border border-gray-800 px-4 py-2 hover:bg-gray-100"
        onClick={newGame}
      >
        New Game
      </button>
      {winner && !popupDismissed && (
        <VictoryPopup
          winner={winner}
          onNewGame={newGame}
          onClose={() => setPopupDismissed(true)}
        />
      )}
    </main>
  );
}
