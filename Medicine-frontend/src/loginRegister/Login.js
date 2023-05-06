import React, { useCallback, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin } from 'react-google-login';

const clientId = "45177940768-rh2foq8o3lmdpg7vf2fv3rkkflmrsmvl.apps.googleusercontent.com";

export default function Login() {

    let navigate = useNavigate();

    const onSuccess = (res) => {
        console.log("LOGIN SUCCESS! Current user: " + res.profileObj)
        navigate("/");

    }

    const onFailure = (res) => {
        console.log("LOGIN FAILED! res: " + res)
    }

  return (

    <div className=''>
    <section className="vh-100" style={{backgroundColor: '#eee'}}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{borderRadius: '25px'}}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                        className="img-fluid" alt="Sample image"/>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign in</p>
                        <form className="mx-1 mx-md-4">



                            <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                                <input type="email" id="form3Example3c" className="form-control" placeholder="Enter a valid email address"/>
                            </div>
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                                <input type="password" id="form3Example4c" className="form-control" placeholder="Enter password"/>
                            </div>
                            </div>

                            <div className="d-flex justify-content-between align-items-center ml-5 mb-lg-5">
                                <div className="form-check mb-0">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                    <label className="form-check-label" for="form2Example3">
                                        Remember me
                                    </label>
                                </div>
                                <a href="#!" className="text-body">Forgot password?</a>
                            </div>

                            <div className="d-flex justify-content-left mx-4 mb-1 mb-lg-3">
                                <button type="button" className="btn btn-primary btn-lg"
                                style={{paddingLeft: '2.5rem', paddingRight: '2.5rem'}}>Login</button>
                            </div>

                            <div className="text-center text-lg-start mx-4 mb-1 mb-lg-5">
                                <Link className="text-decoration-none link-dark" to="/register"><p className="small mt-2 pt-1 mb-0 dark">Don't have an account? <a href=""
                                    className="link-danger">Register</a></p></Link>
                            </div>

                            
                            <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start mx-4 mb-1 mb-lg-3">
                                <p className="lead fw-normal mb-0 me-3">Or Sign in with</p>
                                <button type="button" id="signInButton" className="btn btn-primary btn-floating mx-1">
                                <i className="fab fa-google"></i>
                                </button>

                                <button type="button" className="btn btn-primary btn-floating mx-1">
                                <i className="fab fa-facebook-f"></i>
                                </button>

                                <button type="button" className="btn btn-primary btn-floating mx-1">
                                <i className="fab fa-linkedin-in"></i>
                                </button>
                            </div>
                            <div id="signInButton">
                                <GoogleLogin
                                    clientId={clientId}
                                    buttonText="Login"
                                    onSuccess={onSuccess}
                                    onFailure={onFailure}
                                    cookiePolicy={'single_host_origin'}
                                    isSignedIn={true}
                                />
                            </div>
                        </form>
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
