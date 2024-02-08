import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Courses from './components/Courses'
const App = () => {
  return (
    <div><Navbar/>
      
      <Home/>

      <About/>

      <Courses/>
    
    </div>
  )
}

export default App
