//import logo from './logo.svg';
import './App.css';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
// import "../node_modules/bootstrap/dist/js/bootstrap.js";
import "./layout/scripts.js";
import "https://use.fontawesome.com/releases/v5.15.4/js/all.js";
import "./layout/index-styles.css"
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Home from "./pages/Home";
import User from "./pages/User";
import Pill from './pages/Pill';
import Admin from "./pages/Admin";
import AddUser from './users/AddUser';
import EditUser from './users/EditUser';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ViewUser from './users/ViewUser';
import AddPill from './pills/AddPill';
import EditPill from './pills/EditPill';
import ViewPill from './pills/ViewPill';
import Login from './loginRegister/Login';
import Register from './loginRegister/Register';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
          <Route exact path = "/" element = {<Home/>} />
          <Route exact path = "/admin" element = {<Admin/>} />
          <Route exact path = "/user" element = {<User/>} />
          <Route exact path = "/pill" element = {<Pill/>} />
          <Route exact path = "/addUser" element = {<AddUser/>} />
          <Route exact path = "/editUser/:id" element = {<EditUser/>} />
          <Route exact path = "/viewUser/:id" element = {<ViewUser/>} />
          <Route exact path = "/addPill" element = {<AddPill/>} />
          <Route exact path = "/editPill/:id" element = {<EditPill/>} />
          <Route exact path = "/viewPill/:id" element = {<ViewPill/>} />
          <Route exact path = "/login" element = {<Login/>} />
          <Route exact path = "/register" element = {<Register/>} />
          
      </Routes>
      </Router>
    </div>
  );
}

export default App;
