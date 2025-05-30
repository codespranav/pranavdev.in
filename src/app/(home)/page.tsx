import React from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import Newsletter from './components/Newsletter'
import FAQ from './components/FAQ'
import AboutMe from './components/about-me'

const page = () => {
  return (
    <section>
       <div className='fixed top-0 -z-10 h-full w-full'>
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
    </div>
        <Hero/>
        <AboutMe/>
        <Services/>
        <Newsletter/>
        {/* <RecentWork/> */}
        <FAQ/>

    </section>
  )
}

export default page
