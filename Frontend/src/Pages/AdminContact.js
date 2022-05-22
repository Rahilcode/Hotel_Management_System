import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminNav from '../components/AdminNav';
import Footer from '../components/Footer';



function AdminContact() {
    const [contacts, setContacts] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/contact')
        .then((response)=>{
            console.log(response.data);
            setContacts(response.data);
        })
    }, [])
    return (
        <>
        <AdminNav />
            <div className='admin-contact my-5 mx-3'>
            <table className="table">
  <thead>
    <tr>
      <th scope="col">Sl.</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Message</th>
    </tr>
  </thead>
  <tbody>
  {contacts.map((contact, index) => {
        return <tr key={index}>
        <td scope="row">{index+1}</td>
        <td>{contact.NAME}</td>
        <td>{contact.EMAIL}</td>
        <td>{contact.PHONE}</td>
        <td>{contact.MESSAGE}</td>
      </tr>
    })}
    
    
  </tbody>
</table>
            </div>
            <Footer />
        </>
    )
}

export default AdminContact
