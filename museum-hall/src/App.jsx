import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from './pages/Home'
import War from './pages/War'
import Paintings from './pages/Paintings'
import Artifacts from './pages/Artifacts'

export default function App() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/war" element={<War />} />
        <Route path="/paintings" element={<Paintings />} />
        <Route path="/artifacts" element={<Artifacts />} />
      </Routes>
    </AnimatePresence>
  )
}