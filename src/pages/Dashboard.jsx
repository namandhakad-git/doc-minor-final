import Sidebar from "../components/Sidebar";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Reviews } from "../components/Reviews";
import { Graph } from "../components/Graph";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <Sidebar />
      <Header />

      <div className="ml-64 p-6 space-y-6">

        {/* 🔵 Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-2xl shadow">
          <h1 className="text-3xl font-bold">Welcome back 👋</h1>
          <p className="opacity-80">Manage your health easily</p>
        </div>

        {/* 📊 Stats Cards */}
        <div className="grid grid-cols-3 gap-6">
          {["Doctors", "Appointments", "Orders"].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow"
            >
              <h2 className="text-gray-500">{item}</h2>
              <p className="text-3xl font-bold mt-2">
                {Math.floor(Math.random() * 20) + 1}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ⚡ Quick Actions */}
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="font-semibold text-lg">Find Doctors</h2>
            <Link
              to="/doctors"
              className="inline-block mt-3 bg-blue-600 text-white px-4 py-2 rounded"
            >
              Explore
            </Link>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="font-semibold text-lg">Book Appointment</h2>
            <Link
              to="/doctors"
              className="inline-block mt-3 bg-green-600 text-white px-4 py-2 rounded"
            >
              Book
            </Link>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="font-semibold text-lg">Order Medicines</h2>
            <Link
              to="/medicines"
              className="inline-block mt-3 bg-purple-600 text-white px-4 py-2 rounded"
            >
              Order
            </Link>
          </div>
        </div>

        {/* 📊 Graph */}
        <Graph />

        {/* ⭐ Reviews */}
        <Reviews />

      </div>

      <Footer />
    </div>
  );
}