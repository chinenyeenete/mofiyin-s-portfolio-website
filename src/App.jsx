import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Workpage from './pages/Workpage'
import Homepage from './pages/Homepage'
import {MdDarkMode, MdLightMode} from 'react-icons/md'
import { useState } from 'react'
import {motion} from 'framer-motion'


const App = () => {
  const [dark, setDark] = useState(false);
    function toggleTheme() {
        document.documentElement.classList.toggle("dark");
        setDark(!dark);
    }
  return (
    <div>
      {/*Dark Mode Toggle*/}
      <div className="w-screen">
            <motion.button whileTap={{ scale: 0.9 }} onClick={toggleTheme} className="fixed right-5 bottom-8 md:bottom-14 md:right-14 p-2 backdrop-blur-lg bg-white/30 rounded-full z-10">
                {!dark ?<MdDarkMode className=" text-secondary w-8 md:w-12 h-auto hover:cursor-pointer"/> : <MdLightMode className=" text-secondary w-8 md:w-12 h-auto hover:cursor-pointer"/>}
            </motion.button>
        </div>
      {/*Home and Work Pages*/}
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path='/home' element={<Homepage />} />
          <Route path='/work' element={<Workpage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

