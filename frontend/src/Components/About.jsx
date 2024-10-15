import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
    <section className='about' id="about">
        <div className='container'>
            <div className='banner'>
                <div className='top'>
                    <h1 className='heading'>ABOUT US</h1>
                    <p>Welcome to One8</p>
                </div>
                <p className='mid'>
                    At One8, we believe in more than just great food – we’re about 
                    creating unforgettable dining experiences. 
                    Nestled in the heart of Pune, One8 is where culinary artistry meets a warm, inviting 
                    atmosphere. Our mission is to serve dishes that excite your taste 
                    buds and bring people together, from casual catch-ups to special 
                    celebrations.
                    Our chefs craft each dish with fresh, locally-sourced ingredients, 
                    blending flavors from around the world with our unique, signature 
                    touch. 
                    Whether you’re here to enjoy a relaxing meal, sip on our 
                    hand-crafted cocktails, or experience our exceptional service,
                    One8 is here to make every visit memorable.
                    At One8, every plate tells a story, and we can’t wait for you to be a part of it.
                </p>
                <Link to="/">Explore Menu{" "} 
                <span>
                    <ArrowRightAltIcon/>
                </span>
                </Link>
            </div>
            <div className='banner'>
                <img src='/about.png' alt='about' />
            </div>
        </div>
    </section>
    </div>
  )
}

export default About
