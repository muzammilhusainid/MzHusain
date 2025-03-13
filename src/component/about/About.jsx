import React from 'react'
import aboutPic from "../../assets/images/HeroLogo.jpg"
import skills from "./SkillData"
import qualification from './QualificationData';
import { FaCircle } from "react-icons/fa";


const About = () => {

    return (
        <div>
            <div className="aboutSection" id="about">
                <div className="aboutArea flex flex-col items-center justify-center">
                    <div className="aboutTitle py-3 px-5 border-[#1e1d8ae8] border-2 rounded-b-xl">
                        <h1 className='text-5xl font-bold'>About Me</h1>
                    </div>
                    <div className="aboutMe pt-10 pb-20 flex justify-center items-center flex-wrap lg:flex-nowrap gap-10 ">
                        <div className="aboutPic w-[336px] h-[400px] flex justify-center items-center relative hover:scale-105 duration-500">
                            <div className="bg-gradient-to-tl from-[#1e1d8ae8] to-sky-500 w-32 h-32 absolute top-0 left-0"></div>
                            <div className="bg-gradient-to-br from-[#1e1d8ae8] to-sky-500 w-32 h-32 absolute bottom-0 right-0"></div>
                            <img src={aboutPic} alt="aboutPic" className='w-80 h-96 z-10 drop-shadow-[0px_0px_10px_rgba(0,0,0,.5)]' />
                        </div>
                        <div className="aboutDetail lg:w-3/5 w-full px-10 lg:px-0">
                            <div className="about">
                                <p className='flex flex-wrap text-justify'>A portfolio is a compilation of academic and professional materials that exemplifies your beliefs, skills, qualifications, education, training, and experiences. It provides insight into your personality and work ethic.
                                    A portfolio is a compilation of academic and professional materials that exemplifies your beliefs, skills, qualifications, education, training, and experiences. It provides insight into your personality and work ethic.
                                </p>
                            </div>
                            <div className="aboutSkillQualify flex justify-center flex-wrap lg:flex-nowrap gap-10 mt-10">
                                <div className="skillArea w-full">
                                    <h1 className='flex justify-center mb-5 text-[#1e1d8ae8] text-xl font-bold'>Skills</h1>
                                    {skills.map((items, index) => {
                                        return (
                                            <div className="skill flex justify-center items-center gap-2 mb-1.5 hover:scale-105 duration-300" key={index}>
                                                <div className="skillIcon text-4xl">
                                                    {items.icon}
                                                </div>
                                                <div className="skillDetails w-full">
                                                    <h1>{items.title}</h1>
                                                    <div className="progressBarArea flex items-center gap-1">
                                                        <div className="progressBarBg bg-red-500 w-[100%] flex items-center rounded">
                                                            <div className={`progressBar ${items.barSize} bg-gradient-to-r from-[#1e1d8ae8] to-sky-500 h-2 rounded`}></div>
                                                        </div>
                                                        <p>{items.barPercent}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="qualificationArea w-full">
                                    <h1 className='flex justify-center mb-5 text-[#1e1d8ae8] text-xl font-bold'>Qualification</h1>
                                    <div className="qualification pt-2">
                                        {qualification.map((item, index) => {
                                            return (
                                                <div className="qualificationDetail border-s-2 border-b-2 border-[#1e1d8ae8] border-dashed ps-4 mb-3 text-sm relative" key={index}>
                                                    <FaCircle className='absolute -left-2 top-3.5 text-[#1e1d8ae8]' />
                                                    <h1>{item.title}</h1>
                                                    <p>{item.college}</p>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="progressBar">
                        
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default About