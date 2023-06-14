import React from 'react';

const Footer = () => {


    return (
        <div>

            <footer className=" container-fluid bg-dark bg-gradient text-white pb-4  d-flex justify-content-around   ">

                <div className="  row mt-5 mb-4 mx-auto    shadow ">

                    <div className="col-md-4  border-end border-success">
                        <h3 className=" text-uppercase fw-bold  text-warning pb-3   ">Products</h3>
                        <ul className="list-unstyled   ">
                            <li>movie</li>
                            <li> tv</li>
                            <li> series</li>
                            <li> documentary</li>
                            <li></li>
                        </ul>

                    </div>
                    <div className=" col-md-4  ">
                        <h3 className=" text-uppercase fw-bold text-warning  pb-3 ">contact us</h3>
                        <address className="  col col-sm-4  ">
                            <p>
                                <i className="fas fa-home me-2 " aria-hidden="true"></i>
                                Iran-Tehran-Azadi Square
                                Azadi-st Sharif University
                            </p>
                            <p>
                                <i className="fas fa-phone me-2" aria-hidden="true"></i>
                                +982166004343
                            </p>
                            <p class="  ">
                                <i className="fas fa-envelope me-2" aria-hidden="true"></i>

                                <span className="">filmbaz@ust.com</span>

                            </p>
                        </address>

                    </div>
                    <div className="col-md-4  order-sm-first border-end  border-success">
                        <h3 className=" text-uppercase fw-bold text-warning pb-3">About us</h3>
                        <p className="  col col-sm-5  text-white ">

                            outr comnay is the one the best selling
                            movie creattor and selling them to the other
                            countries around the worl

                        </p>

                    </div>
                    <div className="col d-sm-flex justify-content-md-between mx-5 text-center text-sm-start ">
                        <div className="">
                            <p>
                                Copyright reserved by @2023 <i className="text-uppercase fw-bold text-warning"> payam
                                movie</i>
                            </p>
                        </div>
                        <div className="">
                            <p>

                                <i className="fab fa-youtube p-2 " aria-hidden="true"></i>
                                <i className="fab fa-instagram p-2" aria-hidden="true"></i>
                                <i className="fab fa-github p-2" aria-hidden="true"></i>
                                <i className="fab fa-linkedin-square p-2" aria-hidden="true"></i>

                            </p>
                        </div>
                    </div>
                </div>

            </footer>


        </div>
    );
};

export default Footer;
