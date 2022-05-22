import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Jumbotron from '../components/Jumbotron'
import Navbar from '../components/Navbar'
import '../css/reserve.css'
import axios from 'axios'

function Register() {
    let date = new Date()
    let day = date.getDate();
    let month = date.getMonth()+1;
    let year = date.getFullYear();

    const [name, setName] = useState('');
    const [phone, setPhone] = useState(null);
    const [email, setEmail] = useState('');
    const [roomType, setRoomType] = useState('');
    const [checkIn, setCheckIn] = useState(`${month}-${day}-${year}`);
    const [checkOut, setCheckOut] = useState(`${month}-${day}-${year}`);
    const [guest, setGuest] = useState(1);

    const r_id = 5;
    const [username, setUsername] = useState(name);

    const reserveInfo = (e) => {
        // axios.get('http://localhost:5000/check', {
        //     username: username
        // })
        // .then((response) => {
        //     if(response.data.message) {
        //         setUsername(false);
        //     } else {
        //         setUsername(true);
        //     }
        // })

        // if(username != '') {

        
        axios.post('http://localhost:5000/reserve', {
            r_id: r_id,
            name: name, 
            phone: phone,
            email: email, 
            checkIn: checkIn,
            checkOut: checkOut,
            guest: guest,
            roomType: roomType
        }).then((response) => {
            console.log(response.data);
        })

    // } else {
    //     alert('Please Register');
    // }
        r_id++;
    }
    console.log(checkIn);
    return (
        <>
            <Navbar />
            <Jumbotron />
            <div className="reserve">

                <div className="re-form">
                    <form action="" className='rform'>
                        <h1>Reservation Form</h1>
                        <div className="rform-item">
                        Name<label htmlFor="name">
                                <input onChange={(e) => setName(e.target.value)} value={name}
                                 type="text"  placeholder='Enter your name' id='name' name='name'/>
                            </label>
                        </div>
                        <div className="rform-item">
                        Phone<label htmlFor="phone">
                                <input onChange={(e) => setPhone(e.target.value)} value={phone}
                                type="number"  placeholder='Enter your phone' id='phone' name='phone'/>
                            </label>
                        </div>
                        <div className="rform-item">
                        Email<label htmlFor="email">
                                <input onChange={(e) => setEmail(e.target.value)} value={email}
                                type="email"  placeholder='Enter your email' id='email' name='email'/>
                            </label>
                        </div>
                        <div className="rform-item">
                        Room Type<label htmlFor="rtype">
                                    <select onChange={(e) => setRoomType(e.target.value)} value={roomType}
                                     name="rtype" id="rtype" placeholder='Enter Room Type' >

                                        <option>SELECT</option>
                                        <option value="DIAMOND">Diamond</option>
                                        <option value="DELUXE">Deluxe</option>
                                        <option value="PLATINUM">Platinum</option>
                                        <option value="GOLD">Gold</option>
                                        <option value="STANDARD">Standard</option>
                                        <option value="SINGLE">Single</option>
                                    </select>
                                {/* <input type="text"  placeholder='Enter Room Type' id='rtype' name='rtype'/> */}
                            </label>
                        </div>
                        <div className="rform-item">
                        Date Check In<label htmlFor="datein">
                                <input onChange={(e) => setCheckIn(e.target.value)} value={checkIn}
                                type="date" id='datein' name='datein'/>
                            </label>
                            Date Check Out<label htmlFor="dateout">
                                <input onChange={(e) => setCheckOut(e.target.value)} value={checkOut}
                                type="date" id='dateout' name='dateout'/>
                            </label>
                        </div>
                        <div className="rform-item">
                        No. Of Guests<label htmlFor="people">
                                <input onChange={(e) => setGuest(e.target.value)} value={guest}
                                 type="number" id='people' name='people'/>
                            </label>
                        </div>
                        <div className="rform-item mt-3">
                            <button onClick={reserveInfo}
                             type="submit" className='btn btn-danger'>Reserve</button>
                        </div>
                        
                    </form>
            </div>
            <div className="re-img">
                <img src="https://image.freepik.com/free-vector/online-reservation-isometric-composition-waiter-during-customer-service-mobile-device-screen-white-purple_1284-31769.jpg" alt="Reservation Form" />
            </div>
            </div>
            <Footer />
        </>
    )
}

export default Register
