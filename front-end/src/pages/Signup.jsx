import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white px-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            value={form.name}
            className="w-full p-3 bg-gray-800 rounded-lg outline-none"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            type="email"
            placeholder="Email"
            value={form.email}
            className="w-full p-3 bg-gray-800 rounded-lg outline-none"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <input
            type="password"
            placeholder="Password"
            value={form.password}
            className="w-full p-3 bg-gray-800 rounded-lg outline-none"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          <button className="bg-green-600 w-full py-3 rounded-lg font-semibold hover:bg-green-700">
            Sign Up
          </button>
        </form>

        <button
          onClick={() => navigate("/dashboard")}
          className="w-full mt-3 py-3 rounded-lg bg-blue-600 hover:bg-blue-700"
        >
          Skip
        </button>

        <p className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link to="/" className="text-blue-400 hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}