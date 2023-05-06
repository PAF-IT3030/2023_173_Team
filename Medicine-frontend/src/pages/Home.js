import React from 'react'
import logo from '../assets/img/logo.png';
import mediGrid1 from '../assets/img/pills/pill_1.jpg';
import mediGrid2 from '../assets/img/pills/pill_2.jpg';
import mediGrid3 from '../assets/img/pills/pill_3.jpg';
import mediGrid4 from '../assets/img/pills/pill_4.jpg';
import mediGrid5 from '../assets/img/pills/pill_5.jpg';
import mediGrid6 from '../assets/img/pills/pill_6.jpg';
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

const Home=()=> {
  return ( 
    <div>
        <Navbar/>
      	<header className="masthead bg-primary text-white text-center" id="page-top">
            <div className="container d-flex align-items-center flex-column">

                <img className="masthead-avatar mb-5" src={logo}
                    alt="..." />

                <h1 className="masthead-heading text-uppercase mb-0">Welcome Medicine Detsils App</h1>

                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon">
                        <i className="fas fa-star"></i>
                    </div>
                    <div className="divider-custom-line"></div>
                </div>

                <p className="masthead-subheading font-weight-light mb-0">Medicine Detsils like What is it used for? , Side Effects, etc</p>
            </div>
        </header>

        <section className="page-section portfolio" id="portfolio">
            <div className="container">
                <h2
                    className="page-section-heading text-center text-uppercase text-secondary mb-0">Medicine</h2>
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon">
                        <i className="fas fa-star"></i>
                    </div>
                    <div className="divider-custom-line"></div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal"
                            data-bs-target="#portfolioModal1">
                            <div
                                className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div
                                    className="portfolio-item-caption-content text-center text-white">
                                    <i className="fas fa-plus fa-3x"></i>
                                </div>
                            </div>
                            <img className="img-fluid" src={mediGrid1}
                                alt="..." />
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal"
                            data-bs-target="#portfolioModal2">
                            <div
                                className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div
                                    className="portfolio-item-caption-content text-center text-white">
                                    <i className="fas fa-plus fa-3x"></i>
                                </div>
                            </div>
                            <img className="img-fluid" src={mediGrid2}
                                alt="..." />
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal"
                            data-bs-target="#portfolioModal3">
                            <div
                                className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div
                                    className="portfolio-item-caption-content text-center text-white">
                                    <i className="fas fa-plus fa-3x"></i>
                                </div>
                            </div>
                            <img className="img-fluid" src={mediGrid3}
                                alt="..." />
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal"
                            data-bs-target="#portfolioModal4">
                            <div
                                className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div
                                    className="portfolio-item-caption-content text-center text-white">
                                    <i className="fas fa-plus fa-3x"></i>
                                </div>
                            </div>
                            <img className="img-fluid" src={mediGrid4}
                                alt="..." />
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5 mb-md-0">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal"
                            data-bs-target="#portfolioModal5">
                            <div
                                className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div
                                    className="portfolio-item-caption-content text-center text-white">
                                    <i className="fas fa-plus fa-3x"></i>
                                </div>
                            </div>
                            <img className="img-fluid" src={mediGrid5}
                                alt="..." />
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal"
                            data-bs-target="#portfolioModal6">
                            <div
                                className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div
                                    className="portfolio-item-caption-content text-center text-white">
                                    <i className="fas fa-plus fa-3x"></i>
                                </div>
                            </div>
                            <img className="img-fluid" src={mediGrid6}
                                alt="..." />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div className="portfolio-modal modal fade" id="portfolioModal1"
		tabindex="-1" aria-labelledby="portfolioModal1" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header border-0">
                    <button className="btn-close" type="button" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>
                    <div className="modal-body text-center pb-5">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <h2
                                        className="portfolio-modal-title text-secondary text-uppercase mb-0">Medicine 01</h2>
                                    <div class="divider-custom">
                                        <div className="divider-custom-line"></div>
                                        <div className="divider-custom-icon">
                                            <i className="fas fa-star"></i>
                                        </div>
                                        <div className="divider-custom-line"></div>
                                    </div>
                                    <img className="img-fluid rounded mb-5"
                                        src={mediGrid1} alt="..." />
                                    <p className="mb-4">Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Mollitia neque assumenda ipsam nihil,
                                        molestias magnam, recusandae quos quis inventore quisquam velit
                                        asperiores, vitae? Reprehenderit soluta, eos quod consequuntur
                                        itaque. Nam.</p>
                                    <button className="btn btn-primary" href="#modal"
                                        data-bs-dismiss="modal">
                                        <i className="fas fa-times fa-fw"></i> Close Window
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="portfolio-modal modal fade" id="portfolioModal2"
		tabindex="-1" aria-labelledby="portfolioModal2" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header border-0">
                    <button className="btn-close" type="button" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>
                    <div className="modal-body text-center pb-5">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <h2
                                        className="portfolio-modal-title text-secondary text-uppercase mb-0">Medicine 02</h2>
                                    <div class="divider-custom">
                                        <div className="divider-custom-line"></div>
                                        <div className="divider-custom-icon">
                                            <i className="fas fa-star"></i>
                                        </div>
                                        <div className="divider-custom-line"></div>
                                    </div>
                                    <img className="img-fluid rounded mb-5"
                                        src={mediGrid2} alt="..." />
                                    <p className="mb-4">Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Mollitia neque assumenda ipsam nihil,
                                        molestias magnam, recusandae quos quis inventore quisquam velit
                                        asperiores, vitae? Reprehenderit soluta, eos quod consequuntur
                                        itaque. Nam.</p>
                                    <button className="btn btn-primary" href="#modal"
                                        data-bs-dismiss="modal">
                                        <i className="fas fa-times fa-fw"></i> Close Window
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="portfolio-modal modal fade" id="portfolioModal3"
		tabindex="-1" aria-labelledby="portfolioModal3" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header border-0">
                    <button className="btn-close" type="button" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>
                    <div className="modal-body text-center pb-5">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <h2
                                        className="portfolio-modal-title text-secondary text-uppercase mb-0">Medicine 03</h2>
                                    <div class="divider-custom">
                                        <div className="divider-custom-line"></div>
                                        <div className="divider-custom-icon">
                                            <i className="fas fa-star"></i>
                                        </div>
                                        <div className="divider-custom-line"></div>
                                    </div>
                                    <img className="img-fluid rounded mb-5"
                                        src={mediGrid3} alt="..." />
                                    <p className="mb-4">Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Mollitia neque assumenda ipsam nihil,
                                        molestias magnam, recusandae quos quis inventore quisquam velit
                                        asperiores, vitae? Reprehenderit soluta, eos quod consequuntur
                                        itaque. Nam.</p>
                                    <button className="btn btn-primary" href="#modal"
                                        data-bs-dismiss="modal">
                                        <i className="fas fa-times fa-fw"></i> Close Window
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="portfolio-modal modal fade" id="portfolioModal4"
		tabindex="-1" aria-labelledby="portfolioModal4" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header border-0">
                    <button className="btn-close" type="button" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>
                    <div className="modal-body text-center pb-5">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <h2
                                        className="portfolio-modal-title text-secondary text-uppercase mb-0">Medicine 04</h2>
                                    <div class="divider-custom">
                                        <div className="divider-custom-line"></div>
                                        <div className="divider-custom-icon">
                                            <i className="fas fa-star"></i>
                                        </div>
                                        <div className="divider-custom-line"></div>
                                    </div>
                                    <img className="img-fluid rounded mb-5"
                                        src={mediGrid4} alt="..." />
                                    <p className="mb-4">Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Mollitia neque assumenda ipsam nihil,
                                        molestias magnam, recusandae quos quis inventore quisquam velit
                                        asperiores, vitae? Reprehenderit soluta, eos quod consequuntur
                                        itaque. Nam.</p>
                                    <button className="btn btn-primary" href="#modal"
                                        data-bs-dismiss="modal">
                                        <i className="fas fa-times fa-fw"></i> Close Window
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="portfolio-modal modal fade" id="portfolioModal5"
		tabindex="-1" aria-labelledby="portfolioModal5" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header border-0">
                    <button className="btn-close" type="button" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>
                    <div className="modal-body text-center pb-5">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <h2
                                        className="portfolio-modal-title text-secondary text-uppercase mb-0">Medicine 05</h2>
                                    <div class="divider-custom">
                                        <div className="divider-custom-line"></div>
                                        <div className="divider-custom-icon">
                                            <i className="fas fa-star"></i>
                                        </div>
                                        <div className="divider-custom-line"></div>
                                    </div>
                                    <img className="img-fluid rounded mb-5"
                                        src={mediGrid5} alt="..." />
                                    <p className="mb-4">Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Mollitia neque assumenda ipsam nihil,
                                        molestias magnam, recusandae quos quis inventore quisquam velit
                                        asperiores, vitae? Reprehenderit soluta, eos quod consequuntur
                                        itaque. Nam.</p>
                                    <button className="btn btn-primary" href="#modal"
                                        data-bs-dismiss="modal">
                                        <i className="fas fa-times fa-fw"></i> Close Window
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="portfolio-modal modal fade" id="portfolioModal6"
		tabindex="-1" aria-labelledby="portfolioModal6" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header border-0">
                    <button className="btn-close" type="button" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>
                    <div className="modal-body text-center pb-5">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <h2
                                        className="portfolio-modal-title text-secondary text-uppercase mb-0">Medicine 06</h2>
                                    <div class="divider-custom">
                                        <div className="divider-custom-line"></div>
                                        <div className="divider-custom-icon">
                                            <i className="fas fa-star"></i>
                                        </div>
                                        <div className="divider-custom-line"></div>
                                    </div>
                                    <img className="img-fluid rounded mb-5"
                                        src={mediGrid6} alt="..." />
                                    <p className="mb-4">Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Mollitia neque assumenda ipsam nihil,
                                        molestias magnam, recusandae quos quis inventore quisquam velit
                                        asperiores, vitae? Reprehenderit soluta, eos quod consequuntur
                                        itaque. Nam.</p>
                                    <button className="btn btn-primary" href="#modal"
                                        data-bs-dismiss="modal">
                                        <i className="fas fa-times fa-fw"></i> Close Window
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section className="page-section bg-primary text-white mb-0" id="about">
            <div className="container">
                <h2
                    className="page-section-heading text-center text-uppercase text-white">About Us</h2>
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon">
                        <i className="fas fa-star"></i>
                    </div>
                    <div className="divider-custom-line"></div>
                </div>
                <div className="row">
                    <div className="col-lg-4 ms-auto">
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Mollitia neque assumenda ipsam nihil,
                                        molestias magnam, recusandae quos quis inventore quisquam velit
                                        asperiores, vitae? Reprehenderit soluta, eos quod consequuntur
                                        itaque. Nam.</p>
                    </div>
                    <div className="col-lg-4 me-auto">
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Mollitia neque assumenda ipsam nihil,
                                        molestias magnam, recusandae quos quis inventore quisquam velit
                                        asperiores, vitae? Reprehenderit soluta, eos quod consequuntur
                                        itaque. Nam.</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="page-section" id="contact">
            <div className="container">
                <h2
                    className="page-section-heading text-center text-uppercase text-secondary mb-0">Contact
                    Us</h2>
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon">
                        <i className="fas fa-star"></i>
                    </div>
                    <div className="divider-custom-line"></div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-xl-7">
                        <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                            <div className="form-floating mb-3">
                                <input className="form-control" id="name" type="text"
                                    placeholder="Enter your name..." data-sb-validations="required" />
                                <label for="name">Full name</label>
                                <div className="invalid-feedback" data-sb-feedback="name:required">A
                                    name is required.</div>
                            </div>
                            <div className="form-floating mb-3">
                                <input className="form-control" id="email" type="email"
                                    placeholder="name@example.com"
                                    data-sb-validations="required,email" /> <label for="email">Email
                                    address</label>
                                <div className="invalid-feedback" data-sb-feedback="email:required">An
                                    email is required.</div>
                                <div className="invalid-feedback" data-sb-feedback="email:email">Email
                                    is not valid.</div>
                            </div>
                            <div className="form-floating mb-3">
                                <input className="form-control" id="phone" type="tel"
                                    placeholder="(123) 456-7890" data-sb-validations="required" />
                                <label for="phone">Phone number</label>
                                <div className="invalid-feedback" data-sb-feedback="phone:required">A
                                    phone number is required.</div>
                            </div>
                            <div className="form-floating mb-3">
                                <textarea className="form-control" id="message" type="text"
                                    placeholder="Enter your message here..." style={{height: + '10rem'}}
                                    data-sb-validations="required"></textarea>
                                <label for="message">Message</label>
                                <div className="invalid-feedback" data-sb-feedback="message:required">A
                                    message is required.</div>
                            </div>
                            <div className="d-none" id="submitSuccessMessage">
                                <div className="text-center mb-3">
                                    <div className="fw-bolder">Form submission successful!</div>
                                    To activate this form, sign up at <br /> <a
                                        href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                </div>
                            </div>
                            <div className="d-none" id="submitErrorMessage">
                                <div className="text-center text-danger mb-3">Error sending
                                    message!</div>
                            </div>
                            <button className="btn btn-primary btn-xl disabled" id="submitButton"
                                type="submit">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
    </div>
  )
}

export default Home;