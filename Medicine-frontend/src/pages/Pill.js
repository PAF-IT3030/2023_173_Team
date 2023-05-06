import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

export default function Pill() {
    const [pills, setPills] = useState([]);

    const {id} = useParams();

    useEffect(() => {
        loadPills();
    }, []);

    const loadPills = async () => {
        const result = await axios.get("http://localhost:8080/pills");
        console.log(result.data);
        setPills(result.data);
    };

    const deletePill = async (id) => {
        
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this data!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then(async (willDelete) => {
            if (willDelete) {
                await axios.delete(`http://localhost:8080/pill/${id}`);
                loadPills();
              swal("Pill deleted successfully!", {
                icon: "success",
              });
            } else {
              swal("Your data is safe!");
            }
          });
        
    }

  return (
    <div>
    <Navbar/>
    <div className="container" >
        <div className="" style={{paddingTop: '12rem', paddingBottom: '10rem'}}>
            <h1 className="page-section-heading text-center text-uppercase text-secondary mb-0">All Pills</h1>
            <div style={{paddingLeft: '20rem'}} >
            <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon" style={{paddingRight: '1rem'}} >
                        <i className="fas fa-star" ></i>
                    </div>
                    <div className="divider-custom-line"></div>
                    <div style={{paddingLeft: '11.5rem'}} ></div>
                    <Link className='btn mx-2 shadow' to="/addPill" style={{backgroundColor: '#2c3e50', color:'white', fontSize:'1.5rem'}}>Add Pill</Link>
                </div></div>
            <table className="table border shadow">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Category</th>
                        <th scope="col">Description</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        pills.map((pill,index)=>(
                            <tr>
                                <th scope="row" key={index}>
                                    {index+1}
                                </th>
                                <td>{pill.name}</td>
                                <td>{pill.category}</td>
                                <td>{pill.description}</td>
                                <td>
                                    <Link className='btn btn-primary mx-2' to={`/viewPill/${pill.id}`}>View</Link>
                                    <Link className='btn btn-outline-primary mx-2' to={`/editPill/${pill.id}`}>Edit</Link>
                                    <button className='btn btn-danger mx-2' onClick={() => deletePill(pill.id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }

            
                </tbody>
            </table>
        </div>
    </div>
    <Footer/>
    </div>
  )
}

