import React from 'react'
import service from "./ServiceData"



const Services = () => {
    return (
        <div>
            <div className="serviceSection" id='services'>
                <div className="service flex flex-col items-center justify-center px-5 md:px-10">
                    <div className=' border-[#1e1d8ae8] border-2 rounded-b-xl'>
                        <h1 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#1e1d8ae8] to-sky-500 bg-clip-text text-transparent py-3 px-5'>Our Services</h1>
                    </div>
                    <div className="serviceCarSection flex justify-center items-center gap-8 lg:gap-x-16 flex-wrap pt-10 pb-20">
                        {service.map((items, index) => {
                            return (

                                <div className="serviceCard group bg-gray-100 w-80 xl:w-1/4 h-64 2xl:h-72 flex flex-col items-center justify-center border-[#1e1d8ae8] border-b-4 rounded-b-xl hover:cursor-pointer hover:drop-shadow-[0px_0px_10px_rgba(0,0,0,1)]" key={index}>
                                    <span className='text-7xl 2xl:text-8xl text-[#1e1d8ae8] py-7 group-hover:rotate-[360deg] group-hover:duration-700'>{items.icon}</span>
                                    <div className=' flex flex-col items-center justify-center gap-2 w-full text-center p-2'>
                                        <h1 className='font-bold text-2xl'>{items.title}</h1>
                                        <p>{items.desc}</p>
                                    </div>
                                </div>

                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services