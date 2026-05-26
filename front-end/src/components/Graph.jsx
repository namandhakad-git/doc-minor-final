export function Graph() {
  const data = [5, 10, 7, 14, 9];

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl mb-4">Appointments Overview</h2>
      <div className="flex items-end gap-4 h-40">
        {data.map((d, i) => (
          <div
            key={i}
            className="bg-blue-500 w-10 rounded"
            style={{ height: `${d * 10}px` }}
          />
        ))}
      </div>
    </div>
  );
}