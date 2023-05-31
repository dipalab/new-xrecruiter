import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Comunity from './pages/Comunity'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/comunity" element={<Comunity />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
