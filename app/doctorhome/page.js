'use client'
import React, { useState } from 'react';

function page() {
  const [transcription, setTranscription] = useState('');
  const [isRecording, setIsRecording] = useState(false);

  const startRecording = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = true;

    recognition.onstart = () => {
      setIsRecording(true);
    };

    recognition.onresult = (event) => {
      const transcript = event.results[event.results.length - 1][0].transcript;
      setTranscription(transcript);
    };

    recognition.onend = () => {
      setIsRecording(false);
    };

    recognition.start();
  };

  const stopRecording = () => {
    window.webkitSpeechRecognition && window.webkitSpeechRecognition.abort();
    setIsRecording(false);
  };

  const saveToFile = () => {
    const blob = new Blob([transcription], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'transcription.txt';
    a.click();
  };

  return (
    <div className=" pl-[40vw]flex-col align-middle justify-center  mt-[4vh] bg-[#B8BDB5]" >
        <div className='ml-[40vw]'>
        <div className=" text-[5vh] font-extrabold">
        <h1 className='text-[#5F7470]'>SPEECH TO TEXT</h1>
        </div>

        <div className="bg-[#D2D4C8]  text-[#5F7470] font-extrabold text-[3vh] border border-transparent rounded-[1.8rem] w-[15vw] h-[8vh] p-[2vh] ml=[5vw] mt-[4vh]">
        <button onClick={startRecording} disabled={isRecording}>
         Start Recording
        </button>
        </div>

        <div className="bg-[#D2D4C8] text-[#5F7470] font-extrabold text-[3vh] border border-transparent rounded-[1.8rem] w-[15vw] h-[8vh] p-[2vh] ml=[5vw] mt-[4vh]">
        <button onClick={stopRecording} disabled={!isRecording}>
         <a href='/'>Stop Recording</a>
        </button>
        </div>
        
        <div className="transcription ">{transcription}</div>
        
        <div className="bg-[#D2D4C8]  text-[#5F7470] font-extrabold text-[3vh] border border-transparent rounded-[1.8rem] w-[15vw] h-[8vh] p-[2vh] ml=[5vw] mt-[4vh] mb-[4vh]">
            <button onClick={saveToFile} disabled={!transcription}>
             <a href='/'>Click to Save</a>
            </button>
        </div>
        </div>

    </div>
  );
}

export default page;