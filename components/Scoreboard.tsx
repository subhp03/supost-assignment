export default function Scoreboard({
  scores,
}: {
  scores: { X: number; O: number; draws: number };
}) {
  const items = [
    { label: "Player X", value: scores.X, color: "text-ember" },
    { label: "Draws", value: scores.draws, color: "text-cream" },
    { label: "Player O", value: scores.O, color: "text-moss" },
  ];

  return (
    <div className="my-4 flex justify-around rounded-lg border-2 border-cream p-3">
      {items.map(({ label, value, color }) => (
        <div key={label}>
          {label}
          <span className={`block text-4xl ${color}`}>{value}</span>
        </div>
      ))}
    </div>
  );
}
