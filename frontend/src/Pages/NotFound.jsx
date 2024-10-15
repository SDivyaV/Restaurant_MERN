import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <section className='notFound'>
      <div className='container'>
        <img src='/notFound.svg' alt='notFound' />
        <p>LOOKS LIKE YOU'RE LOST</p>
        <p>We can't seem to find you the page you're looking for</p> 
        <Link to={"/"}>Back to Home
          <span><ArrowRightAltIcon /></span>
        </Link>
      </div> 
    </section>
  )
}

export default NotFound
