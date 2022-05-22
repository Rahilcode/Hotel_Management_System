import React from 'react'
import Footer from '../components/Footer'
import Jumbotron from '../components/Jumbotron'
import MiddleInfo from '../components/MiddleInfo'
import Navbar from '../components/Navbar'
import Review from '../components/Review'
import Rooms from '../components/Rooms'
import Services from '../components/Services'
import SmallReg from '../components/SmallReg'

function Home() {
    return (
        <>
           <Navbar />
           <Jumbotron />
           <MiddleInfo />
           <Rooms />
           <Services />
           <Review />
           <SmallReg />
           <Footer />

        </>
    )
}

export default Home
