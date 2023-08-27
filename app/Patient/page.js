import React from 'react'
import Link from 'next/link'
const page = () => {
  return (
    <>
    <div className='flex-col text-[2vw] text-center pt-5 bg-[#D2D4C8]'>
    <div className='  mx-auto ' >
        <p>
            GENERATED QR FOR DETAILS
        </p>
    </div>
    <div className='h-[8vh]'></div>
    <div className='  mx-auto justify-center w-[18vw] h-[35vh] text-white bg-[url(/qrcode.jpg)] bg-contain '>    
    </div>
    <div className='h-[8vh]'></div>

    </div>
    
    <div className=' flex-col justify-center bg-[#5F7470] h-[13vh] mb-[0.5vh] text-white text-[1.5vw] '>
        <div>
        <p className='pt-[1vh] ml-[43vw]'>FOR APPOINTMENT</p>
        </div>
        <div>
        <Link href='/bookappointment' className=' w-[40vw] ml-[46vw]  px-5 mr-2 text-sm font-medium focus:outline-none bg-white rounded-lg border border-gray-200  text-[#5F7470] focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-white dark:bg-white dark:text-gray-800 dark:border-[#d8d30] dark:hover:text-black dark:hover:bg-[#d2d4c8]' >Book now</Link>
        </div>
    </div>
    <div className=" text-[#5F7470] text-center text-[1.5vw] ml-[1.5vw]">
           <p>MEDICAL GOING DIGITAL</p> 
    </div>
    </>
  )
}
export default page;