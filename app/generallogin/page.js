
import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <div className="flex py-20 bg-gradient-to-b from-[#D2D4C8] to-[#D2D4C8] ">
      {/* Division 1 */}
      <div className="mr-4 bg-gradient-to-b from-[#D2D4C8] to-[#D2D4C8] h-[40vh] w-[20vw] mx-[6vw] flex justify-center items-center text-[2vw] border-transparent rounded-[100rem] ">
        <div className='text-center font-extrabold text-[#475c58]'>
          <Link href="/doctorlogin">DOCTOR</Link>
        </div>
       

      </div>
      
      {/* Division 2 */}
      <div className="mr-4 bg-gradient-to-b  from-[#D2D4C8] to-[#D2D4C8] h-[40vh] w-[20vw] flex justify-center items-center text-[2vw] border-transparent rounded-[100rem] ">
        <div className='text-center font-extrabold text-[#475c58]'>
           <Link href="/stafflogin">HOSPITAL STAFF</Link> 
        </div>
      </div>
      
      {/* Division 3 */}
      <div className="mr-4 bg-gradient-to-b from-[#D2D4C8] to-[#D2D4C8] h-[40vh] w-[20vw] flex justify-center items-center text-[2vw] border-transparent rounded-[100rem] ">
      <div className='text-center font-extrabold text-[#475c58]'>
         <Link href="/patientlogin">PATIENT</Link> 
        </div>
      </div>
      
      {/* Division 4 */}
      <div className="bg-gradient-to-b from-[#D2D4C8] to-[#D2D4C8] h-[40vh] w-[20vw] flex justify-center items-center text-[2vw] border-transparent rounded-[100rem]">
      <div className='text-center font-extrabold text-[#475c58]'>
          <Link href="/pharmecylogin">PHARMACY STORE</Link>
        </div>
      </div>
    </div>
  );
};

export default page;