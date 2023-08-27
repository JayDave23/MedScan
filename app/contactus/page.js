import React from 'react';

//CONTACT US

const page = () => {
  return (
    <div className="py-[12vh] bg-[#B8BDB5]">
        <h1 className="text-[8vh] text-center text-[#5F7470] font-extrabold">Contact Us</h1>
        <p className="text-[4vh] text-center text-[#5F7470] font-light">Feel free to reach out to us through various channels:</p>

        <div className="flex py-[5vh]">

{/* Division 1 */}
<div className="mr-4 bg-gradient-to-b from-[#D2D4C8] to-[#e6ecc6] h-[50vh] w-[25vw] flex justify-center items-center text-[3vw] border border-transparent rounded-[1.8rem] ">
  <div className='text-center font-extrabold text-[#5F7470]'>
    <a href="https://www.instagram.com/mohfwindia/?hl=en">INSTAGRAM </a>
    <img src='instagram.svg'  className="h-[10vh] w-[10vw] ml-[4vw]"></img>
  </div>
 

</div>

{/* Division 2 */}
<div className="mr-4 bg-gradient-to-b from-[#D2D4C8] to-[#e6ecc6] h-[50vh] w-[25vw] flex justify-center items-center text-[3vw] border border-transparent rounded-[1.8rem] ">
  <div className='text-center font-extrabold text-[#5F7470]'>
     <a href="/">FACEBOOK</a> 
     <img src='facebook.svg'  className="h-[10vh] w-[10vw] ml-[4vw]"></img>
  </div>
</div>

{/* Division 3 */}
<div className="mr-4 bg-gradient-to-b from-[#D2D4C8] to-[#e6ecc6] h-[50vh] w-[25vw] flex justify-center items-center text-[3vw] border border-transparent rounded-[1.8rem] ">
<div className='text-center font-extrabold text-[#5F7470]'>
   <a href="/">TWITTER</a> 
   <img src='twitter.svg'  className="h-[10vh] w-[10vw] ml-[2vw]"></img>
  </div>
</div>

{/* Division 4 */}
<div className="bg-gradient-to-b from-[#D2D4C8] to-[#e6ecc6] h-[50vh] w-[25vw] flex justify-center items-center text-[3vw] border border-transparent rounded-[1.8rem] ">
<div className='text-center font-extrabold text-[#5F7470]'>
    <a href="/">CALL US</a>
    <img src='phone-solid.svg'  className="h-[10vh] w-[10vw] ml-[2.5vw]"></img>
  </div>
</div>
</div>
    </div>
  );
};

export default page;