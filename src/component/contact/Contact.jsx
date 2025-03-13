import React, { useState } from 'react'
import { Form, Field, Formik, ErrorMessage } from 'formik'
import * as yup from "yup"
import { LuCircleUserRound } from "react-icons/lu";
import { SiMaildotru } from "react-icons/si";
import { FiMessageSquare } from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";
import banner107 from "../../assets/images/banner107.jpg"
import { FaWhatsapp } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { FiMail } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import ContactModal from './ContactModal';
import { GrLinkTop } from "react-icons/gr";
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Contact = () => {

    const [contactData, setContactData] = useState();
    const contactDataValidate = yup.object({
        firstName: yup.string().required("Plz Enter Your First Name"),
        email: yup.string().email().required("Plz Enter Valid Email"),
        message: yup.string().required("Plz Write Something")
    })
    return (
        <div>
            <div className="contactSection" id='contact'>
                <div className="contactArea flex flex-col justify-center items-center relative">
                    <div className="aboutTitle py-3 px-5 border-[#1e1d8ae8] border-2 rounded-b-xl">
                        <h1 className='text-5xl font-bold'>Contact Us</h1>
                    </div>
                    <div className='w-full'>

                        <Formik
                            validationSchema={contactDataValidate}
                            initialValues={{ firstName: "", lastName: "", email: "", message: "" }}
                            onSubmit={(values) => { setContactData(values) }}
                        >

                            <Form>
                                <div className='flex flex-col gap-5 my-10 px-10 md:px-20'>
                                    <div className="getInTouch flex justify-center text-xl">
                                        <h2>Let's Get in Touch</h2>
                                    </div>
                                    <div className="contactUs flex justify-between flex-wrap md:flex-nowrap gap-10">
                                        <div className="formArea flex flex-col gap-5 w-full">
                                            <div className="nameArea flex flex-col gap-1">
                                                <div className="flex items-center gap-1">
                                                    <LuCircleUserRound className='text-xl' /><p className="">Name</p>
                                                </div>
                                                <div className="name flex gap-5 justify-between">
                                                    <div className="firstName w-full">
                                                        <Field type="text" name="firstName" placeholder="First Name" className="w-full p-2 border border-sky-500 focus:outline-red-500" />
                                                        <div className="firstNameError text-sm text-red-500">
                                                            <ErrorMessage name='firstName' />
                                                        </div>
                                                    </div>
                                                    <div className="lastName w-full">
                                                        <Field type="text" name="lastName" placeholder="Last Name" className="w-full p-2 border border-sky-500 focus:outline-red-500" />
                                                        <div className="firstNameError">

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="emailArea flex flex-col gap-1">
                                                <div className="flex items-center gap-1">
                                                    <SiMaildotru className='text-xl' /><p className=''>Email</p>
                                                </div>
                                                <Field type="text" name="email" placeholder="you@example" className="w-full p-2 border border-sky-500 focus:outline-red-500" />
                                                <div className="emailError text-sm text-red-500">
                                                    <ErrorMessage name='email' />
                                                </div>
                                            </div>
                                            <div className="messageArea flex flex-col gap-1">
                                                <div className="flex items-center gap-1">
                                                    <FiMessageSquare className='text-xl' /><p className=''>Message</p>
                                                </div>
                                                <Field as="textarea" name="message" placeholder="Write your Message" maxLength="150" className="w-full h-40 p-2 border border-sky-500 focus:outline-red-500" />
                                                <div className="messageError text-sm text-red-500">
                                                    <ErrorMessage name='message' />
                                                </div>
                                            </div>
                                            <button type="submit" className="button w-full bg-gradient-to-l from-[#1e1d8ae8] to-sky-500 flex justify-center items-center py-2 text-white hover:cursor-pointer hover:bg-gradient-to-r hover:scale-105 duration-500 gap-2"><FaTelegramPlane />Send Message</button>
                                        </div>
                                        <div className="addressArea w-full relative group overflow-hidden hover:overflow-hidden">
                                            <img src={banner107} alt="" className='w-full h-full duration-500 group-hover:scale-110 group-hover:duration-300 group-hover:ease-in-out' />
                                            <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-[#1e1d8ae8] to-sky-500 opacity-50"></div>
                                            <div className="contact flex flex-col w-full gap-2 md:gap-10 absolute top-1/2 -translate-y-1/2 px-3 lg:px-10">
                                                <div className="email flex gap-x-2 items-center ">
                                                    <div className="emailICon bg-white text-base md:text-3xl p-3 rounded-full">
                                                        <FiMail />
                                                    </div>
                                                    <div className="emailAdd text-sm lg:text-base text-white">
                                                        <p>E-MAIL</p>
                                                        <p>Muzammilhusainid@gmail.com</p>
                                                    </div>
                                                </div>
                                                <div className="whatsApp flex gap-x-2 items-center justify-end">
                                                    <div className="wtNum text-sm lg:text-base text-white">
                                                        <p className='flex justify-end'>WHATSAPP</p>
                                                        <p>+91 8896638315</p>
                                                    </div>
                                                    <div className="wtIcon bg-white text-base md:text-3xl p-3 rounded-full">
                                                        <FaWhatsapp />
                                                    </div>
                                                </div>
                                                <div className="telephone flex gap-x-2 items-center">
                                                    <div className="teleIcon bg-white text-base md:text-3xl p-3 rounded-full">
                                                        <IoCallOutline />
                                                    </div>
                                                    <div className="teleNum text-sm lg:text-base text-white">
                                                        <p>TELEPHONE</p>
                                                        <p>+91 8115067010</p>
                                                    </div>
                                                </div>
                                                <div className="address flex gap-x-2 justify-end items-center">
                                                    <div className="add text-sm lg:text-base text-justify text-white">
                                                        <p className='flex justify-end'>HEAD-OFFICE</p>
                                                        <p>Jais, Distt - Amethi 229305 U.P India</p>
                                                    </div>
                                                    <div className="addIcon bg-white text-base md:text-3xl p-3 rounded-full">
                                                        <SlLocationPin />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                    <AnchorLink href='#hero'>
                        <div className="topArrow flex flex-col items-center justify-center size-12 rounded-full text-[#1e1d8ae8] border border-[#1e1d8ae8] bg-gray-100 absolute bottom-10 right-5 cursor-pointer hover:text-orange-500 hover:rotate-[360deg] duration-500">
                            <GrLinkTop className='text-xl ' />
                            <p className='text-xs'>Top</p>
                        </div>
                    </AnchorLink>
                </div>
            </div>
            {contactData ? <ContactModal contactData={contactData} /> : ""}
        </div>
    )
}

export default Contact