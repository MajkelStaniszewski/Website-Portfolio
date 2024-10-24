import React from 'react';

const Workitem = ({ year, title, duration, company, details }) => {
  // Split the details by the bullet point
  const detailParts = details.split('•');

  return (
    <ol className='flex flex-col md:flex-row relative border-l border-stone-200'>
      <li className='mb-10 ml-6 pl-6 relative'>
        <div className='absolute w-3 h-3 bg-stone-200 rounded-full -left-6 top-1.5 border-2 border-white' />
        <div className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
          <span className='inline-block px-2 py-1 font-semibold text-white bg-[#001b5e] rounded-md'>{year}</span>
          <span className='text-lg font-semibold text-[#01b5e]'>{title}</span>
          <span className='font-semibold'>{company}</span>
          <span className='my-1 text-sm font-normal leading-none text-stone-400'>{duration}</span>
        </div>
        <div className='my-2 text-base font-normal text-stone-500'>
          {detailParts.map((part, index) => (
            <p key={index}>
              {index > 0 ? `• ${part.trim()}` : part.trim()}
            </p>
          ))}
        </div>
      </li>
    </ol>
  );
};

export default Workitem;