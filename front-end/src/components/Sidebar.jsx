import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import {
  LayoutDashboard,
  User,
  Pill,
  ChevronLeft,
  ChevronRight,
  Bell,
  Search,
  Sun,
  Moon
} from "lucide-react";
import { motion } from "framer-motion";

export default function Sidebar() {
  const location = useLocation();

  const [collapsed, setCollapsed] = useState(false);
  const [dark, setDark] = useState(false);
  const [search, setSearch] = useState("");

  const navItems = [
    { name: "Dashboard", path: "/", icon: LayoutDashboard, badge: 0 },
    { name: "Doctors", path: "/doctors", icon: User, badge: 2 },
    { name: "Medicines", path: "/medicines", icon: Pill, badge: 5 },
  ];

  const filtered = navItems.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      className={`h-screen fixed flex flex-col justify-between transition-all duration-300 shadow-xl ${
        collapsed ? "w-20" : "w-64"
      } ${
        dark
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-b from-blue-700 to-blue-900 text-white"
      }`}
    >
      {/* 🔝 TOP */}
      <div className="p-4">

        {/* Logo + Controls */}
        <div className="flex items-center justify-between mb-6">
          {!collapsed && <h1 className="text-xl font-bold">MediCare</h1>}

          <div className="flex gap-2">
            {/* 🌙 Dark toggle */}
            <button
              onClick={() => setDark(!dark)}
              className="p-1 rounded hover:bg-white/20"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Collapse */}
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="p-1 rounded hover:bg-white/20"
            >
              {collapsed ? <ChevronRight /> : <ChevronLeft />}
            </button>
          </div>
        </div>

        {/* 🔍 Sidebar Search */}
        {!collapsed && (
          <div className="flex items-center bg-white/10 px-3 py-2 rounded-lg mb-4">
            <Search size={16} className="mr-2 text-gray-300" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
              className="bg-transparent outline-none text-sm w-full placeholder-gray-300"
            />
          </div>
        )}

        {/* 🧭 NAV */}
        <div className="space-y-2">
          {filtered.map((item, i) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <Link key={i} to={item.path} className="relative">
                
                {/* Active Line */}
                {isActive && (
                  <motion.div
                    layoutId="active"
                    className="absolute left-0 top-0 bottom-0 w-1 bg-white rounded"
                  />
                )}

                <div
                  className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all group ${
                    isActive
                      ? "bg-white text-blue-700 shadow font-semibold"
                      : "hover:bg-white/20"
                  }`}
                >
                  <Icon size={20} />

                  {!collapsed && <span>{item.name}</span>}

                  {/* 🔔 Badge */}
                  {item.badge > 0 && !collapsed && (
                    <span className="ml-auto bg-red-500 text-xs px-2 rounded-full">
                      {item.badge}
                    </span>
                  )}

                  {/* Tooltip */}
                  {collapsed && (
                    <span className="absolute left-16 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                      {item.name}
                    </span>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* 👤 PROFILE */}
      <div className="p-4 border-t border-white/20">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-white text-blue-700 flex items-center justify-center font-bold">
              N
            </div>
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 border-2 border-gray-900 rounded-full"></span>
          </div>

          {!collapsed && (
            <div>
              <p className="text-sm font-semibold">X</p>
              <p className="text-xs text-gray-300">Patient</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}