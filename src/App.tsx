import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import OurMission from './pages/OurMission'
import Comunity from './pages/Comunity'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-mission" element={<OurMission />} />
          <Route path="/community" element={<Comunity />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
