export default function Scoreboard({
  scores,
}: {
  scores: { X: number; O: number; draws: number };
}) {
  const items = [
    { label: "Player X", value: scores.X },
    { label: "Draws", value: scores.draws },
    { label: "Player O", value: scores.O },
  ];

  return (
    <div className="my-4 flex justify-around rounded-lg border border-gray-300 p-3">
      {items.map(({ label, value }) => (
        <div key={label}>
          {label}
          <span className="block text-2xl font-semibold">{value}</span>
        </div>
      ))}
    </div>
  );
}
