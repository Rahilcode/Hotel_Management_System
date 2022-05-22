import './App.css';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Gallery from './Pages/Gallery';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Reserve from './Pages/Reserve';
import Room from './Pages/Room';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/Navbar';
import Signup from './Pages/Signup';
import AdminContact from './Pages/AdminContact';
import AdminRooms from './Pages/AdminRooms';
import Admin from './Pages/Admin';
import AdminReservation from './Pages/AdminReservation';

function App() {
  return (
    <Router>
    <div className="App">
      {/* <Navbar /> */}
      
      <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
             <Contact />
          </Route>
          <Route path="/room">
             <Room />
          </Route>
          <Route path="/gallery">
             <Gallery />
          </Route>
          <Route path="/reserve">
            <Reserve />
          </Route>
          <Route path="/login">
             <Login />
          </Route>
          <Route path="/signup">
             <Signup />
          </Route>
          <Route path="/admin">
             <Admin />
          </Route>
          <Route path="/admincontact">
             <AdminContact />
          </Route>
          <Route path="/adminrooms">
             <AdminRooms />
          </Route>
          <Route path="/adminreserve">
             <AdminReservation />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        
    </div>
      </Router>
  );
}

export default App;
