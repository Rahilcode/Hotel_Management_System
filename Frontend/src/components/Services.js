import React from 'react'

function Services() {
    return (
        <>
           <div className="services" data-aos="fade-up"  data-aos-delay="100" data-aos-duration="2000">
                <div className="service">
                    <h3><i className="fas fa-swimming-pool"></i></h3>
                    <h4>Swimming Pool</h4>
                </div>
                <div className="service">
                    <h3><i className="fas fa-parking"></i></h3>
                    <h4>Car Parking</h4>
                </div>
                <div className="service">
                    <h3><i className="fas fa-taxi"></i></h3>
                    <h4>Airport Taxi</h4>
                </div>
                <div className="service">
                    <h3><i className="fas fa-utensils"></i></h3>
                    <h4>Food</h4>
                </div>
            </div> 
        </>
    )
}

export default Services
