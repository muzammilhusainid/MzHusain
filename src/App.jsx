import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './component/home/Home'
import MiniProjects from './pages/miniProjects/MiniProjects'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/miniProjects" element={<MiniProjects/>}/>
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App