import Sidebar from "../components/Sidebar";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Reviews } from "../components/Reviews";
import { Graph } from "../components/Graph";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";





export default function Dashboard() {

  const stats = [
    { title: "Doctors", value: 12, change: "+2 this week" },
    { title: "Appointments", value: 5, change: "+1 today" },
    { title: "Orders", value: 8, change: "+3 new" },
  ];

  const activities = [
    "Appointment booked with Dr Sharma",
    "Medicine order delivered",
    "New doctor added",
  ];

  const upcoming = [
    { doctor: "Dr Sharma", time: "10:30 AM", type: "Cardiologist" },
    { doctor: "Dr Verma", time: "2:00 PM", type: "Dentist" },
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <Sidebar />
      <Header />
      

      <div className="ml-64 p-8 space-y-8">

        {/* 🧠 HEADER */}
        <div>
          <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">
            Dashboard
          </h1>
          <p className="text-gray-500 text-sm">
            Welcome back, manage everything from here
          </p>
        </div>

        {/* 📊 STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -3 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm"
            >
              <p className="text-sm text-gray-500">{item.title}</p>
              <h2 className="text-2xl font-semibold mt-2 text-gray-800 dark:text-white">
                {item.value}
              </h2>
              <p className="text-xs text-green-500 mt-1">{item.change}</p>
            </motion.div>
          ))}
        </div>

        {/* ⚡ QUICK ACTIONS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <Link to="/doctors" className="group">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border shadow-sm hover:shadow-md transition">
              <h2 className="font-medium text-gray-800 dark:text-white">
                Find Doctors
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Browse available specialists
              </p>
              <span className="text-blue-600 text-sm mt-3 inline-block group-hover:underline">
                Explore →
              </span>
            </div>
          </Link>

          <Link to="/booking" className="group">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border shadow-sm hover:shadow-md transition">
              <h2 className="font-medium text-gray-800 dark:text-white">
                Book Appointment
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Schedule a visit easily
              </p>
              <span className="text-green-600 text-sm mt-3 inline-block group-hover:underline">
                Book →
              </span>
            </div>
          </Link>

          <Link to="/medicines" className="group">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border shadow-sm hover:shadow-md transition">
              <h2 className="font-medium text-gray-800 dark:text-white">
                Order Medicines
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Get medicines delivered
              </p>
              <span className="text-purple-600 text-sm mt-3 inline-block group-hover:underline">
                Order →
              </span>
            </div>
          </Link>

        </div>

        {/* 📊 GRAPH + ACTIVITY */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Graph */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border shadow-sm">
            <h2 className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-4">
              Analytics Overview
            </h2>
            <Graph />
          </div>

          {/* Activity */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border shadow-sm">
            <h2 className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-4">
              Recent Activity
            </h2>

            <div className="space-y-4">
              {activities.map((act, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {act}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* 📅 APPOINTMENTS */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border shadow-sm">
          <h2 className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-4">
            Upcoming Appointments
          </h2>

          <div className="divide-y">
            {upcoming.map((u, i) => (
              <div key={i} className="py-3 flex justify-between items-center">
                <div>
                  <p className="font-medium text-gray-800 dark:text-white">
                    {u.doctor}
                  </p>
                  <p className="text-xs text-gray-500">{u.type}</p>
                </div>

                <span className="text-sm text-gray-600 dark:text-gray-300">
                  {u.time}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ⭐ Reviews */}
        <Reviews />

      </div>

      <Footer />
    </div>
  );
}