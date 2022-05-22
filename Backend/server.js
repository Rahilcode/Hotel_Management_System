const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();

// Connecting mysql with node js
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'hotel_management'
})

// Port number
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


// Register user and login 
app.post('/register', (req, res) => {
    const cname = req.body.cname;
    const phone = req.body.phone;
    const email = req.body.email;
    const address = req.body.address;
    const username = req.body.username;
    const pass = req.body.pass;

    db.query('INSERT INTO LOGIN VALUES (?, ?);', [username, pass], (err, response) => {
        if(err) {
            console.log(err);
        }
    })

    db.query('INSERT INTO CUSTOMERS (C_NAME, C_EMAIL, C_PHONE, C_ADDRESS) VALUES (?, ?, ?, ?);', [cname, email, phone, address], (err, response) => {
        if(err) {
            console.log(err);
        }
    })
})
app.post('/login', (req, res) => {
    const username = req.body.username;
    const pass = req.body.pass;
    db.query('SELECT * FROM LOGIN WHERE USERNAME = ? AND PASSWORD = ?;', [username, pass], (err, response) => {
        if(err) {
            console.log(err);
        }

        if(response.length>0) {
            res.send(response);
        } else {
            res.send({message: "User Not Found"});
        }
    })
})





// Contact page information 
app.post('/contact', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const message = req.body.message;
    db.query('INSERT INTO CONTACT VALUES (?, ?, ?, ?);', [name, email, phone, message], (err, response) => {
        if(err) {
            console.log(err);
        } else {
            res.send('Form Submitted Successfully!');
        }
    })
})

app.get('/contact', (req, res) => {
    db.query('SELECT * FROM CONTACT;', (err, response) => {
        if(err) {
            console.log(err);
        } else {
            res.send(response);
        }
    })
})


// Rooms
app.post('/rooms', (req, res) => {
    const id = req.body.id;
    const price = req.body.price;
    const type = req.body.type;
    const available = req.body.available;
    const capacity = req.body.capacity;
    db.query('INSERT INTO ROOMS VALUES (?, ?, ?, ?, ?);', [id, price, type, available, capacity] , (err, response) => {
        if(err) {
            console.log(err);
        } else {
            res.send('Values Inserted Successfully');
        }
    })
})
app.get('/rooms', (req, res) => {
    db.query('SELECT * FROM ROOMS GROUP BY ROOM_TYPE HAVING COUNT(*)>=1', (err, response) => {
        if(err) {
            console.log(err);
        } else {
            res.send(response);
        }
    })
})

app.get('/getrooms', (req, res) => {
    db.query('SELECT * FROM ROOMS GROUP BY ROOM_TYPE;', (err, response) => {
        if(err) {
            console.log(err);
        } else {
            res.send(response);
        }
    })
})

app.delete('/rooms/:rid', (req, res) => {
    const rid = req.params.rid;
    db.query('DELETE FROM ROOMS WHERE ROOM_ID = ?;', [rid], (err, response) => {
        if(err) {
            console.log('Something Went Wrong');
        } else {
            res.send('Record Deleted Successfully');
        }
    })
  })



// Employs Information
app.post('/emp/update', (req, res) => {
    const eid = req.body.eid;
    const fname = req.body.fname;
    const lname = req.body.lname;
    const salary = req.body.salary;
    const address = req.body.address;
    const gender = req.body.gender;

    db.query('UPDATE EMPLOYEE SET E_ID = ?, E_FNAME = ?, E_LNAME = ?, SALARY = ?, E_ADDRESS = ?, GENDER = ? WHERE E_ID = ?;', [eid, fname, lname, salary, address, gender, eid], (err, response) => {
        if(err) {
            console.log('Something Went Wrong');
            console.log(err);
        } else {
            res.send('Values Updated Successfully!!');
        }
    })
  })


app.post('/emp/add', (req, res) => {
    const eid = req.body.eid;
    const fname = req.body.fname;
    const lname = req.body.lname;
    const salary = req.body.salary;
    const address = req.body.address;
    const gender = req.body.gender;

    db.query('INSERT INTO EMPLOYEE VALUES (?, ?, ?, ?, ?, ?);', [eid, fname, lname, salary, address, gender], (err, response) => {
        if(err) {
            console.log('Something Went Wrong');
            res.send('Key');
        } else {
            res.send('Values Updated Successfully!!');
        }
    })
  })


app.get('/emp', (req, res) => {
  db.query('SELECT * FROM EMPLOYEE;', (err, response) => {
      if(err) {
          console.log('Something Went Wrong');
      } else {
          res.send(response);
      }
  })
})

app.delete('/emp/:eid', (req, res) => {
    const eid = req.params.eid;
    db.query('DELETE FROM EMPLOYEE WHERE E_ID = ?;', [eid], (err, response) => {
        if(err) {
            console.log('Something Went Wrong');
        } else {
            res.send('Record Deleted Successfully');
        }
    })
  })



// Reservation information
app.post('/reserve', (req, res) => {
    // const r_id = req.body.r_id;
    const name = req.body.name;
    const phone = req.body.phone;
    const email = req.body.email;
    const checkIn = req.body.checkIn;
    const checkOut = req.body.checkOut;
    const guest = req.body.guest;
    const roomType = req.body.roomType;
    
    // CALL RESERVEINFO ('ROHAN', 123456776, 'RAHUL@SOME.COM', '2022-01-17', '2022-01-21', 1, 'SINGLE', @roomid, @n, @roomprice, @rid, @cid);
    db.query('CALL RESERVEINFO (?, ?, ?, ?, ?, ?, ?, @roomid, @n, @roomprice, @rid, @cid);', [name, phone, email, checkIn, checkOut, guest, roomType], (err, response) => {
        if(err) {
            console.log('Something Went Wrong');
            console.log(err);
        } else {
            res.send('Reservation is Sucessfully!!');
        }
    })
  })

  app.get('/getpayres', (req, res) => {
    db.query('SELECT * FROM PAYRES;', (err, response) => {
        if(err) {
            console.log('Something Went Wrong');
        } else {
            res.send(response);
        }
    })
  })

  app.post('/check', (req, res) => {
    db.query('SELECT USERNAME FROM LOGIN WHERE USERNAME = ?;',[username] ,(err, response) => {
        if(err) {
            console.log('Something Went Wrong');
        } else {
            if(response.length>0) {
                res.send(response);
            } else {
                res.send({message: "User Not Found"});
            }
        }
    })
  })

 
    





// Reviews
app.get('/reviews', (req, res) => {
    db.query('SELECT REVIEWS FROM FEEDBACK', (err, response) => {
        if(err) {
            console.log('Something Went Wrong');
        } else {
            res.send(response);
        }
    })
  })


// Listening to port 5000
app.listen(5000, () => {
    console.log(`Listening on Port ${PORT}`);
})
