import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import Footer from './components/Footer.jsx'
import Background from './components/Background.jsx'
import Cursor from './components/Cursor.jsx'
import RandomFloater from './components/RandomFloater.jsx'
import ClickSpice from './components/ClickSpice.jsx'
import Welcome from './components/Welcome.jsx'

export default function App() {
  const [showWelcome, setShowWelcome] = useState(true)

  return (
    <>
      <Welcome show={showWelcome} onDone={() => { setShowWelcome(false); window.scrollTo({ top: 0 }); if (window.location.hash) history.replaceState(null, '', window.location.pathname) }} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showWelcome ? 0 : 1 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="relative min-h-screen noise overflow-x-hidden"
      >
        <Cursor />
        <ClickSpice />
        <RandomFloater />
        <Background />
        <Navbar />
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </motion.div>
    </>
  )
}
