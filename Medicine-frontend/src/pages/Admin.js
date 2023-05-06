import React from "react";
import userImg from '../assets/img/user.png';
import pillImg from '../assets/img/pill.png';
import { Link } from "react-router-dom";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

export default function Admin() {
  return (
    <div>
    <Navbar/>
    <div className="container" style={{paddingTop: '6rem'}}>
        
        <section className="page-section portfolio" id="portfolio">
            <div className="container">
                <h2
                    className="page-section-heading text-center text-uppercase text-secondary mb-0">Management</h2>
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon">
                        <i className="fas fa-star"></i>
                    </div>
                    <div className="divider-custom-line"></div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto"> <Link className="text-decoration-none" to = "/user">
                            <div
                                className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div
                                    className="portfolio-item-caption-content text-center text-white">
                                    <i className="fas fa-plus fa-3x"></i>
                                </div>
                            </div>
                            <img className="img-fluid" src={userImg}
                                alt="..." />
                            </Link>
                        </div>
                        <div className="text-uppercase "><p class="h4 pt-4">User</p></div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto"> <Link className="text-decoration-none" to = "/pill">
                            <div
                                className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div
                                    className="portfolio-item-caption-content text-center text-white">
                                    <i className="fas fa-plus fa-3x"></i>
                                </div>
                            </div>
                            <img className="img-fluid" src={pillImg}
                                alt="..." />
                            </Link>
                        </div>
                        <div className="text-uppercase "><p class="h4 pt-4">Pill</p></div>
                    </div>
                </div>
            </div>
        </section>
        
    </div>
    <Footer/>
    </div>
  )
};

