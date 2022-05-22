import React from 'react'
import Card from './Card'
import {
    Link
  } from "react-router-dom";

function Rooms() {
    return (
        <>
           <div className="rooms-info" data-aos-delay="300">
               <h1>OUR ROOMS</h1>
               <p>The Best Rooms in the World.</p>
               <div className="cards-group">
                    <Card fade="fade-right" type="Deluxe Room" img="https://cdn.pixabay.com/photo/2019/08/19/13/58/bed-4416515__340.jpg" price="5000"/>
                    <Card fade="fade-up" type="Standard Room"  img="https://images.pexels.com/photos/2631746/pexels-photo-2631746.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"  price="3000"/>
                    <Card fade="fade-left" type="Luxury Room"  img="https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"  price="2000"/>
               </div>
               <Link className="navbar-brand" to="/room"><button className='btn btn-warning'>Explore<i className="fas fa-arrow-circle-right arrow"></i></button></Link>
           </div> 
        </>
    )
}

export default Rooms
