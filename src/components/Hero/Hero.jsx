import React from 'react'
import image from '../assets/image.jpg'

import './Hero.css'
const Hero = () => {
  return (
    <div className='hero-container'>
        
      <div className="para2"><h1>Cloud Wings <br /> Surya & Co. </h1></div>
          <div className="para">
            <span className="word">Plan.</span>
            <span className="word">Fly.</span>
            <span className="word">Explore.</span>
          </div>
        
        
      <img className='hero-image' src={image} alt="" />
    </div>
  )
}

export default Hero
