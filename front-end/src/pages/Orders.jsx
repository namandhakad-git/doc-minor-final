import { useEffect, useState } from "react";
import API from "../api/axios";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    API.get("/orders").then((res) => setOrders(res.data));
  }, []);

  return (
    <div>
      <Sidebar />
      <Topbar />

      <div className="ml-60 p-6">
        <h1 className="text-2xl font-bold text-purple-700 mb-5">
          Orders 📦
        </h1>

        {orders.map((o, i) => (
          <div key={i} className="bg-white p-4 shadow rounded mb-3">
            <p className="font-bold">Order #{i + 1}</p>
            <p>Total: ₹{o.totalAmount}</p>
            <p>Status: {o.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}