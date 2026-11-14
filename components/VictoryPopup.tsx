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
      className="fixed inset-0 flex items-center justify-center bg-black/40 px-4"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        className="w-full max-w-xs rounded-lg bg-white p-6 text-center shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold">Player {winner} wins!</h2>
        <div className="mt-6 flex justify-center gap-3">
          <button
            className="cursor-pointer rounded border border-gray-800 px-4 py-2 hover:bg-gray-100"
            onClick={onNewGame}
          >
            New Game
          </button>
          <button
            className="cursor-pointer rounded border border-gray-300 px-4 py-2 hover:bg-gray-100"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
