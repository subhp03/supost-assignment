type VictoryPopupProps = {
  winner: "X" | "O";
  onNewGame: () => void;
  onClose: () => void;
};

export default function VictoryPopup({
  winner,
  onNewGame,
  onClose,
}: VictoryPopupProps) {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/60 px-4"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        className="w-full max-w-xs rounded-lg border-2 border-cream bg-night p-6 text-center shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-3xl">
          Player{" "}
          <span className={winner === "X" ? "text-ember" : "text-moss"}>
            {winner}
          </span>{" "}
          wins!
        </h2>
        <div className="mt-6 flex justify-center gap-3">
          <button
            className="cursor-pointer rounded-lg border-2 border-cream bg-ember px-4 py-2 text-night hover:brightness-110"
            onClick={onNewGame}
          >
            New Game
          </button>
          <button
            className="cursor-pointer rounded-lg border-2 border-cream px-4 py-2 hover:bg-cream/10"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
