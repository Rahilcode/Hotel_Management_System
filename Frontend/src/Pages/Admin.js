import React, { useEffect, useState } from 'react';
import AdminNav from '../components/AdminNav';
import Footer from '../components/Footer';
import axios from 'axios';
import '../css/admin.css'


function Admin() {
    const [emps, setEmps] = useState([]);
    const [eid, setEid] = useState(null);
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [salary, setSalary] = useState(0);
    const [address, setAddress] = useState('');
    const [gender, setGender] = useState('');
    const [addEmps, setAddEmps] = useState({eid: 0, fname: '', lname: '', salary: 0, address: '', gender: ''});

        useEffect(() => {
            axios.get('http://localhost:5000/emp')
            .then((response)=>{
                setEmps(response.data);
            })
        }, [emps])


    // Update Function
    const UpdateEmp = () => {
        axios.post('http://localhost:5000/emp/update', {
            eid: eid,
            fname: fname, 
            lname: lname,
            salary: salary,
            address: address, 
            gender: gender
        }).then((response)=>{
            console.log(response.data);
        })
    }

    // Delete Function
    const deleteEmp = (eid) => {
        axios.delete(`http://localhost:5000/emp/${eid}`, {
            eid: eid,
        }).then((response)=>{
            console.log(response.data);
            
        })
    }

    // Add Function
    const addEmp = () => {
        axios.post('http://localhost:5000/emp/add', {
            eid: addEmps.eid,
            fname: addEmps.fname, 
            lname: addEmps.lname,
            salary: addEmps.salary,
            address: addEmps.address, 
            gender: addEmps.gender
        }).then((response)=>{
            if(response.data == 'Key') {
                alert('Please enter the unique eid');
            }
            console.log(response.data);
        })
    }

    const handleChange = e => {
        const { name, value } = e.target;
        setAddEmps(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <>
            <AdminNav />
            <div className="emp">
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Employ ID</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Salary</th>
                    <th scope="col">Address</th>
                    <th scope="col">Gender</th>
                    </tr>
                </thead>
                <tbody>
                {emps.map((emp) => {
                        return <tr key={emp.E_ID}>
                        <td scope="row">{emp.E_ID}</td>
                        <td scope="row">{emp.E_FNAME}</td>
                        <td scope="row">{emp.E_LNAME}</td>
                        <td scope="row">{emp.SALARY}</td>
                        <td scope="row">{emp.E_ADDRESS}</td>           
                        <td scope="row">{emp.GENDER}</td>  
                        <td onClick={(e)=>{deleteEmp(emp.E_ID)}} scope="row" className='btn btn-danger'><i className="far fa-trash-alt"></i></td>         
                    </tr>
                    })}
                    
                    
                </tbody>
                </table>
            </div>

                <h2 className='text-center bg-success text-white'>Update Employees Information</h2>
            <div className="edit-emp">
                <form action="">
                    E_ID <input type="number" className="eid" value={eid} onChange={(e)=>{setEid(e.target.value)}} />
                    First Name <input type="text" className="fname" value={fname} onChange={(e)=>{setFname(e.target.value)}} />
                    Last Name <input type="text" className="lname" value={lname} onChange={(e)=>{setLname(e.target.value)}} />
                    Salary <input type="number" className="salary" value={salary} onChange={(e)=>{setSalary(e.target.value)}} />
                    Address <input type="text" className="address" value={address} onChange={(e)=>{setAddress(e.target.value)}} />
                    Gender <input type="text" className="gender" value={gender} onChange={(e)=>{setGender(e.target.value)}} />

                    <button type="submit" className='btn btn-success px-3' onClick={UpdateEmp}>Save</button>
                </form>
            </div>



            <h2 className='text-center bg-danger text-white'>Add New Employees Information</h2>
            <div className="edit-emp">
                <form action="">
                    E_ID <input type="number" name='eid' className="eid" value={addEmps.eid} onChange={handleChange}/>
                    First Name <input type="text" name='fname' className="fname" value={addEmps.fname} onChange={handleChange} />
                    Last Name <input type="text" name='lname' className="lname" value={addEmps.lname} onChange={handleChange} />
                    Salary <input type="number" name='salary' className="salary" value={addEmps.salary} onChange={handleChange} />
                    Address <input type="text" name='address' className="address" value={addEmps.address} onChange={handleChange} />
                    Gender <input type="text" name='gender' className="gender" value={addEmps.gender} onChange={handleChange} />

                    <button type="submit" className='btn btn-danger px-3' onClick={addEmp}>Save</button>
                </form>
            </div>

            <Footer />
        </>
    )
}

export default Admin
