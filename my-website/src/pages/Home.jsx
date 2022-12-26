import React from 'react'
import Hero from '../Components/Hero/Hero'
import Features from '../Components/Features/Features'
import Text from '../Components/Text/Text'
import Footer from '../Components/Footer/Footer'
// import Slider from '../Components/Slider/Slider'
const Home = () => {
  return (
    <div>
      <Hero/>
      <Text/>
      {/* <Slider/> */}
      <Features/>
      <Footer/>

    </div>
  )
}

export default Home