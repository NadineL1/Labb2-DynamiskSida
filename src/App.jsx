import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/home'
import About from './pages/about.jsx'
import Contact from './pages/contact'
import Cv from './pages/cv'
import Portfolio from './pages/portfolio'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cv" element={<Cv />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
