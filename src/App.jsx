import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import OurWork from './pages/OurWork'
import Contact from './pages/Contact'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/our-work" element={<OurWork />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App
