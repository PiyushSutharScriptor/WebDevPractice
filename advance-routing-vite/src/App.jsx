import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Support from './pages/Support'
import NotFoundPage from './pages/NotFoundPage'
import Men from './pages/Men'
import Women from './pages/Women'

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/support' element={<Support />}  />
        <Route path='/products' element={<Products />}  />
        <Route path='/products/men' element={<Men />} />
        <Route path='*' element={<NotFoundPage />}  />
        <Route path='/products/women' element={<Women />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App