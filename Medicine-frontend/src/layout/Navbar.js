import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        <nav
            className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top"
            id="mainNav" >
            <div className="container"><Link className="text-decoration-none" to = "/">
                <a className="navbar-brand" href="#page-top">Medicin Appliction</a></Link>
                <button
                    className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded"
                    type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarResponsive" aria-controls="navbarResponsive"
                    aria-expanded="false" aria-label="Toggle navigation">
                    Menu <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item mx-0 mx-lg-1"><a
                            className="nav-link py-3 px-0 px-lg-3 rounded" href="#portfolio">Medicine</a></li>
                        <li className="nav-item mx-0 mx-lg-1"><a
                            className="nav-link py-3 px-0 px-lg-3 rounded" href="#about">About Us</a></li>
                        <li className="nav-item mx-0 mx-lg-1"><a
                            className="nav-link py-3 px-0 px-lg-3 rounded" href="#contact">Contact Us</a></li>
                        <li className="nav-item mx-0 mx-lg-1"><Link  className="text-decoration-none" to = "/admin"><a
                            className="nav-link py-3 px-0 px-lg-3 rounded" href="">Admin</a></Link></li>
                        <li className="nav-item mx-0 mx-lg-1"><Link  className="text-decoration-none" to = "/login"><a
                            className="nav-link py-3 px-0 px-lg-3 rounded" href="">Logout</a></Link></li>
                        <li className="nav-item mx-0 mx-lg-1"><a
                            className="nav-link py-3 px-0 px-lg-3 rounded" href="#top"><i class="fas fa-arrow-circle-up"></i></a></li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}


