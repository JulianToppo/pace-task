import Header from '@/components/Header/Header'
import AboutUs from '@/components/About/About'
import Hero from '@/components/Hero/Hero'
import React from 'react'
import Experience from '@/components/Experience.js/Experience'
import Projects from '@/components/Projects/Projects'
import GetInTouch from '@/components/GetInTouch/GetInTouch'

const Home = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <AboutUs/>
     <Experience/>
     <Projects/>
     <GetInTouch/>
    </div>
  )
}

export default Home