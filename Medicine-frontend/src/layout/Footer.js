import React from 'react'

const Footer=()=> {
  return ( 
    <div>
        <footer className="footer text-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Location</h4>
                        <p className="lead mb-0">
                            247, Welivita <br /> Kaduwela
                        </p>
                    </div>
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Around the Web</h4>
                        <a className="btn btn-outline-light btn-social mx-1" href="https://www.facebook.com/" target="_blank"><i
                            className="fab fa-fw fa-facebook-f"></i></a> <a
                            className="btn btn-outline-light btn-social mx-1" href="https://twitter.com/" target="_blank"><i
                            className="fab fa-fw fa-twitter"></i></a> <a
                            className="btn btn-outline-light btn-social mx-1" href="https://www.linkedin.com/" target="_blank"><i
                            className="fab fa-fw fa-linkedin-in"></i></a> <a
                            className="btn btn-outline-light btn-social mx-1" href="#top"><i
                            className="fab fa-fw fa-dribbble"></i></a>
                    </div>
                    <div className="col-lg-4">
                        <h4 className="text-uppercase mb-4">About Us</h4>
                        <p className="lead mb-0">
                            Medicine Detsils like What is it used for? , Side Effects, etc
                        </p>
                    </div>
                </div>
            </div>
        </footer>
        <div className="copyright py-4 text-center text-white">
            <div className="container">
                <small>Copyright &copy; Medicine Details Appliction 2023</small>
            </div>
        </div>
    </div>
   )
}

export default Footer;