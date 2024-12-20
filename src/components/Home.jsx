import React from 'react'
import Nav from './Nav'
import Hero from './Hero'
import About from './About'
import Footer from './Footer'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div>
      <Nav/>
      <Navbar/>
      <Hero />
      <About />
      <Footer />
    </div>
  )
}

export default Home
