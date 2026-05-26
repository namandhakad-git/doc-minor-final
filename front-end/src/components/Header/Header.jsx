// ================= NEXT LEVEL HEADER (AI SEARCH + VOICE + KEYBOARD) =================

import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [recent, setRecent] = useState([]);

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

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowResults(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearchSelect = (item) => {
    setRecent((prev) => [item, ...prev.slice(0, 4)]);
    setQuery(item);
    setShowResults(false);
    navigate(`/search?query=${item}`);
  };

  // 🎤 Voice Search
  const handleVoice = () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.start();
    recognition.onresult = (e) => {
      const text = e.results[0][0].transcript;
      setQuery(text);
      setShowResults(true);
    };
  };

  return (
    <div className="ml-64 sticky top-0 z-50 backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 text-white border-b shadow">

      <div className="flex items-center justify-between px-6 py-3">

        {/* Logo */}
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent cursor-pointer"
          onClick={() => navigate("/")}
        >
          MediCare
        </motion.h1>

        {/* 🔥 AI SEARCH */}
        <div ref={searchRef} className="relative hidden md:flex w-1/3">

          <div className="flex items-center w-full px-5 py-2 rounded-full bg-white/70 white backdrop-blur border shadow focus-within:ring-2 focus-within:ring-blue-500">

            {/* 🔍 Google-style Search Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-400 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>

            <input
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setShowResults(true);
              }}
              onKeyDown={(e) => {
                if (e.key === "ArrowDown") setActiveIndex((p) => p + 1);
                if (e.key === "ArrowUp") setActiveIndex((p) => p - 1);
                if (e.key === "Enter")
                  handleSearchSelect(filteredResults[activeIndex] || query);
              }}
              placeholder="Search anything..."
              className="bg-transparent outline-none w-full px-2 text-sm text-gray-700 dark:text-white placeholder-gray-400"
            />

            {/* 🎤 Google-style Mic */}
            <button
              onClick={handleVoice}
              className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-gray-500 hover:text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 1v11m0 0a3 3 0 003-3V5a3 3 0 10-6 0v4a3 3 0 003 3z" />
                <path d="M19 10v2a7 7 0 01-14 0v-2" />
                <line x1="12" y1="19" x2="12" y2="23" />
              </svg>
            </button>

            {/* ❌ Clear */}
            {query && (
              <button
                onClick={() => setQuery("")}
                className="ml-2 p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-gray-500 hover:text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            )}
          </div>

          {/* Results */}
          {showResults && (
            <div className="absolute top-14 w-full bg-white dark:bg-gray-800 shadow-xl rounded-xl z-50">

              {recent.length > 0 && (
                <div className="p-2 text-xs text-gray-400">Recent</div>
              )}

              {recent.map((r, i) => (
                <div key={i} className="px-4 py-2 text-sm">⏱ {r}</div>
              ))}

              {filteredResults.map((item, i) => (
                <div
                  key={i}
                  onClick={() => handleSearchSelect(item)}
                  className={`px-4 py-2 cursor-pointer ${
                    i === activeIndex ? "bg-blue-100" : "hover:bg-gray-100"
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Nav */}
        <div className="hidden md:flex gap-6">
          {navItems.map((item, i) => (
            <Link key={i} to={item.path}>{item.name}</Link>
          ))}
        </div>

        <div className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>☰</div>
      </div>

      {menuOpen && (
        <div className="md:hidden p-4">
          {navItems.map((item, i) => (
            <Link key={i} to={item.path}>{item.name}</Link>
          ))}
        </div>
      )}
    </div>
  );
}