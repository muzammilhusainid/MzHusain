import React from 'react'
import { Link } from 'react-router-dom'
const MiniProjects = () => {
    return (
        <div>
            <div className='relative bg-[#111111] h-screen overflow-hidden'>
                <div className="head flex justify-between py-3 px-3 md:px-8 ">
                    <div className="title text-sm md:text-2xl font-semibold flex items-center text-white z-10">
                        <h1>Mz Husain Mini Projects</h1>
                    </div>
                    <div className="back z-10">
                        <Link to="/">
                            <button className="menuButton flex justify-center text-xs md:text-base items-center py-1.5 md:py-2 px-1.5 md:px-5 hover:py-1 md:hover:py-1.5 hover:px-1 md:hover:px-[18px] overflow-hidden text-white font-bold bg-gradient-to-l from-[#1e1d8ae8] to-sky-500 cursor-pointer hover:bg-none hover:border-2 hover:border-sky-500">
                                Back To Home
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="body h-full flex justify-center items-center text-2xl font-bold text-white">
                    <h1>Comming Soon....</h1>
                </div>
                <div className="absolute top-0 bottom-0 -left-10 rightShadow w-20 border rounded-full bg-gradient-to-br from-[#1e1d8ae8] from-50% to-sky-500 blur-xl"></div>
                <div className="absolute top-0 bottom-0 -right-10 rightShadow w-20 border rounded-full bg-gradient-to-bl from-red-500 from-50% to-purple-700 blur-xl"></div>
            </div>
        </div>
    )
}

export default MiniProjects