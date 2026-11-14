import type { Cell } from "@/lib/game";

type BoardProps = {
  squares: Cell[];
  disabled: boolean;
  onPlay: (index: number) => void;
};

export default function Board({ squares, disabled, onPlay }: BoardProps) {
  return (
    <div className="mb-4 grid grid-cols-3 justify-center gap-2">
      {squares.map((value, i) => (
        <button
          key={i}
          className={`aspect-square rounded-lg border-2 border-cream bg-transparent text-6xl enabled:cursor-pointer enabled:hover:bg-cream/10 ${
            value === "X" ? "text-ember" : "text-moss"
          }`}
          disabled={disabled || value !== null}
          onClick={() => onPlay(i)}
        >
          {value}
        </button>
      ))}
    </div>
  );
}
