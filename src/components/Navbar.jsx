import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <header className='header'>
            <NavLink to='/' className='w-10 h-10 rounded-lg items-center justify-center flex font-jacquard text-white shadow-md' >
                <p className='jacquard-12-regular text-white'>SR</p>
            </NavLink>
            <nav className='flex text-lg gap-7 font-medium'>
                <NavLink to='/about' className={({ isActive }) => isActive ? 'text-pink-200' : 'text-white'}>
                    about
                </NavLink>
                <NavLink to='/projects' className={({ isActive }) => isActive ? 'text-pink-200' : 'text-white'}>
                    projects
                </NavLink>
                <NavLink to='/contact' className={({ isActive }) => isActive ? 'text-pink-200' : 'text-white'}>
                    contact
                </NavLink>

            </nav>

        </header>
    )
}

export default Navbar