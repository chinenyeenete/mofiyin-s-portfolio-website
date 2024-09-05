import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Workpage from './pages/Workpage'
import Homepage from './pages/Homepage'


const App = () => {
  return (
    <div>
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

