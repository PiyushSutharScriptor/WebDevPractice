import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Support from './pages/Support'
import NotFoundPage from './pages/NotFoundPage'

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/support' element={<Support />}  />
        <Route path='/products' element={<Products />}  />
        <Route path='*' element={<NotFoundPage />}  />
      </Routes>

      <Footer />
    </div>
  )
}

export default App