import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-blue-700 text-white p-5 fixed">
      <h1 className="text-xl font-bold mb-8">MediCare</h1>

      <div className="space-y-4 flex flex-col">
        <Link to="/" className="hover:underline">Dashboard</Link>
        <Link to="/doctors" className="hover:underline">Doctors</Link>
        <Link to="/medicines" className="hover:underline">Medicines</Link>
      </div>
    </div>
  );
}