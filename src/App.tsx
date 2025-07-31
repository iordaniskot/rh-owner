import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import ColorShowcase from './components/ColorShowcase'
// import DarkModeToggle from './components/DarkModeToggle'
import PageTransition from './components/PageTransition'
// import Navigation from './components/Navigation'
import { StagewiseToolbar } from '@stagewise/toolbar-react'
import ReactPlugin from '@stagewise-plugins/react'

import './App.css'
import LoginPage from './pages/LoginPage'

function App() {
  return (
    <>
      {/* <Navigation /> */}
      <main >
        <PageTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/showcase" element={<ColorShowcase />} />
          </Routes>
        </PageTransition>
      </main>
      <StagewiseToolbar 
        config={{
          plugins: [ReactPlugin]
        }}
      />
    </>
  )
}

export default App
