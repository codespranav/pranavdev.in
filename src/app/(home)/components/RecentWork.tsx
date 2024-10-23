"use client"
import React from 'react'
import Typewriter from 'typewriter-effect';

const RecentWork = () => {
    return (
        <section>
            <div className='content max-w-7xl mx-auto my-auto'>
                <h1>My Recent Work</h1>
                <h1>  <Typewriter
                    options={{
                        strings: ['Hello', 'World'],
                        autoStart: true,
                        loop: true,
                    }}
                /></h1>
                <p>Here are a few past design projects I've worked on. Want to see more? Email me.</p>
            </div>
        </section>
    )
}

export default RecentWork
