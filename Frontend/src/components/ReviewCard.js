import React from 'react'

function ReviewCard(props) {
    return (
        <>
            <div className="review-card" data-aos="zoom-in-up" data-aos-delay="500" data-aos-duration="1500">
                <div className="para-img">
                <img src={props.img} alt="profile" />
                <div className="para2">
                <p>{props.desc}</p>
                <h5>-John Doe.</h5>
                 </div>
                </div>
                
            </div>
        </>
    )
}

export default ReviewCard
