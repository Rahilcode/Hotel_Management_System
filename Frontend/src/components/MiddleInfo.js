import React from 'react';
import {
    Link
  } from "react-router-dom";

function MiddleInfo() {
    return (
        <>
           <div className="middle-info" data-aos="fade-up"  data-aos-delay="200" data-aos-duration="3000">
                <div className="leftinfo">
                    <h1>Welcome!</h1>
                    <p>Hotel Red Star is a hotel where you can easily view the types of rooms available and make the reservation online at the comfort of your home.</p>
                    <button className='btn btn-warning'><Link className="navbar-brand mid-links text-white" to="/room">Learn More</Link></button>
                </div>
                <div className="rightinfo">
                    <img src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="room" />
                </div>
            </div> 
        </>
    )
}

export default MiddleInfo
