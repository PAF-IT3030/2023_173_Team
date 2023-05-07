import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

export default function ViewUser() {

    const [user, setUser] = useState({
        name:"",
        username:"",
        email:""
    });

    const { id } = useParams();

    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8080/user/${id}`);
        setUser(result.data);
    };

  return (
    <div>
    <Navbar/>
    <div className='container' style={{paddingTop: '12rem', paddingBottom: '10rem'}}>
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">User Details</h2>
        <div className="divider-custom">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon">
                    <i className="fas fa-star"></i>
                </div>
            <div className="divider-custom-line"></div>
        </div>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-5 mt-2 shadow'>
            <h5 className='h5 pb-2'>Details of user id : {user.id}</h5>
                <div className="card" style={{textAlign: 'left'}}>
                    <div className="card-header">
                    
                        <ul className="list-group list-group-flush">
                            <li className='list-group-item'>
                                <b style={{padding: '0 5rem 0 5.5rem'}}>Name : </b>
                                {user.name}
                            </li>
                            <li className='list-group-item'>
                                <b style={{padding: '0 3rem 0 5.5rem'}}>Username : </b>
                                {user.username}
                            </li>
                            <li className='list-group-item'>
                                <b style={{padding: '0 5.1rem 0 5.5rem'}}>Email : </b>
                                {user.email}
                            </li>
                        </ul>
                    </div>
                </div>
                <Link className='btn btn-primary my-2' to={"/user"}>Back to Users</Link>
            </div>
        </div>
    </div>
    <Footer/>
    </div>
    
  )
}
