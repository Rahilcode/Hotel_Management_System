import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from '../components/Footer'
import AdminNav from '../components/AdminNav';

function AdminRooms() {
    const [price, setPrice] = useState(null);
    const [type, setType] = useState('');
    const [available, setAvailable] = useState(0);
    const [capacity, setCapacity] = useState(0);
    const [rooms, setRooms] = useState([]); 

    let id=10;

    const insertRoom = () => {
        axios.post('http://localhost:5000/rooms', {
            id: id,
            price: price,
            type: type,
            available: available,
            capacity: capacity
        }).then((response) => {
            console.log(response.data);
        })
        id = id+1;
    }

    useEffect(() => {
      axios.get('http://localhost:5000/getrooms')
        .then((response)=>{
            console.log(response.data);
            setRooms(response.data);
        })
    }, [rooms])

    // Delete Room
    const deleteRoom = (rid) => {
      axios.delete(`http://localhost:5000/rooms/${rid}`, {
          rid: rid,
      }).then((response)=>{
          console.log(response.data);
          
      })
  }

    return (
        <>
            <AdminNav />
            <div className="displayrooms my-5 text-center">
              
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Room Id</th>
                  <th scope="col">Room Price</th>
                  <th scope="col">Room Total</th>
                  <th scope="col">Room Available</th>
                  <th scope="col">Room Capacity</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
              {rooms.map((room, index) => {
                return <tr key={index}>
                    <td scope="row">{room.ROOM_ID}</td>
                    <td scope="row">{room.ROOM_PRICE}</td>
                    <td scope="row">{room.ROOM_TYPE}</td>
                    <td scope="row">{room.ROOMS_AVAILABLE}</td>
                    <td scope="row">{room.ROOM_CAPACITY}</td>
                    <td onClick={(e)=>{deleteRoom(room.ROOM_ID)}} scope="row" className='btn btn-danger'><i className="far fa-trash-alt"></i></td>
                  </tr>
                })}
                
                
              </tbody>
            </table>
            </div>
            <h1 className='text-center bg-warning my-5'>ADD ROOMS</h1>
            <div className="admin-room contact">
                <form>
                    <div className="form-group input-field">
            <label for="price">Room Price</label>
            <input
              onChange={(e)=>{setPrice(e.target.value)}}
              type="number"
              className="form-control"
              id="price"
              placeholder="Enter Room Price"
              value={price}
            />
            </div>
                    <div className="form-group input-field">
            <label for="type">Room Type</label>
            <input
              onChange={(e)=>{setType(e.target.value)}}
              type="text"
              className="form-control"
              id="type"
              placeholder="Enter Room Type"
              value={type}
            />
            </div>
                    <div className="form-group input-field">
            <label for="available">Room Available</label>
            <input
              onChange={(e)=>{setAvailable(e.target.value)}}
              type="number"
              className="form-control"
              id="available"
              placeholder="Enter No. Of Rooms Available"
              value={available}
            />
            </div>
                    <div className="form-group input-field">
            <label for="capacity">Room Capacity</label>
            <input
              onChange={(e)=>{setCapacity(e.target.value)}}
              type="number"
              className="form-control"
              id="capacity"
              placeholder="Enter Rooms Capacity"
              value={capacity}
            />
            </div>
            <div className="form-group input-field">
            <button onClick={insertRoom} type="submit" className="btn btn-success">Submit</button>
          </div>
                </form>
            </div>
            <Footer />
        </>
    )
}

export default AdminRooms
