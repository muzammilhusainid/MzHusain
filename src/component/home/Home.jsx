import React from 'react'
import Header from '../header/Header'
import HeroSection from "../heroSection/HeroSection"
import Services from '../services/Services'
import About from "../about/About"
import Projects from "../project/Projects"
import Contact from "../contact/Contact"
import Footer from '../footer/Footer'

const Home = () => {
  return (
    <div>
        <div className='max-w-[1920px]'>
            <Header />
            <HeroSection />
            <Projects />
            <Services />
            <About />
            <Contact />
            <Footer />
          </div>
    </div>
  )
}

export default Home