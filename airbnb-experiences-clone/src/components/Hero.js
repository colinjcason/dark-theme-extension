import React from 'react'
import heroImage from '../hero-image.png'

const Hero = () => {
  return (
    <div className='hero-container'>
      <img src={heroImage} alt='images' className='hero-image' />
      <h1>Online Experiences</h1>
      <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
    </div>
  )
}

export default Hero