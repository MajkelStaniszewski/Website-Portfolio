import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';

const Contact = () => {
  return (
    <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>
        Contact (sending messages is not available yet via form)
      </h1>

      {/* Contact Information with Icons */}
      <div className='flex justify-center items-center mt-4'>
        <div className='flex items-center mx-4'>
          <AiOutlineMail size={30} className='text-[#001b5e] mr-2' />
          <a href='mailto:staniszewskimichall@gmail.com' className='text-lg text-[#001b5e] font-semibold'>
            staniszewskimichall@gmail.com
          </a>
        </div>
        <div className='flex items-center mx-4'>
          <AiOutlineMail size={30} className='text-[#001b5e] mr-2' />
          <a href='mailto:s240180@dtu.dk' className='text-lg text-[#001b5e] font-semibold'>
          s240180@dtu.dk
          </a>
        </div>
      </div>

      <div className='flex justify-center items-center mt-4'>
        <div className='flex items-center mx-4'>
          <BsTelephone size={30} className='text-[#001b5e] mr-2' />
          <a href='tel:+48722372088' className='text-lg text-[#001b5e] font-semibold'>
          +48 722372088
          </a>
        </div>
        <div className='flex items-center mx-4'>
          <BsTelephone size={30} className='text-[#001b5e] mr-2' />
          <a href='tel:+4571520284' className='text-lg text-[#001b5e] font-semibold'>
            +45 71520284
          </a>
        </div>
      </div>

      <form action='' method='POST' encType='multipart/form-data'>
        <div className='grid md:grid-cols-2 gap-4'>
          <div className='flex flex-col'>
            <label className='uppercase text-sm py-2'>Name</label>
            <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' name='name' />
          </div>
          <div className='flex flex-col'>
            <label className='uppercase text-sm py-2'>Phone</label>
            <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' name='phone' />
          </div>
        </div>
        <div className='flex flex-col mt-4'>
          <label className='uppercase text-sm py-2'>Email</label>
          <input className='border-2 rounded-lg p-3 flex border-gray-300' type='email' name='email' />
        </div>
        <div className='flex flex-col mt-4'>
          <label className='uppercase text-sm py-2'>Subject</label>
          <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' name='subject' />
        </div>
        <div className='flex flex-col mt-4'>
          <label className='uppercase text-sm py-2'>Message</label>
          <textarea className='border-2 rounded-lg p-3 flex border-gray-300' rows='10' name='message' />
        </div>
        <button className='bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg font-bold'>Send Message</button>
      </form>
    </div>
  );
};

export default Contact;