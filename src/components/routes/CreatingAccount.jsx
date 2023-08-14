import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BeatLoader } from 'react-spinners'

const CreatingAccount = () => {

  const nav = useNavigate();
  
  setTimeout(() => {
    nav("/login")
  }, 1000);

  return (
    <div style={{height:"calc(100vh - 100px"}} className='flex justify-center items-center bg-orange-300'>
        <div className='flex flex-col items-center h-[100px] justify-between'>
          <h1 className='text-5xl font-thin '>Creating Account</h1>
          <BeatLoader color="black" />
        </div>
    </div>
  )
}

export default CreatingAccount