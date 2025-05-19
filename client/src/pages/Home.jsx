import React from 'react'
import Hero from '../components/Hero'
import Newsletter from '../components/Newsletter'
import Testimonials from '../components/Testimonials'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Testimonials/>
        <Newsletter/>
    </div>
  )
}

export default Home