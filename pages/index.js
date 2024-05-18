import Header from '@/components/Header/Header'
import AboutUs from '@/components/About/About'
import Hero from '@/components/Hero/Hero'
import React from 'react'
import Experience from '@/components/Experience.js/Experience'

const Home = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <AboutUs/>
     <Experience/>
    </div>
  )
}

export default Home