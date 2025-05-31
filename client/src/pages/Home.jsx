import React from 'react'
import Hero from '../components/Hero'
import Newsletter from '../components/Newsletter'
import Testimonials from '../components/Testimonials'
import MenShoesList from '../components/MenShoesList'
import WomenShoesList from '../components/WomenShoesList'
import KidsShoesList from '../components/KidsShoesList'

const Home = () => {
  return (
    <div>
        <Hero/>
        <MenShoesList/>
        <WomenShoesList/>
        <KidsShoesList/>
        <Testimonials/>
        <Newsletter/>
    </div>
  )
}

export default Home