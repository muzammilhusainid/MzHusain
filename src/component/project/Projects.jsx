import React from 'react'
import laptop from "../../assets/images/laptop01.png"
import MzHusain from "../../assets/images/MzHusain.png"
import tablet01 from "../../assets/images/tablet01.png"
import { FaCircleDot } from "react-icons/fa6";
import { PiArrowBendUpLeftBold } from "react-icons/pi";
import { PiArrowBendUpRightBold } from "react-icons/pi";
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div>
            <div className="projectSection" id="projects">
                <div className="projectArea flex flex-col items-center justify-center px-5 md:px-10 relative pb-10">
                    <div className="aboutTitle border-[#1e1d8ae8] border-b-2 border-l-2 border-r-2 rounded-b-xl bg-white relative z-10">
                        <h1 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#1e1d8ae8] to-sky-500 bg-clip-text text-transparent py-3 px-5'>My Projects</h1>
                    </div>
                    <div className="centerLine w-0.5 bg-[#1e1d8ae8] absolute top-0 bottom-0 -z-20 hidden md:block"></div>
                    <div className="leptopArea mt-10">
                        <div className="laptopFirst flex flex-wrap md:flex-nowrap gap-5 md:gap-40 relative">
                            <div className="laptopImg relative w-full flex justify-center">
                                <a href="https://mz-ecom.vercel.app/" target='_blank'>
                                    <img src={laptop} alt="" className='w-96 h-60 hover:scale-110 ease-in-out duration-300' />
                                </a>
                            </div>
                            <div className="projectDetails w-full flex flex-col items-center justify-center">
                                <a href="https://mz-ecom.vercel.app/" target='_blank'>
                                    <div className="projectTitle relative group">
                                        <h1 className='text-4xl font-bold text-red-500'>Mz Ecom</h1>
                                        <PiArrowBendUpLeftBold className='absolute top-1/2 -left-8 group-hover:-left-16 ease-out duration-300 -z-10 text-4xl text-red-500 hidden md:block' />
                                    </div>
                                </a>
                                <p className='mt-3 text-justify'>Designed and developed this site with Attractive UI from scratch using React and Tailwind CSS to get the best results. Integrated external API for fetching product data and improved search functionality.</p>
                                <ul className='flex flex-wrap gap-y-2 justify-center gap-3 mt-5 text-xs'>
                                    <li className='border border-gray-400 px-2 py-1 rounded-full'>#React.js</li>
                                    <li className='border border-gray-400 px-2 py-1 rounded-full'>#Toastify</li>
                                    <li className='border border-gray-400 px-2 py-1 rounded-full'>#Tailwind Css</li>
                                    <li className='border border-gray-400 px-2 py-1 rounded-full'>#React-Router</li>
                                    <li className='border border-gray-400 px-2 py-1 rounded-full'>#Formik & Yup</li>
                                </ul>
                            </div>
                            <div className="centerLine h-0.5 bg-red-500 absolute top-1/2 left-44 right-1/2 -z-20 hidden md:block"></div>
                            <FaCircleDot className='absolute bg-white text-xl text-red-500 right-1/2 translate-x-1/2 top-1/2 -translate-y-1/2 hidden md:block' />
                        </div>
                        <div className="laptopSecond flex flex-wrap md:flex-nowrap gap-5 md:gap-40 mt-10 relative">
                            <div className="projectDetails w-full flex flex-col items-center justify-center order-2 order md:order-none">
                                <a href="https://mzhusain.vercel.app/" target='_blank'>
                                    <div className="projectTitle relative group">
                                        <h1 className='text-4xl font-bold text-sky-500'>Mz Husain</h1>
                                        <PiArrowBendUpRightBold className='absolute top-1/2 -right-8 group-hover:-right-16 ease-out duration-300 -z-10 text-4xl text-sky-500 hidden md:block' />
                                    </div>
                                </a>
                                <p className='mt-3 text-justify'>Developed a personal portfolio showcasing skills and projectshosted on Vercel with optimized performance and responsive design. Used Formik and yup Library to create Contact Form and its Validation.</p>
                                <ul className='flex flex-wrap gap-y-2 justify-center gap-3 mt-5 text-xs'>
                                    <li className='border border-gray-400 px-2 py-1 rounded-full'>#React.js</li>
                                    <li className='border border-gray-400 px-2 py-1 rounded-full'>#Tailwind Css</li>
                                    <li className='border border-gray-400 px-2 py-1 rounded-full'>#React-Icons</li>
                                    <li className='border border-gray-400 px-2 py-1 rounded-full'>#TypeAnimation</li>
                                    <li className='border border-gray-400 px-2 py-1 rounded-full'>#Formik & Yup</li>
                                </ul>
                            </div>
                            <div className="laptopImg relative w-full flex justify-center">
                                <a href="https://mzhusain.vercel.app/" target='_blank'>
                                    <img src={MzHusain} alt="" className='w-96 h-[230px] hover:scale-110 ease-in-out duration-300' />
                                </a>
                            </div>
                            <div className="centerLine h-0.5 bg-sky-500 absolute top-1/2 right-40 left-1/2 -z-20"></div>
                            <FaCircleDot className='absolute bg-white text-xl text-sky-500 right-1/2 translate-x-1/2 top-1/2 -translate-y-1/2 hidden md:block' />
                        </div>
                    </div>
                    <div className='miniProjectArea mt-10 flex flex-wrap md:flex-nowrap gap-5 md:gap-40 w-full relative'>
                        <div className="tabletImg w-full flex justify-center">
                        <Link to="/miniProjects">
                            <img src={tablet01} alt="" className='h-96 hover:scale-110 ease-in-out duration-300' />
                        </Link>
                        </div>
                        <div className="projectDetails w-full flex flex-col items-center justify-center">
                            <Link to="/miniProjects">
                            <div className="projectTitle relative group">
                                <h1 className='text-4xl font-bold text-violet-600'>Mini Projects</h1>
                                <PiArrowBendUpLeftBold className='absolute top-1/2 -left-8 group-hover:-left-16 ease-out duration-300 -z-10 text-4xl text-violet-600 hidden md:block' />
                            </div>
                            </Link>
                            <p className='mt-3 text-justify'>Here I created different types of mini projects in which I have used React, Tailwind CSS and other technologies so that it looks like cool & attractive.</p>
                            <ul className='flex flex-wrap justify-center gap-y-2 gap-3 mt-5 text-xs'>
                                <li className='border border-gray-400 px-2 py-1 rounded-full'>#React.js</li>
                                <li className='border border-gray-400 px-2 py-1 rounded-full'>#JavaScript</li>
                                <li className='border border-gray-400 px-2 py-1 rounded-full'>#Html</li>
                                <li className='border border-gray-400 px-2 py-1 rounded-full'>#Css</li>
                                <li className='border border-gray-400 px-2 py-1 rounded-full'>#Tailwind Css</li>
                                <li className='border border-gray-400 px-2 py-1 rounded-full'>#React Icons</li>
                               
                            </ul>
                        </div>
                        <div className="centerLine h-0.5 bg-violet-600 absolute top-1/2 md:left-32 lg:left-60 right-1/2 -z-20 hidden md:block"></div>
                        <FaCircleDot className='absolute bg-white text-xl text-violet-600 right-1/2 translate-x-1/2 top-1/2 -translate-y-1/2 hidden md:block' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects