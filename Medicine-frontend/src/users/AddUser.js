import axios from 'axios';
import swal from 'sweetalert';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

export default function AddUser() {

    let navigate = useNavigate();

    const [user,setUser] = useState({
        name:"",
        username:"",
        email:""
    });

    const{name,username,email} = user;

    const onInputChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value});
    };

    const onSubmit =async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/user",user);
        swal({
            title: "Success!",
            text: "User Added successfully!",
            icon: "success",
            button: "OK!",
        });
        navigate("/user");
    };

  return (
    <div>
    <Navbar/>
    <div className='container' style={{paddingTop: '12rem', paddingBottom: '10rem'}}>
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Register User</h2>
        <div className="divider-custom">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon">
                    <i className="fas fa-star"></i>
                </div>
            <div className="divider-custom-line"></div>
        </div>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-5 mt-2 shadow'>
            <form onSubmit={(e)=>onSubmit(e)}>
                <div className='mb-4' style={{textAlign: 'left'}}>
                    <label htmlFor='Name' className='form-label'>Name</label>
                    <input type='text' className='form-control' placeholder='Enter your name' name='name' required
                    value={name} onChange={(e)=>onInputChange(e)}/>
                </div>
                <div className='mb-4' style={{textAlign: 'left'}}>
                    <label htmlFor='Username' className='form-label'>Username</label>
                    <input type='text' className='form-control' placeholder='Enter your username' name='username' required 
                    value={username} onChange={(e)=>onInputChange(e)}/>
                </div>
                <div className='mb-4' style={{textAlign: 'left'}}>
                    <label htmlFor='Email' className='form-label'>E-mail</label>
                    <input type='email' className='form-control' placeholder='Enter your e-mail' name='email' required
                    value={email} onChange={(e)=>onInputChange(e)}/>
                </div>
                <button type='submit' className='btn btn-outline-primary'>Submit</button>
                <Link type='submit' className='btn btn-outline-danger mx-2' to="/user">Cancel</Link>
            </form>
            </div>
        </div>
    </div>
    <Footer/>
    </div>
  )
}
