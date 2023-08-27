import React from 'react';

//MEDICAL STAFF

const buttonStyle = {
  height: '15vh', // Replace 'x' with the desired height value
  width: '30vw',  // Replace 'y' with the desired width value
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: 'auto',
};

function page() {
  return (
    <div className="h-[80vh] bg-[#B8BDB5]">
      <div className="py-[15vh]">
      <button style={buttonStyle} className="bg-[#D2D4C8] text-[#5F7470] font-extrabold text-[3vh] border border-transparent rounded-[1.8rem]"><a href='/patientlogin'>Register a New Patient</a></button>
      </div>
      <div>
      <button style={buttonStyle}  className="bg-[#D2D4C8] text-[#5F7470] font-extrabold text-[3vh] border border-transparent rounded-[1.8rem]"><a href='/patientreg'>Book an appointment</a></button>
      </div>
    </div>
  );
}

export default page;