import React from 'react'
import Hero from '../components/Hero'
import Newsletter from '../components/Newsletter'
import Testimonials from '../components/Testimonials'
import BestSeller from '../components/BestSeller'
import NewArrival from '../components/NewArrival'
import Trending from '../components/Trending'

const Home = () => {
  return (
    <div>
        <Hero/>
        <NewArrival/>
        <Trending/>
         <BestSeller/>
        <Testimonials/>
        <Newsletter/>
    </div>
  )
}

export default Home