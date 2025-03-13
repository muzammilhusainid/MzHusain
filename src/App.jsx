import React from 'react'
import Header from './component/header/Header'
import HeroSection from "./component/heroSection/HeroSection"
import Services from './component/services/Services'
import About from "./component/about/About"
import Projects from "./component/project/Projects"
import Contact from "./component/contact/Contact"
import Footer from './component/footer/Footer'

const App = () => {
  return (
    <div className=''>
      <div className='max-w-[1920px]'>
        <Header />
        <HeroSection />
        <Projects/>
        <Services />
        <About/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  )
}

export default App