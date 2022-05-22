// import React, { useState } from 'react'
import React from 'react';
import ReviewCard from './ReviewCard'
import axios from 'axios'


function Review() {
    // const [review, setReview] = useState([]);

    axios.get('http://localhost:5000/reviews')
    .then(function (response) {
        // handle success
        console.log(response);
    })

    return (
        <>
            <div className="reviews-container" data-aos="fade-up">
            <h1>Reviews</h1>
                <div className="reviews">
                <ReviewCard img="https://cdn.pixabay.com/photo/2018/08/28/13/29/avatar-3637561__340.png"
                desc="Love to stay here in Red Star"
                />
                <ReviewCard img="https://cdn.pixabay.com/photo/2018/08/28/14/09/avatar-3637645__480.png"
                 desc="Everytime I visit here I stay in Red Star."/>
                <ReviewCard img="https://cdn.pixabay.com/photo/2017/02/01/10/12/characters-2029373__480.png"  desc="Red Star is very comfortable"/>
                <ReviewCard img="https://cdn.pixabay.com/photo/2020/05/08/02/55/african-american-5143919__480.png" desc="They have very tasty food and also swimming pool."/>
                <ReviewCard img="https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425__480.png"
                 desc="The services are great and it is in good location."/>
                <ReviewCard img="https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916__480.png"
                 desc="I enjoyed staying here in Red Star Hotel."/>
                </div>
               
                
            </div>
        
        
        </>
    )
}

export default Review
