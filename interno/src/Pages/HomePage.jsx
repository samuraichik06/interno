import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import HomePagePT1 from '../Components/HomePagePT1'
import HomePagePT2 from '../Components/HomePagePT2'
import JoinToComp from '../Components/JoinToComp'

const HomePage = () => {
  return (
    <>
        <Header />
        <HomePagePT1 />
        <HomePagePT2 />
        <JoinToComp />
        <Footer />
    </>
  )
}

export default HomePage