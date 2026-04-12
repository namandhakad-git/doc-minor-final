import { useNavigate } from "react-router-dom";

export default function DoctorCard({ doc }) {
  const navigate = useNavigate();

  return (
    <div className="bg-white p-4 rounded-2xl shadow hover:shadow-xl transition">
      
      {/* 👨‍⚕️ Image */}
     <img
  src={`https://randomuser.me/api/portraits/med/${Math.floor(Math.random() * 90)}.jpg`}
  alt="doctor"
  className="w-full h-40 object-cover rounded-xl"
/>

      {/* Info */}
      <h2 className="text-lg font-bold mt-3">{doc.name}</h2>
      <p className="text-gray-500">{doc.spec}</p>

      <div className="flex justify-between mt-2 text-sm">
        <span className="text-yellow-500">⭐ {doc.rating}</span>
        <span className="text-gray-400">📍 {doc.location}</span>
      </div>

      {/* Book button */}
      <button
        onClick={() =>
          navigate("/booking", { state: { doctor: doc } })
        }
        className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
      >
        Book Now
      </button>
    </div>
  );
}