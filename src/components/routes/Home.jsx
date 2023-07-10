import React from 'react'
import img from '../img/watches.jpg'
import "./home.css"

const Home = () => {
  return (
    <div className="">
      <img className='size object-cover object-center w-[100vw]' src={img} alt="A few watches in their cases in a nicely designed wooden box"/>
    </div>   
  )
}

export default Home

// object-contain	
// object-cover
// object-fill
// object-none
// object-scale-down