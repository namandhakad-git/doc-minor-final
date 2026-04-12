import { motion } from "framer-motion";

export default function Footer() {
  return (
    <div className="ml-64 mt-20 relative overflow-hidden">

      {/* 🌈 Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-700 animate-gradient opacity-90"></div>

      {/* ✨ Glass Effect */}
      <div className="relative backdrop-blur-xl bg-white/10 text-white p-12 rounded-t-3xl shadow-2xl">

        <div className="grid grid-cols-4 gap-10">

          {/* 🏥 About */}
          <div>
            <h2 className="text-2xl font-bold mb-4">MediCare</h2>
            <p className="text-sm opacity-80 leading-relaxed">
              A modern healthcare platform where you can book appointments,
              consult doctors, and order medicines — all in one place.
            </p>
          </div>

          {/* 🔗 Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {["Home", "Doctors", "Medicines", "Appointments"].map((item, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 5 }}
                  className="cursor-pointer hover:text-yellow-300 transition"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* 📞 Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>

            <div className="space-y-3 text-sm">
              <p>📧 support@medicare.com</p>
              <p>📞 +91 9876543210</p>
              <p>📍 Bhopal, India</p>
            </div>
          </div>

          {/* 🌐 Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>

            <div className="mb-4 text-sm opacity-80">
              Subscribe to get latest updates
            </div>

            <div className="relative">
              <input
                placeholder="Enter your email"
                className="w-full p-3 rounded-lg bg-white text-black focus:outline-none"
              />
              <button className="absolute right-1 top-1 bottom-1 bg-yellow-400 px-4 rounded-lg text-black font-semibold hover:bg-yellow-300 transition">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* 🔻 Bottom Bar */}
        <div className="mt-10 border-t border-white/30 pt-4 flex justify-between text-sm opacity-80">
          <p>© 2026 MediCare. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}