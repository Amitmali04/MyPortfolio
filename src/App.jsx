import './App.css'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Portfolio from './Components/Portfolio'
import SocialLinks from './Components/SocialLinks';
import Contact from './Components/Contact';
import Technologies from './Components/Technologies';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
<BrowserRouter>


<Navbar />
<Routes >

  <Route path='/'element={<Home />} />
  <Route path='/about'element={<About />} />
  <Route path='/portfolio'element={<Portfolio />} />
  <Route path='/technologies'element={<Technologies />} />
  <Route path='/contact'element={<Contact />} />


</Routes>


{/* <About />
<Portfolio />
<Technologies />
<Contact /> */}


<SocialLinks />
</BrowserRouter>
  )
}

export default App
