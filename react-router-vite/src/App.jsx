import React from 'react'
import { Route , Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Support from './pages/Support'
import Navbar from './pages/Navbar'
import Footer from './pages/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/support' element={<Support />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App