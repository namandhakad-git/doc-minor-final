import React, { useState } from "react";

export default function Booking() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    doctor: "",
    date: "",
    time: "",
    symptoms: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      "Appointment Booked Successfully!\n\n" +
        JSON.stringify(form, null, 2)
    );

    // reset form after submit
    setForm({
      name: "",
      email: "",
      phone: "",
      doctor: "",
      date: "",
      time: "",
      symptoms: "",
    });
  };

  return (
    <div className="ml-64 p-6 min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">
        Book Appointment
      </h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-2xl bg-white shadow-xl rounded-2xl p-6 space-y-4"
      >
        {/* Name */}
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          required
        />

        {/* Email */}
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          required
        />

        {/* Phone */}
        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          required
        />

        {/* Doctor */}
        <select
          name="doctor"
          value={form.doctor}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">Select Doctor</option>
          <option value="Cardiologist">Cardiologist</option>
          <option value="Dentist">Dentist</option>
          <option value="Neurologist">Neurologist</option>
        </select>

        {/* Date */}
        <input
          name="date"
          type="date"
          value={form.date}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          required
        />

        {/* Time */}
        <input
          name="time"
          type="time"
          value={form.time}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          required
        />

        {/* Symptoms */}
        <textarea
          name="symptoms"
          value={form.symptoms}
          onChange={handleChange}
          placeholder="Describe your symptoms"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
        />

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white py-3 rounded-lg hover:opacity-90 transition"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
}