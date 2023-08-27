"use client"
import React, { useState } from 'react';
import Link from 'next/link';

export default function page() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    email: '',
    phoneNumber: '',
    address: '',
    currentDisease: ''
  });
  
  

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
     // You can replace this with your submission logic
  };  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold mb-4">Registration Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full p-2 border rounded"
              value={formData.name}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="age"
              placeholder="Age"
              className="w-full p-2 border rounded"
              value={formData.age}
              onChange={handleInputChange}
            />
            <select
              name="gender"
              className="w-full p-2 border rounded"
              value={formData.gender}
              onChange={handleInputChange}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-2 border rounded"
              value={formData.email}
              onChange={handleInputChange}
            />
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
              className="w-full p-2 border rounded"
              value={formData.phoneNumber}
              onChange={handleInputChange}
            />
            <textarea
              name="address"
              placeholder="Address"
              className="w-full p-2 border rounded"
              value={formData.address}
              onChange={handleInputChange}
            ></textarea>
            <input
              type="text"
              name="currentDisease"
              placeholder="Current Disease"
              className="w-full p-2 border rounded"
              value={formData.currentDisease}
              onChange={handleInputChange}
            />
            <Link href="/Patient">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded"
            >
              Submit
            </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
module.exports  = formData
}
