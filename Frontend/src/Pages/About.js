import React from 'react'
import '../css/about.css'
import Jumbotron from '../components/Jumbotron'
import Navbar from '../components/Navbar'
import Aboutinfo from '../components/Aboutinfo'
import Staff from '../components/Staff'
import Footer from '../components/Footer'

function About() {
    return (
        <>
            <Navbar />
            <Jumbotron />
            <Aboutinfo />
            <Staff />
            <Footer />
        </>
    )
}

export default About
