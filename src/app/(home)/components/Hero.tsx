import Image from 'next/image'
import React from 'react'
import profilePic from '../../../assets/pranav_Dev.png'

const Hero = () => {
  return (
    <section className='px-4 md:px-0'>
      <div className='max-w-7xl mx-auto grid md:grid-cols-2 grid-cols-1 items-center justify-items-center gap-14 border-b border-neutral-800 pb-24'>
        <div className="welcometext ">
          <h1 className='text-4xl leading-tight text-heading'>Hii! I'm Pranav <br /><span className='text-white'>Freealance Web Developer</span> <br /><span className='text-white'>based in India.</span></h1>
          <p className='text-md mt-5 text-balance leading-normal text-paraColour'>I’m a passionate web developer with a deep expertise in building modern, responsive websites using the MERN stack. With a focus on creating user-friendly and engaging web experiences, I help businesses and individuals bring their ideas to life through clean and efficient code. Whether it's developing a static website or building a complex web application, I strive to deliver solutions that are not just functional but also visually stunning.</p>

          <div className="ctaction mt-5">
            <button className='bg-secondary w-44 h-12 rounded-full text-secondary font-semibold  '>View My Portfolio</button>
            <button className='bg-none border border-gray-100 w-44 h-12 rounded-full text-primary font-semibold ml-4 hover:bg-secondary hover:text-secondary transition-all'>Contact Me</button>
          </div>

          {/* TODO re desogm this */}
          {/* <div className="happy-clients flex relative mt-5">
            <div className="z-40 bg-yellow-300 rounded-full w-16 h-16 flex justify-center items-center text-black">05</div>
            <div className="z-30 bg-green-300 rounded-full w-16 h-16 flex justify-center items-center text-black absolute left-10">04</div>
            <div className="z-20 bg-blue-300 rounded-full w-16 h-16 flex justify-center items-center text-black absolute left-20">03</div>
            <div className=" z-10 bg-purple-300 rounded-full w-16 h-16 flex justify-center items-center text-black absolute left-32">04</div>
            <div className="z-0 bg-pink-300 rounded-full w-16 h-16 flex justify-center items-center text-black absolute left-44">05</div>
          </div> */}


        </div>

        <div className="image">
          <Image src={profilePic} alt='best website developer in bihar' className='rounded' />
        </div>
      </div>
    </section>
  )
}

export default Hero
