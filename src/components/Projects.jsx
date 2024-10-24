import React from 'react';
import Projectitem from './Projectitem';
import propertyImg from '../assets/hej.JPG';
import cryptoImg from '../assets/hej.JPG';
import netflixImg from '../assets/hej.JPG';
import twitchImg from '../assets/hej.JPG';

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
      <p className='text-center py-8'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt maxime
        laudantium molestiae facere consectetur minima, soluta sint dolor, id culpa porro eius vel magnam. Atque temporibus dolor tempore vel non.
      </p>
      <div className='grid sm:grid-cols-2 gap-12'>
        <Projectitem img={propertyImg} title="Property App"  />
        <Projectitem img={cryptoImg} title="Crypto App" />
        <Projectitem img={netflixImg} title="Netflix Clone" />
        <Projectitem img={twitchImg} title="Twitch Clone" />
      </div>
    </div>
  );
};

export default Projects;