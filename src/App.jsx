import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Resume from './components/resume'
import Navbar from './components/header'
import About from './components/about'
import Works from './components/works'
import Contact from './components/contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      

      <Navbar />

      <Resume />

      <About />

      <Works />

      <Contact />
      
    </>
  )
}

export default App
