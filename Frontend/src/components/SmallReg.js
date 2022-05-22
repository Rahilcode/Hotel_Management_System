import React from 'react'
import {
    Link
  } from "react-router-dom";

function SmallReg() {
    return (
        <>
            <div className="reg">
                <h2>A Best Place To Stay.</h2>
                <button><Link className='nav-link reg-btn' to="/reserve">Reserve</Link></button>
            </div>
        </>
    )
}

export default SmallReg
