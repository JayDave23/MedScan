'use client'
import React, { useState } from 'react';
import Link from 'next/link';

function AppointmentForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [doctor, setDoctor] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add logic to submit the form data to a server or perform other actions
    console.log('Appointment booked:', { name, email, doctor, date });
  };

  return (
    <div className="border border-black rounded-[1rem] ">
      <h2 className=" text-[5vh] font-extrabold ml-[40vw] mt-[5vh]">Book an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div className='py-[2vh] px-[5vw]'>
        <label className=" text-[2vh] font-bold ml-[40vw] mt-[10vh]">
          Full Name:
          <input className="border border-black rounded-[1.4rem]"type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>

        </div>
        
        <br />
        <div className='py-[2vh] px-[5vw]'>
        <label className=" text-[2vh] font-bold ml-[40vw] mt-[5vh]">
          Email:
          <input className="border border-black rounded-[1.4rem]" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        </div>
        <br />
        <div className='py-[2vh] px-[5vw]'>
        <label className=" text-[2vh] font-bold ml-[40vw] mt-[5vh]">
          Doctor:
          <input className="border border-black rounded-[1.4rem]" type="text" value={doctor} onChange={(e) => setDoctor(e.target.value)} />
        </label>
        </div>
        <br />
        <div className='py-[2vh] px-[5vw]'>
        <label className=" text-[2vh] font-bold ml-[40vw] mt-[5vh]">
          Date:
          <input className="border border-black rounded-[1.4rem]" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </label>
        </div>
        <br />
        <Link href="/Patient">
        <button className=' py-[2vh] px-[5vw] border-2 border-black ml-[45vw] mt-[3vh] rounded-[1.4rem] mb-[5vh] font-semibold bg-[#D2D4C8]' type="submit">Book Appointment</button>
        </Link>
      </form>
    </div>
  );
}

export default AppointmentForm;