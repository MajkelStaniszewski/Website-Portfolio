import React from 'react';
import { FaDownload } from 'react-icons/fa';

const Resume = () => {
  return (
    <div id='resume' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>My Resume</h1>
      <p className='text-center py-4'>
        Below you can download a copy of my resume. Feel free to check it out!
      </p>
      <div className='flex justify-center'>
        <a
          href="/resume.pdf"
          download="Michał_Staniszewski_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className='flex items-center justify-center bg-[#001b5e] text-white px-6 py-3 rounded-lg font-bold shadow-lg shadow-gray-400 hover:scale-105 ease-in duration-300'
        >
          <FaDownload className='mr-2' />
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Resume;