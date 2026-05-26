export default function CartItem({ item }) {
    return (
      <div className="bg-white shadow p-4 rounded flex justify-between">
        <div>
          <h3 className="font-bold">{item.name}</h3>
          <p className="text-gray-500">Qty: {item.quantity}</p>
        </div>
  
        <div className="text-purple-600 font-bold">
          ₹{item.price}
        </div>
      </div>
    );
  }