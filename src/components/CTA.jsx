import React from 'react'
import { Link } from 'react-router-dom'


const CTA = () => {
    return (
        <section className='m-5 border-white'>
            <p className='typing text-white'>
                have a project in mind?
                <br sm:block hidden /> lets bring it to life!
            </p>
            <Link to='/contact' className='glow-text'>
                contact me
            </Link>

        </section>
    )
}

export default CTA