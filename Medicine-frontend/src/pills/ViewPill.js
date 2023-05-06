import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

export default function ViewPill() {

    const [pill, setPill] = useState({
        name:"",
        category:"",
        description:""
    });

    const { id } = useParams();

    useEffect(() => {
        loadPill();
    }, []);

    const loadPill = async () => {
        const result = await axios.get(`http://localhost:8080/pill/${id}`);
        setPill(result.data);
    };

  return (
    <div>
    <Navbar/>
    <div className='container' style={{paddingTop: '12rem', paddingBottom: '10rem'}}>
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Pill Details</h2>
        <div className="divider-custom">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon">
                    <i className="fas fa-star"></i>
                </div>
            <div className="divider-custom-line"></div>
        </div>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-5 mt-2 shadow'>
            <h5 className='h5 pb-2'>Details of pill id : {pill.id}</h5>
                <div className="card" style={{textAlign: 'left'}}>
                    <div className="card-header">
                    
                        <ul className="list-group list-group-flush">
                            <li className='list-group-item'>
                                <b style={{padding: '0 4.5rem 0 0'}}>Name : </b>
                                {pill.name}
                            </li>
                            <li className='list-group-item'>
                                <b style={{padding: '0 3rem 0 0'}}>Category : </b>
                                {pill.category}
                            </li>
                            <li className='list-group-item'>
                                <b style={{padding: '0 2rem 0 0'}}>Description : </b>
                                {pill.description}
                            </li>
                        </ul>
                    </div>
                </div>
                <Link className='btn btn-primary my-2' to={"/pill"}>Back to Pill</Link>
            </div>
        </div>
    </div>
    <Footer/>
    </div>
  )
}
