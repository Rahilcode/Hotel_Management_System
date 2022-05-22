import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import Footer from '../components/Footer'
import Jumbotron from '../components/Jumbotron'
import Navbar from '../components/Navbar'
import '../css/room.css';
import axios from 'axios';

function Room() {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/rooms')
        .then((response)=>{
            console.log(response.data);
            setRooms(response.data);
        })
    }, [])
    return (
        <>
            <Navbar />
            <Jumbotron />
            <div className="room">
                <h1>Our Rooms</h1>
                
                <div className="room-info2">

                {rooms.map((room, index) => {
                    return <div key={index} className="cards-group2">
                    <Card fade="fade-right" type={room.ROOM_TYPE + ' Room'}  desc="/ PER NIGHT" img="https://cdn.pixabay.com/photo/2019/08/19/13/58/bed-4416515__340.jpg" price={room.ROOM_PRICE}/>
                    {/* <Card fade="fade-up" type={room.ROOM_TYPE + ' Room'}  desc="/ PER NIGHT" img="https://images.pexels.com/photos/2631746/pexels-photo-2631746.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" price={room.ROOM_PRICE}/>
                    <Card fade="fade-left" type={room.ROOM_TYPE + ' Room'}  desc="/ PER NIGHT" img="https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    price={room.ROOM_PRICE}/> */}
                </div>
                })}

                    {/* <div className="cards-group">
                        <Card fade="fade-right" type="Deluxe Room" img="https://cdn.pixabay.com/photo/2019/08/19/13/58/bed-4416515__340.jpg" price="25000"/>
                        <Card fade="fade-up" type="Standard Room" img="https://images.pexels.com/photos/2631746/pexels-photo-2631746.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" price="20000"/>
                        <Card fade="fade-left" type="Luxury Room" img="https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        price="15000"/>
                    </div>

                    <div className="cards-group">
                        <Card fade="fade-right" type="Deluxe Room" img="https://cdn.pixabay.com/photo/2019/08/19/13/58/bed-4416515__340.jpg" price="12000"/>
                        <Card fade="fade-up" type="Standard Room" img="https://images.pexels.com/photos/2631746/pexels-photo-2631746.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" price="10000"/>
                        <Card fade="fade-left" type="Luxury Room" img="https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        price="8000"/>
                    </div>

                    <div className="cards-group">
                        <Card fade="fade-right" type="Deluxe Room" img="https://cdn.pixabay.com/photo/2019/08/19/13/58/bed-4416515__340.jpg" price="6000"/>
                        <Card fade="fade-up" type="Standard Room" img="https://images.pexels.com/photos/2631746/pexels-photo-2631746.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" price="4000"/>
                        <Card fade="fade-left" type="Luxury Room" img="https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        price="3000"/>
                    </div> */}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Room
