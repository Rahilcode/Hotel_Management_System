import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../css/gallery.css'

function Gallery() {
    return (
        <>
            <Navbar />
            <div className="gallery">
                <h1>Our Gallery</h1>
                <div className="photos" data-aos="fade-up"  data-aos-delay="200" data-aos-duration="1000">
                    <img src="https://image.freepik.com/free-photo/swimming-pool-beach-luxury-hotel-outdoor-pools-spa-amara-dolce-vita-luxury-hotel-resort-tekirova-kemer-turkey_146671-18751.jpg" alt="Gallery image" />
                    <img src="https://image.freepik.com/free-photo/restaurant-interior_1127-3394.jpg" alt="Gallery image" />
                    <img src="https://image.freepik.com/free-photo/leisure-beautiful-health-garden-landscape_1203-4856.jpg" alt="Gallery image" />
                    <img src="https://image.freepik.com/free-photo/hammocks-umbrella-placed-near-large-pool_1203-192.jpg" alt="Gallery image" />
                    <img src="https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80" alt="Gallery image" />
                    <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt="Gallery image" />
                    <img src="https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="Gallery image" />
                    <img src="https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="Gallery image" />
                    <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="Gallery image" />
                </div>
            </div>
                <Footer />
        </>
    )
}

export default Gallery
