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
import Kids from './pages/Kids'
import Exclusive from './pages/Exclusive'

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/support' element={<Support />}  />

        <Route path='/products' element={<Products />}  >
          <Route path='men' element={<Men />} />
          <Route path='women' element={<Women />} />
          <Route path='kids' element={<Kids />} />
          <Route path='exclusive' element={<Exclusive />} />
        </Route>

        <Route path='*' element={<NotFoundPage />}  />
      </Routes>

      <Footer />
    </div>
  )
}

export default App