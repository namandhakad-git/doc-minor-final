import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Doctors from "../pages/Doctors";
import Medicines from "../pages/Medicines";
import Booking from "../components/Header/Booking"
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/doctors" element={<Doctors />} />
       <Route path="/booking" element={<Booking />} />
      <Route path="/medicines" element={<Medicines />} />
    </Routes>
  );
}