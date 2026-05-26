import { useState } from "react";
import { API } from "../services/api";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await API.post("/auth/register", form);
    alert("Registered successfully");

    navigate("/");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <form onSubmit={handleSubmit} className="bg-white/10 p-8 rounded-xl space-y-4">
        <h2 className="text-xl font-bold">Register</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 bg-gray-800 rounded"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 bg-gray-800 rounded"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button className="bg-green-600 w-full py-2 rounded">
          Register
        </button>

        <p className="text-sm">
          Already have an account?{" "}
          <Link to="/" className="text-blue-400">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}