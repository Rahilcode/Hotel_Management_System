import React from 'react'
import Card from './Card'

function Staff() {
    return (
        <>
            <div className="staff" data-aos-delay="300">
            <h1>OUR STAFF</h1>
               <div className="cards-group">
                    <Card fade="fade-right" type="Founder" desc="Owner of the Hotel Red Star"  img="https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"/>
                    <Card fade="fade-up" type="Co-Founder" desc="Co-Owner of the Hotel Red Star" img="https://image.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg"/>
                    <Card fade="fade-left" type="Manager" desc="Manager of the Hotel Red Star" img="https://image.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg"/>
               </div>
            </div>
        </>
    )
}

export default Staff
