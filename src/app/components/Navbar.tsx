'use client'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import PranavLogo from "@/app/assets/pranav.builds logo.png"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const navigationLinks = [
        { name: "Home", link: "/" },
        { name: "About Me", link: "/about" },
        { name: "Blog", link: "/blog" },
        { name: "Works", link: "/works" },
    ]

    return (
        <header className='py-6 shadow-md px-4  z-50'>
            <nav className='flex justify-between items-center max-w-7xl mx-auto relative'>
                
                {/* Logo */}
                <div className=" font-medium text-lg cursor-pointer text-white group-hover:text-black">
                    <Link href="/">
                        <Image src={PranavLogo} alt='Pranav Singh Logo' quality={100} height={50} className='rounded-md'/>
                    </Link>
                </div>

                 {/* Circle Badge */}
                 {/* <div className="hidden md:flex absolute left-0 w-10 h-10 bg-secondary text-secondary rounded-full justify-center items-center font-bold ml-4">
                    Ps
                </div> */}


                {/* Mobile Toggle Icon */}
                <div className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </div>

                {/* Desktop Nav */}
                <ul className='hidden md:flex space-x-6 items-center text-sm'>
                    {navigationLinks.map((item, index) => (
                        <li key={index}>
                            <Link href={item.link} className='hover:text-blue-600 duration-200 text-white group-hover:text-black'>{item.name}</Link>
                        </li>
                    ))}
                </ul>

                {/* Desktop Button */}
                <button className='hidden md:block bg-secondary text-secondary w-28 h-10 rounded-3xl'>
                    Hire Me
                </button>

               
            </nav>

            {/* Mobile Menu */}
            <div
                className={clsx(
                    "transition-all duration-300 ease-in-out overflow-hidden md:hidden",
                    isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
                )}
            >
                <ul className='flex flex-col space-y-4 px-2 text-sm py-2'>
                    {navigationLinks.map((item, index) => (
                        <li key={index}>
                            <Link 
                                href={item.link}
                                onClick={() => setIsOpen(false)}
                                className='block py-2 px-4 rounded hover:bg-gray-100 text-paraColour group-hover:text-black'
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <button className='w-full bg-secondary text-secondary h-10 rounded-3xl'>
                            Hire Me
                        </button>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Navbar
