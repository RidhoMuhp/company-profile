import { useState } from 'react'
import Navbar from './components/layout/Navbar'
import Hero from './components/section/Hero'
import Service from './components/section/Service'
import Testimonials from './components/section/Testimonials'
import Contact from './components/section/Contact'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Hero />
    <Service />
    <Testimonials />
    <Contact />
    </>
  )
}

export default App
