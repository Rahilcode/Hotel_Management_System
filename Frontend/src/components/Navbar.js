import React from 'react';
import {
    Link
  } from "react-router-dom";

function Navbar() {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
            <Link className="navbar-brand" to="/"><i className="fas fa-meteor py-1 text-danger"></i>Red Star</Link>
                {/* <a className="navbar-brand" href="#"></a> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbarm">
                    <li className="nav-item">
                    <Link className="nav-link active" to="/"><i className="fas fa-home px-1"></i>Home</Link>
                    {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                    </li>
                    <li className="nav-item">
                    {/* <a className="nav-link" href="#">About</a> */}
                    <Link className="nav-link active" to="/about"><i className="fas fa-address-card px-1"></i>About</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active" to="/contact"><i className="fas fa-address-book px-1"></i>Contact Us</Link>
                    {/* <a className="nav-link" href="#">Contact Us</a> */}
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active" to="/room"><i className="fas fa-hotel px-1"></i>Rooms</Link>
                    {/* <a className="nav-link" href="#">Rooms</a> */}
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active" to="/reserve"><i className="fab fa-bandcamp px-1"></i>Reservation</Link>
                    {/* <a className="nav-link" href="#">Rooms</a> */}
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active" to="/gallery"><i className="fas fa-image px-1"></i>Gallery</Link>
                    {/* <a className="nav-link" href="#">Gallery</a> */}
                    </li>

                    <div className="cred">

                        <li>
                        <Link className="nav-link active" to="/login"><i className="fas fa-sign-in-alt px-1"></i>Log In</Link>
                            {/* <a className='nav-link' href="#">Log In</a> */}
                        </li>
                        <li>
                        <Link className="nav-link active" to="/signup"><i className="fas fa-user-plus px-1"></i>Sign Up</Link>
                            {/* <a className='nav-link' href="#">Log In</a> */}
                        </li>
                        
                    </div>
    
                </ul>
                
        </div>
    </div>
</nav> 
        </>
    )
}

export default Navbar
