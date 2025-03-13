import React from 'react'
import { SiGmail } from "react-icons/si";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <div className="footerSection flex flex-col items-center bg-gray-100">
                <div className="socialMedia flex py-5 gap-8 text-xl text-[#1e1d8ae8]">
                    <a href='mailto:muzammilhusainid@gmail.com' target='_blank'>
                        <div className="email hover:scale-110 duration-300 hover:text-orange-500 cursor-pointer">
                            <SiGmail />
                        </div>
                    </a>
                    <a href='#' target=''>
                        <div className="insta hover:scale-110 duration-300 hover:text-orange-500 cursor-pointer">
                            <GrInstagram />
                        </div>
                    </a>
                    <a href='https://www.linkedin.com/in/muzammilhusainid/' target='_blank'>
                        <div className="linkedIn hover:scale-110 duration-300 hover:text-orange-500 cursor-pointer">
                            <FaLinkedinIn />
                        </div>
                    </a>
                    <a href='https://github.com/muzammilhusainid' target='_blank'>
                        <div className="gitHub hover:scale-110 duration-300 hover:text-orange-500 cursor-pointer">
                            <FaGithub />
                        </div>
                    </a>
                </div>
                <div className="copyRight text-xs pb-2">
                    Mz Husain &copy; 2025 All Rights Reserved
                </div>
            </div>
        </div>
    )
}

export default Footer