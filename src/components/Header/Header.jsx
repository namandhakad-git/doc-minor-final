// ================= IMPROVED HEADER COMPONENT =================
// Cleaner structure, reusable logic, functional features

import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [notifications, setNotifications] = useState([
    "Appointment confirmed",
    "New doctor added",
  ]);
  const [showNotifications, setShowNotifications] = useState(false);

  const searchRef = useRef();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Doctors", path: "/doctors" },
    { name: "Medicines", path: "/medicines" },
  ];

  const searchData = [
    "Cardiologist",
    "Dentist",
    "Neurologist",
    "Paracetamol",
    "Ibuprofen",
    "Skin Specialist",
  ];

  const filteredResults = searchData.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  // 🔒 Close search dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowResults(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // 🔍 Handle search click
  const handleSearchSelect = (item) => {
    setQuery(item);
    setShowResults(false);
    navigate(`/search?query=${item}`);
  };

  // 🔔 Toggle notifications
  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  // 🚪 Logout (dummy)
  const handleLogout = () => {
    alert("Logged out successfully");
  };

  return (
    <div className="ml-64 sticky top-0 z-50 backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 border-b shadow">

      <div className="flex items-center justify-between px-6 py-3">

        {/* Logo */}
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent cursor-pointer"
          onClick={() => navigate("/")}
        >
          MediCare
        </motion.h1>

        {/* Search */}
        <div ref={searchRef} className="relative hidden md:block w-1/3">

          <div className="flex items-center bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full focus-within:ring-2 focus-within:ring-blue-500">

            <input
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setShowResults(true);
              }}
              placeholder="Search doctors, medicines..."
              className="bg-transparent outline-none w-full text-sm"
            />

            {query && (
              <button
                onClick={() => {
                  setQuery("");
                  setShowResults(false);
                }}
                className="text-gray-500 hover:text-red-500"
              >
                ✖
              </button>
            )}
          </div>

          {showResults && query && (
            <div className="absolute top-12 left-0 right-0 bg-white dark:bg-gray-800 shadow-lg rounded-xl z-50">
              {filteredResults.length > 0 ? (
                filteredResults.map((item, i) => (
                  <div
                    key={i}
                    onClick={() => handleSearchSelect(item)}
                    className="px-4 py-2 hover:bg-blue-50 cursor-pointer"
                  >
                    {item}
                  </div>
                ))
              ) : (
                <p className="p-3 text-sm text-gray-500">No results found</p>
              )}
            </div>
          )}
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">

          {navItems.map((item, i) => (
            <Link
              key={i}
              to={item.path}
              className={`relative text-sm font-medium ${
                location.pathname === item.path
                  ? "text-blue-600"
                  : "hover:text-blue-500"
              }`}
            >
              {item.name}

              {location.pathname === item.path && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 right-0 -bottom-1 h-[2px] bg-blue-600"
                />
              )}
            </Link>
          ))}

          {/* Notifications */}
          <div className="relative">
            <div onClick={toggleNotifications} className="cursor-pointer">🔔</div>

            {showNotifications && (
              <div className="absolute right-0 mt-2 w-56 bg-white shadow-lg rounded">
                {notifications.length > 0 ? (
                  notifications.map((n, i) => (
                    <p key={i} className="px-4 py-2 hover:bg-gray-100">{n}</p>
                  ))
                ) : (
                  <p className="p-3 text-sm text-gray-500">No notifications</p>
                )}
              </div>
            )}
          </div>

          {/* Profile */}
          <div className="relative group">
            <div className="w-9 h-9 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 text-white flex items-center justify-center cursor-pointer">
              N
            </div>

            <div className="absolute right-0 mt-2 w-44 bg-white shadow-lg rounded hidden group-hover:block">
              <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Profile</p>
              <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Settings</p>
              <p
                onClick={handleLogout}
                className="px-4 py-2 hover:bg-gray-100 text-red-500 cursor-pointer"
              >
                Logout
              </p>
            </div>
          </div>

          {/* CTA */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate("/booking")}
            className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-5 py-2 rounded-full"
          >
            Book Now
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-white p-4 space-y-3">
          {navItems.map((item, i) => (
            <Link key={i} to={item.path} onClick={() => setMenuOpen(false)}>
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

