'use client'
import { useState } from 'react';
import Link from 'next/link';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#5f7470] py-[1vh] px-[1vw]">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">
          <a href="/"><img src="/logo.jpg" alt="logo" className='w-[4vw] h-[6vh]' /></a>
        </div>
        <div className="mr-[5vw] hidden md:flex justify-center space-x-4 ">
          <a href="/" className="text-white mt-3">Home</a>
          <a href="/aboutus" className="text-white mt-3">About</a>
          <a href="/generallogin" className="text-white mt-3">Services</a>
          <a href="/contactus" className="text-white mt-3">Contact</a>
          <a className=' mt-2 py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-white focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-white dark:bg-white dark:text-gray-800 dark:border-[#d8d30] dark:hover:text-black dark:hover:bg-[#d8d30]' href="/generallogin">Login</a>
          <a className='mt-2 py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-white focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-white dark:bg-white dark:text-gray-800 dark:border-[#d8d30] dark:hover:text-black dark:hover:bg-[#d8d30]' href="/generallogin">Sign up</a>
        </div>
        
        
        <div className="md:hidden">
          <button onClick={toggleNavbar} className="text-white">
            
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <Link href="#" className="block mt-4 px-4 py-2 text-white">Home</Link>
        <Link href="/about" className="block mt-4 px-4 py-2 text-white">About</Link>
        <Link href="/generallogin" className="block mt-4 px-4 py-2 text-white">Services</Link>
        <Link href="/contactus" className="block mt-4 px-4 py-2 text-white">Contact</Link>
        <Link className='py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-white focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-white dark:bg-white dark:text-gray-800 dark:border-[#d8d30] dark:hover:text-black dark:hover:bg-[#d8d30]' href="/generallogin">Login</Link>
        <Link className='py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-white focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-white dark:bg-white dark:text-gray-800 dark:border-[#d8d30] dark:hover:text-black dark:hover:bg-[#d8d30]' href="/generallogin">Sign up</Link>
        
      </div>
    </nav>
  );
}

export default Navbar;
