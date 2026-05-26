import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Doctors from "../pages/Doctors";
import Medicines from "../pages/Medicines";
import Booking from "../components/Header/Booking";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Cart from "../pages/Cart"
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/medicines" element={<Medicines />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}