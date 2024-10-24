import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa'

const Main = () => {
  return (
    <div id='main' className='relative'>
      <img className='w-full h-screen object-cover scale-x-[-1]' src="src/components/8f49725b-f32b-4816-835d-1d79777d507c.JPG" alt="Main Background" />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center z-10 bg-white/50">
        <h1 className="sm: text-5xl text-4xl font-bold text-gray-800">I'm Michał Staniszewski</h1>
        <h2 className="flex sm:text-2xl text-1xl pt-4 text-gray-800">
          <TypeAnimation
            sequence={[
              "I'm a Tech Enthusiast",
              2000,
              "I'm a Sport Enthusiast",
              2000,
              "I'm a Master's student",
              2000,
              "I'm an Engineer",
              2000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '2em', display: 'inline-block' }}
            repeat={Infinity}
          />
        </h2>
        <div>
          <div className='flex justify-between pt-6 max-w-[300px] w-full'>
            <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className='cursor-pointer mx-2' size={30} />
            </a>
            <a href="https://www.instagram.com/staniszewskimajkel" target="_blank" rel="noopener noreferrer">
              <FaInstagram className='cursor-pointer mx-2' size={30} />
            </a>
            <a href="https://www.linkedin.com/in/michał-staniszewski-2b3977210/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className='cursor-pointer mx-2' size={30} />
            </a>
            <a href="https://github.com/MajkelStaniszewski" target="_blank" rel="noopener noreferrer">
              <FaGithub className='cursor-pointer mx-2' size={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main;