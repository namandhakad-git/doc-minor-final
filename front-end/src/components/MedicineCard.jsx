import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function MedicineCard({ med, index }) {
  const navigate = useNavigate();

  return (
    <div className="bg-white p-4 rounded-2xl shadow hover:shadow-xl transition">

      {/* IMAGE (like DoctorCard) */}
      <img
        src={med.image}
        alt="medicine"
        className="w-full h-40 object-cover rounded-xl"
      />

      {/* NAME */}
      <h2 className="text-lg font-bold mt-3">{med.name}</h2>

      {/* DESCRIPTION */}
      <p className="text-gray-500 text-sm">{med.description}</p>

      {/* INFO ROW (like rating/location in doctors) */}
      <div className="flex justify-between mt-2 text-sm">
        <span className="text-yellow-500">⭐ {med.rating}</span>
        <span className="text-gray-400">📍 {med.location}</span>
      </div>

      {/* STOCK + PRICE */}
      <div className="flex justify-between mt-2">
        <span className="text-blue-600 font-bold">₹{med.price}</span>
        <span className="text-green-500 text-sm">{med.stock}</span>
      </div>

      {/* BUTTON */}
      <button
        onClick={() => {
          toast.success(`${med.name} selected`);
          navigate("/cart", { state: { medicine: med } });
        }}
        className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </div>
  );
}