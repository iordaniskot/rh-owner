import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import ColorShowcase from './components/ColorShowcase'

import './App.css'
import LoginPage from './pages/LoginPage'

function App() {
  return (
    <>
    
      <main style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/showcase" element={<ColorShowcase />} />
        </Routes>
      </main>
    </>
  )
}

export default App
