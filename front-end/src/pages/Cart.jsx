import API from "../api/axios";

export default function Cart() {

  const placeOrder = async () => {
    try {
      const res = await API.post("/orders");

      console.log("ORDER PLACED:", res.data);
      alert("Order placed successfully!");
    } catch (err) {
      console.log(err);
      alert("Order failed");
    }
  };

  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold mb-4">Cart 🛒</h1>

      {/* PLACE ORDER BUTTON */}
      <button
        onClick={placeOrder}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Place Order
      </button>

    </div>
  );
}