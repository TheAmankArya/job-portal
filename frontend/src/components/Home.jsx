import React from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './HeroSection'
import CategoryCarousael from './CategoryCarousael'
import LatestJobs from './LatestJobs'
import Footer from './shared/Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <CategoryCarousael/>
        <LatestJobs/>
        <Footer/>

    </div>
  )
}

export default Home