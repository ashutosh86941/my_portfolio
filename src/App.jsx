import { useState } from 'react'
import './App.css'
import Hero from './sections/hero/Hero'
import Projects from './sections/Projects/Projects'
import Skills from './sections/Skills/Skills'
import Contact from './sections/contact/Contact'
import Footer from './sections/Footer/Footer'


function App() {
  

  return (
    <>
    <Hero/>    
    <Projects/> 
    <Skills/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
