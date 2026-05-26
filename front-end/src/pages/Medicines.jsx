import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import MedicineCard from "../components/MedicineCard";
import { medicines } from "../data/medicines";

export default function Medicines() {
  const [search, setSearch] = useState("");

  const filtered = medicines.filter((m) =>
    m.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Sidebar />

      {/* if your Topbar supports search */}
      <Topbar setSearch={setSearch} />

      <div className="ml-64 p-6">

        {/* TITLE */}
        <h1 className="text-2xl font-bold mb-4">
          Medicines Store 💊
        </h1>

        {/* GRID (same as doctors page) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">

          {filtered.map((med, i) => (
            <MedicineCard key={med.id} med={med} index={i} />
          ))}

        </div>
      </div>
    </div>
  );
}