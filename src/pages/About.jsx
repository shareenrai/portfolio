import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { skills, experiences } from '../constants';
import { Shadow } from '@react-three/drei';
import CTA from '../components/CTA';

const About = () => {
    return (

        <section className="w-full h-screen relative mt-20 left-10">
            <div>
                <h1 className="glow-text sm:text-6xl text-pink-100">About Me</h1>
            </div>
            <div className='m-10'>
                <p>This is a message</p>
            </div>
            <div className="flex flex-col">
                <h1 className="glow-text sm:text-2xl text-pink-100">Skills</h1>

                <div className="flex flex-wrap gap-12">
                    {skills.map((skill) => (
                        <div className='block-container w-20 h-20 mt-10'>
                            <div className='btn-front rounded-xl flex justify-center items-center'>
                                <img
                                    src={skill.imageUrl}
                                    alt={skill.name}
                                    className="w-1/2 h-1/2 object-contain"
                                />
                            </div>
                            <h2 className="skill-name">{skill.name}</h2>
                        </div>
                    ))}
                </div>
            </div>

            <div className='flex flex-col'>
                <h1 className="glow-text sm:text-2xl text-pink-100 mt-10">Work</h1>
                <div className='mt-10 flex'>
                    <VerticalTimeline
                        lineColor='white'
                    >
                        {experiences.map((experience, index) => (
                            <VerticalTimelineElement
                                key={experience.company_name}
                                date={experience.date}

                                contentStyle={{
                                    background: 'black',
                                    color: 'white',
                                    borderStyle: 'solid',
                                    boxShadow: 'none',
                                    animate: 'true'
                                }}

                                icon={
                                    <div className='flex justify-center items-center w-full h-full'>
                                        <img
                                            src={experience.icon}
                                            alt={experience.company_name}
                                            className='w-[60%] h-[60%] object-contain'
                                        />
                                    </div>
                                }
                            >
                                <div className='bg-black'>
                                    <h3 className=' text-white font-mono font-regular text-xl m-1 '>
                                        {experience.title}
                                    </h3>
                                    <p
                                        className='text-white bg-black font-mono font-medium text-base'
                                        style={{ margin: 0 }}
                                    >
                                        {experience.company_name}
                                    </p>
                                </div>

                                <ul className='my-5 list-disc bg-black ml-5 font-mono text-s space-y-2'>
                                    {experience.points.map((point, index) => (
                                        <li
                                            key={`experience-point-${index}`}
                                            className='bg-black text-black-500/50 source-code-pro text-s pl-1 text-sm'
                                        >
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
                </div>
            </div>

            <CTA />


        </section>
    );
};

export default About;
