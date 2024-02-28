import About from "../component/About"
import Footer from "../component/Footer"
import Hero from "../component/Hero"
import Kontak from "../component/Kontak"
import Layanan from "../component/Layanan"
import Navbar from "../component/Navbar"
import Project from "../component/Project"




import React from 'react'

const Home = () => {
  return (
    <>
  <Navbar/>
  <Hero />
  <About />
  <Layanan />
  <div className="container mx-auto px-8 items-center flex flex-col">
  <Project />
  </div>
  <Kontak />
  <Footer />
</>
  )
}

export default Home