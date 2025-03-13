import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineCancel } from "react-icons/md";
import { SiGmail } from "react-icons/si";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { FaCircle } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";
import { BsFillMoonStarsFill } from "react-icons/bs";



const Header = () => {

    const [showMenubar, setShowMenubar] = useState(false)
    const [darkMode, setDarkMode] = useState(false)
    return (
        <div className='absolute max-w-[1920px] w-full md:top-2 z-20'>
            <div className="header flex justify-between items-center px-2 md:px-7 py-1.5">
                <div className="logo md:text-2xl text-white font-bold">
                    Mz Husain
                </div>
                <div className="right flex items-center jystify-center gap-3 md:gap-5">
                    <div className="lightDark border-2 border-sky-500 rounded-full flex px-1 py-1 text-xl md:text-3xl text-white cursor-pointer" onClick={() => setDarkMode(!darkMode)}>
                        <BsFillMoonStarsFill className={`${darkMode ? "scale-100 me-4" : "w-0"} duration-300`} />
                        <FaCircle />
                        <IoSunny className={`${darkMode ? "w-0" : "scale-100 ms-4"} duration-300`} />
                    </div>
                    <div className="menuButton flex justify-center items-center gap-1 md:gap-2 py-1 md:py-2 px-3 md:px-5 hover:py-1.5 hover:px-[18px] overflow-hidden text-white font-bold bg-gradient-to-l from-[#1e1d8ae8] to-sky-500 cursor-pointer hover:bg-none hover:border-2 hover:border-sky-500" onClick={() => setShowMenubar(!showMenubar)}>
                        Menu <GiHamburgerMenu className='text-xl' />
                    </div>
                </div>
            </div>
            <div className={`menuBar text-white bg-[#1e1d8ae8] ${showMenubar ? "w-72 md:w-80 duration-500" : " w-0 duration-500"} fixed top-0 bottom-0 right-0`}>
                <div className='relative h-full'>
                    <div className="cutMenu px-8 py-5 text-5xl flex justify-end">
                        <MdOutlineCancel className="cursor-pointer hover:text-orange-500" onClick={() => setShowMenubar(!showMenubar)} />
                    </div>
                    <ul className=' p-5'>
                        <AnchorLink href='#hero'><li className='p-3 hover:bg-orange-500 hover:drop-shadow-[0px_0px_10px_rgba(0,0,0,1)]'>Home</li></AnchorLink>
                        <AnchorLink href='#projects'><li className='p-3 hover:bg-orange-500 hover:drop-shadow-[0px_0px_10px_rgba(0,0,0,1)]'>Projects</li></AnchorLink>
                        <AnchorLink href='#services'><li className='p-3 hover:bg-orange-500 hover:drop-shadow-[0px_0px_10px_rgba(0,0,0,1)]'>Services</li></AnchorLink>
                        <AnchorLink href='#about' offset={50}><li className='p-3 hover:bg-orange-500 hover:drop-shadow-[0px_0px_10px_rgba(0,0,0,1)]'>About</li></AnchorLink>
                        <AnchorLink href='#contact'><li className='p-3 hover:bg-orange-500 hover:drop-shadow-[0px_0px_10px_rgba(0,0,0,1)]'>Contact</li></AnchorLink>
                    </ul>
                    <div className="socialMedia px-8 py-10 flex flex-col gap-10 text-2xl absolute bottom-0 w-full">
                        <div className="socialMedia text-2xl w-full drop-shadow-[0px_0px_10px_rgba(0,0,0,1)]">
                            Muzammil Husain <br />
                            <span className='text-base italic'>A REACT Developer</span>
                        </div>
                        <div className='flex gap-10'>
                            <a href='mailto:muzammilhusainid@gmail.com' target='_blank'>
                                <SiGmail className='hover:text-orange-500 hover:scale-110 duration-300 cursor-pointer' />
                            </a>
                            <GrInstagram className='hover:text-orange-500 hover:scale-110 duration-300 cursor-pointer' />
                            <a href='https://www.linkedin.com/in/muzammilhusainid/' target='_blank'>
                                <FaLinkedinIn className='hover:text-orange-500 hover:scale-110 duration-300 cursor-pointer' />
                            </a>
                            <a href='https://github.com/muzammilhusainid' target='_blank'>
                                <FaGithub className='hover:text-orange-500 hover:scale-110 duration-300 cursor-pointer' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header