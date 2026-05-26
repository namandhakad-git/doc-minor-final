import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import DoctorCard from "../components/DoctorCard";

export default function Doctors() {
  const [search, setSearch] = useState("");

 const doctors = [
  { name: "Dr Sharma", spec: "Cardiologist", rating: 4.5, location: "Bhopal" },
  { name: "Dr Verma", spec: "Dentist", rating: 4.2, location: "Indore" },
  { name: "Dr Amit Jain", spec: "Neurologist", rating: 4.8, location: "Delhi" },
  { name: "Dr Priya Singh", spec: "Dermatologist", rating: 4.3, location: "Mumbai" },
  { name: "Dr Rahul Gupta", spec: "Orthopedic", rating: 4.6, location: "Pune" },
  { name: "Dr Sneha Kapoor", spec: "Pediatrician", rating: 4.7, location: "Bhopal" },
  { name: "Dr Vikram Mehta", spec: "Psychiatrist", rating: 4.4, location: "Delhi" },
  { name: "Dr Neha Agarwal", spec: "Gynecologist", rating: 4.6, location: "Indore" },
  { name: "Dr Ankit Mishra", spec: "General Physician", rating: 4.1, location: "Bhopal" },
  { name: "Dr Ritu Saxena", spec: "ENT Specialist", rating: 4.3, location: "Jaipur" },
  { name: "Dr Karan Patel", spec: "Urologist", rating: 4.5, location: "Ahmedabad" },
  { name: "Dr Pooja Tiwari", spec: "Oncologist", rating: 4.7, location: "Delhi" },
  { name: "Dr Arjun Yadav", spec: "Radiologist", rating: 4.2, location: "Lucknow" },
  { name: "Dr Meena Joshi", spec: "Endocrinologist", rating: 4.4, location: "Bhopal" },
  { name: "Dr Rohit Bansal", spec: "Gastroenterologist", rating: 4.6, location: "Delhi" },
  { name: "Dr Kavita Sharma", spec: "Ophthalmologist", rating: 4.5, location: "Indore" },
  { name: "Dr Sandeep Dubey", spec: "Pulmonologist", rating: 4.3, location: "Bhopal" },
  { name: "Dr Nidhi Chaturvedi", spec: "Nephrologist", rating: 4.6, location: "Delhi" },
  { name: "Dr Mohit Saxena", spec: "Surgeon", rating: 4.7, location: "Mumbai" },
  { name: "Dr Ayesha Khan", spec: "Cosmetologist", rating: 4.2, location: "Hyderabad" },
];

 const filtered = doctors.filter(d =>
  d.name.toLowerCase().includes(search.toLowerCase()) ||
  d.spec.toLowerCase().includes(search.toLowerCase())
);
  return (
    <div>
      <Sidebar />
      <Topbar setSearch={setSearch} />

      <div className="ml-64 p-6 grid grid-cols-3 gap-4">
        {filtered.map((doc, i) => (
          <DoctorCard key={i} doc={doc} index={i} />
        ))}
      </div>
    </div>
  );
}