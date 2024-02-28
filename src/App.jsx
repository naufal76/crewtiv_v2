
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Project from './pages/Project'


function App() {

  return (
<Router>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/services" element={<Services/>}/>
    <Route path="/about" element={<About />}/>
    <Route path="/project" element={<Project />}/>
  </Routes>
</Router>
  )
}

export default App
