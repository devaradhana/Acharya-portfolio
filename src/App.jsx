import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './Components/NavBar'
import NavBanner from './Components/NavBanner'
import Home from './Components/Home'
import About from './Components/About'
import Gallarey from './Components/Gallarey'
import Footer from './Components/Footer'
import Contact from './Components/Contact'

function App() {


  return (
    <>
      <BrowserRouter>
      <NavBanner/>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/About' element={<About/>} />
          <Route path='/gallery' element={<Gallarey/>} />
          {/* <Route path='/services' element={<Services/>} /> */}
          <Route path='/contact' element={<Contact/>} /> 
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
