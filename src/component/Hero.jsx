import React from 'react'
import ImageHero from '../assets/header.png'


const Hero = () => {
  return (
    <div className='text-center bg-cover h-screen lg:flex lg:items-center lg:justify-center py-36 w-full' style={{backgroundImage:`url(${ImageHero})`}}>
        <h1 className='font-bold text-[#ffffff] lg:text-8xl text-4xl '>
            <span className='font-thin'>Lets Start Making</span> <br>
            </br>Your Creativity
        </h1>
    </div>
  )
}
export default Hero
