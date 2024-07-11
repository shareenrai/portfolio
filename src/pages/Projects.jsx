import React from 'react'
import { projects } from '../constants'
import { Link } from 'react-router-dom'
import CTA from '../components/CTA'

const Projects = () => {
    return (
        <section className="w-full h-screen relative mt-20 left-10 ">
            <div>
                <h1 className=" jacquard-24-charted-regular sm:text-7xl text-white text-center justify-center flex ">projects</h1>
            </div>
            <div className='jacquard-24-charted-regular text-4xl m-10 text-center justify-center flex'>
                <p>i've embarked on numerous projects throughout my years across different mediums</p>
            </div>
            <div className="flex flex-col">
                <h1 className="libre-barcode-128-text-regular sm:text-4xl text-white justify-center text-center">take a look at my projects</h1>
            </div>


            <div className='flex flex-wrap my-20 gap-16 justify-center origin-center'>
                {projects.map((project) => (
                    <div className='lg:w-[400px] w-full' key={project.name}>
                        <div className='block-container w-12 h-12 justify-center'>
                            <div className={`rounded-xl ${project.theme}`} />
                            <div className=' rounded-xl flex justify-center items-center'>
                                <img
                                    src={project.iconUrl}
                                    alt='threads'
                                    className='w-1/2 h-1/2 object-contain'
                                />
                            </div>
                        </div>

                        <div className='mt-5 flex flex-col'>
                            <h4 className=' typing text-white    lkb n . text-xl' >
                                {project.name}
                            </h4>
                            <p className='mt-2 font-mono text-sm'>{project.description}</p>
                            <div className='mt-5 flex items-center gap-2 font-poppins'>
                                <Link
                                    to={project.link}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='libre-barcode-128-text-regular text-3xl'
                                >
                                    Live Link
                                </Link>
                                <img

                                    className='w-4 h-4 object-contain'
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <CTA />


        </section>
    )
}

export default Projects