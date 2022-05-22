import React from 'react'

function Footer() {
    return (
        <>
            <div className='footerwrap'>

            <div className="footer">
                <div className="firstcol">
                    <ul className="one">
                        <li>About Us</li>
                        <li>Terms and Conditions</li>
                        <li>Privacy Policy</li>
                        <li>Rooms</li>
                    </ul>
                </div>
                <div className="secondcol">
                    <ul className='two'>
                        <li><i className="fas fa-map-marker-alt addl"></i>Address:
                            <p>West Street, Bangalore</p>
                        </li>
                        <li><i className="fas fa-phone phonel"></i>Phone:
                            <p>123456789</p>
                        </li>
                        <li><i className="fas fa-envelope emaill"></i>Email:
                            <p>redstar@mail.com</p>
                        </li>
                    </ul>
                </div>
                <div className="thirdcol">
                    <img src="https://image.freepik.com/free-vector/flat-hotel-building-town_52683-10040.jpg" alt="footer" />
                </div>

            </div>
                <footer className='foot'>Copyright ©2022 All rights reserved</footer>
        </div>
        </>
    )
}

export default Footer
