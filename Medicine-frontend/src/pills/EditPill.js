import axios from 'axios';
import swal from 'sweetalert';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

export default function EditPill() {

    let navigate = useNavigate();

    const {id} = useParams();

    const [pill,setPill] = useState({
        name:"",
        category:"",
        description:""
    });

    const{name,category,description} = pill;

    const onInputChange=(e)=>{
        setPill({...pill,[e.target.name]:e.target.value});
    };

    useEffect(() => {
        loadPill();
    },[]);

    const onSubmit =async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/pill/${id}`,pill);
        swal({
            title: "Success!",
            text: "Pill Updated successfully!",
            icon: "success",
            button: "OK!",
        });
        navigate("/pill");
    };

    const loadPill = async () => {
        const result = await axios.get(`http://localhost:8080/pill/${id}`);
        setPill(result.data);
    }

  return (
    <div>
    <Navbar/>
    <div className='container' style={{paddingTop: '12rem', paddingBottom: '10rem'}}>
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Edit Pill</h2>
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
                    <input type='text' className='form-control' placeholder='Enter pill name' name='name' required
                    value={name} onChange={(e)=>onInputChange(e)}/>
                </div>
                <div className='mb-4' style={{textAlign: 'left'}}>
                    <label htmlFor='Category' className='form-label'>Category</label>
                    <input type='text' className='form-control' placeholder='Enter pill category' name='category' required 
                    value={category} onChange={(e)=>onInputChange(e)}/>
                </div>
                <div className='mb-4' style={{textAlign: 'left'}}>
                    <label htmlFor='Description' className='form-label'>Description</label>
                    <input type='text' className='form-control' placeholder='Enter pill description' name='description' required
                    value={description} onChange={(e)=>onInputChange(e)}/>
                </div>
                <button type='submit' className='btn btn-outline-primary'>Submit</button>
                <Link type='submit' className='btn btn-outline-danger mx-2' to="/pill">Cancel</Link>
            </form>
            </div>
        </div>
    </div>
    <Footer/>
    </div>
  )
}
