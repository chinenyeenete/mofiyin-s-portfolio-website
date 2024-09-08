import React from 'react'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Experiences from '../components/Experiences'
import Footer from '../components/Footer'

const Workpage = () => {
  return (
    <div className= " overflow-x-hidden antialiased">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(199,119,142,0.3),rgba(255,255,255,0))]"></div>
      <Navbar />
      <Projects />
      <Experiences />
      <Footer />    
    </div>
  )
}

export default Workpage
