import React from 'react'
import WorkItem from './Workitem'

const data = [
    {
        year: 2024,
        title: 'Student Assistant in Microfabrication Process',
        company: 'DTU Health Tech',
        duration: 'till now',
        details: `
        A part-time academic position focused on assisting in the microfabrication of a centrifugal microfluidic device:
        • Fabricating microfluidic devices for cell culture applications. 
        • Supporting the microfabrication process of the centrifugal microfluidic device using CO2 laser cutting, CNC micro-milling, and other advanced techniques. 
        • Contributing to the design of the centrifugal microfluidic device using AutoCAD software. 
        • Participating in and assisting the team during the Festival of Biologics 2024 in Basel, Switzerland, engaging in presentations and discussions on microfluidic technology.
        `
    },
    {
        year: 2023,
        title: 'Customer Projects & Services',
        company: 'Schneider Electric',
        duration: '10 months',
        details: `
        In Schneider Electric, my primary responsibilities revolved around projects within Oil & Gas companies such as Orlen. These included:
        • Development of controller application for ESD (Emergency Shutdown System) and BMS (Burner Management System) using FBD programming language. 
        • Ensuring the validity of project assumptions through customer verification. 
        • Creating and designing automatic controller application tests. 
        • Preparing test procedures and participating in Factory Acceptance Tests (FAT).
        `
    },
    {
        year: 2021,
        title: 'Engineering Support',
        company: 'Joint Institute for Nuclear Research',
        duration: '35 days',
        details: `
        Thirty-five days of internship related to the NICA project in automation and cryogenics. I was involved in designing a system that would automate cryogenic processes for the superconducting magnet of MPD (Multi-Purpose Detector Magnet) and in the development of the Control System for the MFS (Magnet Flushing Station) using the LAD programming language.
        `
    },
];


const Work = () => {
    return(
        <div id='work' className='max-w-[1040px] m-auto md:-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5el'>Work</h1>
        {data.map( (item, idx) => (
            <WorkItem
            key={idx}
            year={item. year}
            title={item.title}
            duration={item.duration}
            company={item.company}
            details={item.details}
        />
            ))}      
       </div>
    );
};

export default Work