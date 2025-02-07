"use client"

import Image from "next/image";
import Logo from "../images/logo.webp";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

import { useEffect, useState } from "react";

import { motion } from "framer-motion";

const menuVariants = {
    hidden: {
      x: '100%'
    },
    show: {
      x: 0,
      transiton: {
        ease: [0.6, 0.01, -0.05, 0.9],
      },
    },
  };

export default function Header() {
    const [openMenu, setOpenMenu] = useState(false);

    useEffect(() => {
        document.querySelector(".tel-btn").addEventListener("mouseenter", (ev) => {
            ev.currentTarget.innerHTML = "+32 465 58 09 14"
        })
        document.querySelector(".tel-btn").addEventListener("mouseleave", (ev) => {
            ev.currentTarget.innerHTML = "Get a Free Estimate"
        })
        document.querySelector(".tel-btn-m").addEventListener("click", (ev) => {
            ev.currentTarget.innerHTML = "+32 465 58 09 14"
        })

    })  
    
    return (
        <header>
            <nav className="w-full relative bg-[#151515]">
                <ul className="hidden lg:flex flex-row justify-between p-4">
                    <div className="flex flex-row gap-x-10 items-center text-[#ffffff]">
                        <li>
                            <a href="/" className="flex flex-row items-center hover:scale-105 transition-all">
                                <span className="h3 text-[#fff]">BRESAP</span>
                                <Image width={44} src={Logo} alt="logo" />
                            </a> 
                        </li>
                    </div>

                    <div className="flex flex-row items-center gap-x-6 text-[#ffffff]">
                        <li><a className="hover:opacity-75" href="/">Home</a></li>
                        <li><a className="hover:opacity-75" href="/services">Services</a></li>
                        {/* <li><a className="hover:opacity-75" href="/about">About</a></li> */}
                        <li><a className="hover:opacity-75" href="/contact">Contact</a></li>
                        <a className="btn tel-btn w-44">Get a Free Estimate</a>
                    </div>
                </ul>
                <ul className="flex flex-row lg:hidden justify-between p-4">
                    <div className="flex flex-row gap-x-10 items-center text-[#ffffff]">
                        <li>
                            <a href="/" className="flex flex-row items-center">
                                <span className="h3 text-[#fff]">BRESAP</span>
                                <Image width={44} src={Logo} alt="logo" />
                            </a> 
                        </li>

                        
                    </div>

                    <div className="lg:hidden">
                        {/* nav open button */}
                        <div onClick={()=> setOpenMenu(true)} className='mobilenav_menu text-3xl cursor-pointer text-[#ffffff] transition-all duration-300'>
                            <GiHamburgerMenu />
                        </div>
                        {/* menu */}
                        <motion.div 
                        variants={menuVariants} 
                        initial='hidden'
                        animate={openMenu ? 'show' : ''}
                        className={`bg-white shadow-2xl w-full absolute
                        top-0 right-0 max-w-max h-screen z-20 ${ openMenu ? 'block' : 'hidden'}`}>
                            {/* icon */}
                            <div onClick={()=> setOpenMenu(false)} className='text-4xl absolute z-30 left-4 top-14 text-primary cursor-pointer'>
                            <IoMdClose />
                            </div>
                            {/* menu list */}
                                <ul className='h-full flex flex-col justify-center items-center gap-y-8
                                text-primary font-primary font-bold text-3xl p-14'>
                                    <li>
                                        <a onClick={() => setOpenMenu(false)} href='/'>Home</a>
                                    </li>
                                    <li>
                                        <a onClick={() => setOpenMenu(false)} href='/services'>Services</a>
                                    </li>
                                    <li>
                                        <a onClick={() => setOpenMenu(false)} href='/contact'>Contact</a>
                                    </li>
                                    <li>
                                        <a className=" btn tel-btn-m w-44">Get a Free Estimate</a>

                                    </li>
                                </ul>
                        </motion.div>
                    </div>
                </ul>
            </nav>
        </header>
    )
}