import React from 'react'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import About from './components/About'
import Skills from './components/Skills'

const App = () => {
  return (
    <div className= "overflow-x-hidden antialiased">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(199,119,142,0.3),rgba(255,255,255,0))]"></div>
      <Navbar />
      <Intro />
      <About />
      <Skills />
    </div>
  )
}

export default App

