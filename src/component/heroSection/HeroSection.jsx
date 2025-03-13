import React from 'react';
import HeroLogo from "../../assets/images/HeroLogo.jpg"
import { SiGmail } from "react-icons/si";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import MzResumePHP from "../../assets/images/MzResumePHP.pdf"
import { TypeAnimation } from 'react-type-animation';


const hero = () => {
  return (
    <div>
      <div className="heroSection relative overflow-hidden" id='hero'>
        <div className="hero h-screen bg-[#111111] text-white border flex flex-col items-center justify-center gap-4 relative ">
          <div className="imgBorder rounded-full size-48 md:w-56 md:h-56 flex justify-center items-center cursor-pointer hover:scale-110 duration-700 relative">
            <span className='bg-gradient-to-r from-red-500 from-80% to-purple-500 animate-spin h-full w-full rounded-full absolute'></span>
            <img src={HeroLogo} alt="" className='size-44 md:w-52 md:h-52 rounded-full z-10 ' />
          </div>
          <div className='text-2xl md:text-5xl flex flex-col gap-3 items-center font-bold px-5 md:px-10'>
            <span className='bg-gradient-to-l from-sky-500 via-sky-500 to-[#1e1d8ae8] bg-clip-text text-transparent'>I'm Muzammil Husain</span>
            <TypeAnimation className='text-lg md:text-4xl text-gray-300'
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'A REACT Developer', 1000, // wait 1s before replacing "Mice" with "Hamsters"
                'A Web Developer', 1000,
                'A Web Designer', 1000,
              ]}
              repeat={Infinity}
              speed={200}
            />
          </div>
          <div className="buttons flex items-center justify-center gap-4 w-80 h-16 ">
            <AnchorLink href='#contact'>
              <div className="connect px-5 py-1.5 hover:px-[22px] hover:py-[8px] flex justify-center items-center border-2 border-sky-500 hover:bg-gradient-to-r from-sky-500 to-[#1e1d8ae8] hover:border-none cursor-pointer">
                Contact Me
              </div>
            </AnchorLink>
            <a href={MzResumePHP} target='_blank'>
              <div className="resume px-5 py-1.5 hover:px-[22px] hover:py-[8px] flex justify-center items-center hover:bg-gradient-to-r from-sky-500 to-[#1e1d8ae8] text-white border-2 border-sky-500 hover:border-none cursor-pointer">
                Download CV
              </div>
            </a>
          </div>
          <div className="downArrow absolute bottom-0">
            <AnchorLink href="#projects" className=''><IoArrowDownCircleOutline className="size-10 text-gray-300 hover:text-white animate-bounce" /></AnchorLink>
          </div>
          <div className="socialMedia text-xl md:text-2xl flex flex-col gap-5 absolute left-2 md:left-5 top-1/2 -translate-y-1/2 z-20">
            <a href='mailto:muzammilhusainid@gmail.com' target='_blank'>
              <div className='group flex items-center w-fit relative'>
                <SiGmail className='hover:text-orange-500 hover:scale-110 duration-200 cursor-pointer' />
                <p className='text-sm scale-x-0 group-hover:scale-100 duration-300 absolute -right-[50px]'>E-Mail</p>
              </div>
            </a>
            <div className='group flex items-center justify-center w-fit relative'>
              <GrInstagram className='hover:text-orange-500 hover:scale-110 duration-200 cursor-pointer' />
              <p className='text-sm scale-x-0 group-hover:scale-100 duration-300 absolute -right-[80px]'>Instagram</p>
            </div>
            <a href="https://www.linkedin.com/in/muzammilhusainid/" target='_blank'>
              <div className='group flex items-center w-fit relative'>
                <FaLinkedinIn className='hover:text-orange-500 hover:scale-110 duration-200 cursor-pointer' />
                <p className='text-sm scale-x-0 group-hover:scale-100 duration-300 absolute -right-[62px]'>LinkedIn</p>
              </div>
            </a>
            <a href="https://github.com/muzammilhusainid" target='_blank'>
              <div className='group flex items-center w-fit relative'>
                <FaGithub className='hover:text-orange-500 hover:scale-110 duration-200 cursor-pointer' />
                <p className='text-sm scale-x-0 group-hover:scale-100 duration-300 absolute -right-[62px]'>Git-Hub</p>
              </div>
            </a>
          </div>
        </div>
        
        <div className='absolute w-1/12 h-2/3 top-0 -right-[4%] rounded-full bg-gradient-to-bl from-red-500 from-50% to-purple-700 blur-xl'></div>
        <div className='absolute w-1/12 h-2/3 bottom-0 -left-[4%] rounded-full bg-gradient-to-br from-[#1e1d8ae8] from-50% to-sky-500 blur-xl'></div>
      </div>
    </div>
  )
}

export default hero