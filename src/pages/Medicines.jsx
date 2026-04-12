import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { useCart } from "../context/CartContext";
import med1 from "../assets/medicine.jpg";
import med2 from "../assets/med2.jpg";
import toast from "react-hot-toast";

export default function Medicines() {
  const { addToCart } = useCart();

  const meds = [
    { name: "Paracetamol", price: 50 },
    { name: "Ibuprofen", price: 80 },
  ];

  const images = [med1, med2];

  return (
    <div>
      <Sidebar />
      <Topbar />

      <div className="ml-64 p-6 grid grid-cols-3 gap-4">
        {meds.map((m, i) => (
          <div key={i} className="bg-white p-5 rounded shadow">
            <img
              src={images[i % 2]}
              className="h-32 w-full object-cover rounded"
            />

            <h2 className="mt-2">{m.name}</h2>
            <p>₹{m.price}</p>

            <button
              onClick={() => {
                addToCart(m);
                toast.success("Added to cart");
              }}
              className="mt-2 bg-purple-600 text-white px-4 py-2 rounded w-full"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}