import ThemeToggle from "./ThemeToggle";

export default function Topbar({ setSearch }) {
  return (
    <div className="ml-64 p-4 bg-white dark:bg-gray-800 flex justify-between">
      <input
        placeholder="Search..."
        onChange={(e) => setSearch && setSearch(e.target.value)}
        className="border px-3 py-1 rounded"
      />
      <ThemeToggle />
    </div>
  );
}