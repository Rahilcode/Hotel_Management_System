import React from 'react'

function Card(props) {
    return (
        <>
            <div className="card" data-aos={props.fade} data-aos-duration="2000">
                <img className="card-img-top" src={props.img} alt="card"/>
                <div className="card-body">
                    <h3>{props.type}</h3>
                    <h4><span>{props.price}</span> <span>{props.desc}</span> </h4>
                    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                </div>
            </div>
        </>
    )
}

export default Card
