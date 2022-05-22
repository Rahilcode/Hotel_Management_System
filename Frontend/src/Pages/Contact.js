import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import '../css/contact.css';
import axios from 'axios';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState(0);
  const [message, setMessage] = useState('');

  const insertContact = () => {
    axios.post('http://localhost:5000/contact', {
      name: name,
      email: email,
      phone: phone,
      message: message
    }).then((response) => {
      console.log(response);
    })
  }

  return (
    <>
      <Navbar />
      <div className="contact">
        <h1>Contact Us</h1>
        <div className="contact-form">

        <form>
          <div className="form-group input-field">
            <label for="name">Name</label>
            <input
              onChange={(e)=>{setName(e.target.value)}}
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Your Name"
              value={name}
            />
          </div>
          <div className="form-group input-field">
            <label for="email">Email</label>
            <input
              onChange={(e)=>{setEmail(e.target.value)}}
              type="email"
              className="form-control"
              id="email"
              placeholder="name@example.com"
              value={email}
              />
          </div>
          <div className="form-group input-field">
            <label for="phone">Phone</label>
            <input
              onChange={(e)=>{setPhone(e.target.value)}}
              type="number"
              className="form-control"
              id="phone"
              placeholder="Enter Phone Number"
              value={phone}
              />
          </div>

          <div className="form-group input-field">
            <label for="message">Message</label>
            <textarea
              onChange={(e)=>{setMessage(e.target.value)}}
              className="form-control"
              id="message"
              rows="4"
              placeholder="Enter Your Message"
              value={message}
              ></textarea>
          </div>

          <div className="form-group input-field">
            <button onClick={insertContact} type="submit" className="btn btn-danger">Submit</button>
          </div>


        </form>
        <img src="https://image.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg" alt="Contact image" />

        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
