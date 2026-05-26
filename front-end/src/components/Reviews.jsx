import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Star } from "lucide-react";

import user1 from "../assets/doctor.jpg";
import user2 from "../assets/doctor-2.jpg";

export function Reviews() {
  const [index, setIndex] = useState(0);

  const reviews = [
    {
      name: "Rahul Sharma",
      text: "Amazing platform! Booking appointments is super fast and seamless.",
      rating: 5,
      img: user1,
    },
    {
      name: "Priya Verma",
      text: "Clean UI and fast medicine delivery. Really impressed!",
      rating: 4,
      img: user2,
    },
    {
      name: "Aman Gupta",
      text: "Doctors are professional and system is well organized.",
      rating: 5,
      img: user1,
    },
    {
      name: "Neha Singh",
      text: "Loved the experience, everything works smoothly.",
      rating: 5,
      img: user2,
    },
    {
      name: "Rohit Jain",
      text: "Very useful app for booking appointments quickly.",
      rating: 4,
      img: user1,
    },
    {
      name: "Sneha Kapoor",
      text: "Great UI and easy navigation, very user-friendly.",
      rating: 5,
      img: user2,
    },
    {
      name: "Karan Mehta",
      text: "Highly recommended! Saves a lot of time.",
      rating: 5,
      img: user1,
    },
  ];

  // 🔄 Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // 👉 Swipe handling
  const handleSwipe = (direction) => {
    if (direction === "left") {
      setIndex((prev) => (prev + 1) % reviews.length);
    } else {
      setIndex((prev) =>
        prev === 0 ? reviews.length - 1 : prev - 1
      );
    }
  };

  return (
    <div className="relative p-10 rounded-3xl overflow-hidden">

      {/* 🎨 Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 animate-gradient opacity-20 blur-2xl"></div>

      <h2 className="text-3xl font-bold text-center mb-10 text-white relative">
        ⭐ What Our Users Say
      </h2>

      <div className="relative max-w-xl mx-auto">

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(e, info) => {
              if (info.offset.x < -100) handleSwipe("left");
              if (info.offset.x > 100) handleSwipe("right");
            }}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="backdrop-blur-lg bg-white/80 dark:bg-gray-800/80 p-6 rounded-2xl shadow-2xl"
          >
            {/* Floating effect */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={reviews[index].img}
                  className="w-14 h-14 rounded-full border-2 border-white shadow"
                />

                <div>
                  <h3 className="font-semibold text-lg text-gray-800 dark:text-white">
                    {reviews[index].name}
                  </h3>

                  <div className="flex text-yellow-400">
                    {Array(reviews[index].rating)
                      .fill(0)
                      .map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                  </div>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300">
                “{reviews[index].text}”
              </p>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}