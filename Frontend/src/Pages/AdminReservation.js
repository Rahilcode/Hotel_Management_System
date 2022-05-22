import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from '../components/Footer'
import AdminNav from '../components/AdminNav';

function AdminReservation() {
    const [pays, setPays] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/getpayres')
          .then((response)=>{
              console.log(response.data);
              setPays(response.data);
          })
      }, [pays])

    return (
        <>
            <AdminNav />
            <div className="displayrooms my-5 text-center">
              <h1 className="text-white bg-success my-5">Reservation Information</h1>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">CId</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Payment Type</th>
                  <th scope="col">Name</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Email</th>
                  <th scope="col">Check In</th>
                  <th scope="col">Check Out</th>
                  <th scope="col">Room Type</th>
                </tr>
              </thead>
              <tbody>
              {pays.map((pay, index) => {
                return <tr key={index}>
                    <td scope="row">{pay.C_ID}</td>
                    <td scope="row">{pay.AMOUNT}</td>
                    <td scope="row">{pay.PAYMENT_TYPE}</td>
                    <td scope="row">{pay.R_NAME}</td>
                    <td scope="row">{pay.R_PHONE}</td> 
                    <td scope="row">{pay.R_EMAIL}</td> 
                    <td scope="row">{pay.CHECK_IN}</td> 
                    <td scope="row">{pay.CHECK_OUT}</td> 
                    <td scope="row">{pay.R_TYPE}</td> 
                  </tr>
                })}
                
                
              </tbody>
            </table>
            </div>
            <Footer />
        </>
    )
}

export default AdminReservation
