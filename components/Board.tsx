import type { Cell } from "@/lib/game";

type BoardProps = {
  squares: Cell[];
  disabled: boolean;
  onPlay: (index: number) => void;
};

export default function Board({ squares, disabled, onPlay }: BoardProps) {
  return (
    <div className="mb-4 grid grid-cols-3 justify-center gap-1">
      {squares.map((value, i) => (
        <button
          key={i}
          className="aspect-square border border-gray-800 bg-white text-4xl font-semibold enabled:cursor-pointer enabled:hover:bg-gray-100"
          disabled={disabled || value !== null}
          onClick={() => onPlay(i)}
        >
          {value}
        </button>
      ))}
    </div>
  );
}
