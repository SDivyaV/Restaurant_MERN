import React, { useEffect, useState } from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Link, useNavigate } from 'react-router-dom';

const Success = () => {
  const [countdown,setCounddown] = useState(10);
  const navigate = useNavigate();

  useEffect(() =>{
    const timeOutId = setInterval(()=>{
      setCounddown(prevCount => {
        if(prevCount === 1){
          clearInterval(timeOutId)
          navigate("/")
        }
        return prevCount - 1;
      })
    },1000)
    return () => clearInterval(timeOutId)
  },[navigate])
  return (
    <section className='notFound'>
      <div className='container'>
        <img src='/sandwich.png' alt='success' />
        <h1>Redirecting to home in {countdown} seconds ...</h1>
        <Link to={"/"}>Back to Home
          <span><ArrowRightAltIcon /></span>
        </Link>
      </div>
    </section>
  )
}

export default Success
