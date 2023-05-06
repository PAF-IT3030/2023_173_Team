import axios from 'axios';
import swal from 'sweetalert';
import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

export default function Register() {

  let navigate = useNavigate();

  const [employee,setEmployee] = useState({
      name:"",
      email:"",
      password:""
  });

  const{name,email,password} = employee;

  const onInputChange=(e)=>{
      setEmployee({...employee,[e.target.name]:e.target.value});
  };

  const onSubmit =async (e) => {
      e.preventDefault();
      await axios.post("http://localhost:8080/employee",employee);
      swal({
          title: "Success!",
          text: "Employee register successfully!",
          icon: "success",
          button: "OK!",
      });
      navigate("/login");
  };


  return (
    <div>
      <section className="vh-100"  style={{backgroundColor: '#eee'}}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{borderRadius: '25px'}}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                      <form className="mx-1 mx-md-4" onSubmit={(e)=>onSubmit(e)}>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="text" className="form-control" placeholder="Enter name" name='name'
                            value={name} onChange={(e)=>onInputChange(e)}/>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="email" className="form-control" placeholder="Enter your e-mail" name='email'
                            value={email} onChange={(e)=>onInputChange(e)}/>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="password" className="form-control" placeholder="Enter password" name='password'
                            value={password} onChange={(e)=>onInputChange(e)}/>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="password" className="form-control" placeholder="Enter Re-password" name='re-password'
                            />
                          </div>
                        </div>

                        <div className="form-check d-flex justify-content-center mb-5">
                          <input className="form-check-input me-2" type="checkbox" value="q" />
                          <label className="form-check-label">
                            I agree all statements in <a href="#!">Terms of service</a>
                          </label>
                        </div>

                        <div className="form-check d-flex justify-content-center mb-5">
                        <Link to = "/login">
                        <a href="#!" className="link-dark">I am already member</a>
                        </Link>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type='submit' className="btn btn-primary btn-lg">Register</button>
                        </div>

                      </form>

                    </div>
                    <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        class="img-fluid" alt="Sample image"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
