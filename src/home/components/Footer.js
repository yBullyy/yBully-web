import React from "react";

const Footer = () => (
    <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="footer-py-60">
                        <div className="row">
                            <div className="col-lg-4 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
                                <a href="/" className="logo-footer">
                                    <img src="images/.main/yBully-w.png" height="94" alt="" />
                                </a>
                                <p className="mt-1">
                                    
                                </p>
                                <ul className="list-unstyled social-icon social-icon-footer foot-social-icon mb-0 mt-4">
                                    <li class="list-inline-item"><a href="https://github.com/yBullyy" class="rounded"><i data-feather="facebook" class="fab fa-github fa-lg"></i></a></li>
                                    <li class="list-inline-item"><a href="/" class="rounded"><i data-feather="instagram" class="fab fa-instagram fa-lg"></i></a></li>
                                    <li class="list-inline-item"><a href="/" class="rounded"><i data-feather="twitter" class="fab fa-twitter fa-lg"></i></a></li>
                                    <li class="list-inline-item"><a href="/" class="rounded"><i data-feather="linkedin" class="fab fa-linkedin fa-lg"></i></a></li>
                                    <li class="list-inline-item"></li>
                                </ul>
                                {/*end icon*/}
                            </div>
                            {/*end col*/}

                            <div className="col-lg-2 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <h5 className="footer-head">Company</h5>
                                <ul className="list-unstyled footer-list mt-4">
                                    <li>
                                        <a href="#explore" className="text-foot">
                                            <i className="uil uil-angle-right-b me-1"></i> Explore
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#team" className="text-foot">
                                            <i className="uil uil-angle-right-b me-1"></i> About us
                                        </a>
                                    </li>
                                    
                                    <li>
                                        <a href="#contactus" className="text-foot">
                                            <i className="uil uil-angle-right-b me-1"></i> Contact Us
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#team" className="text-foot">
                                            <i className="uil uil-angle-right-b me-1"></i> Team
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/admin" className="text-foot">
                                            <i className="uil uil-angle-right-b me-1"></i> Admin
                                        </a>
                                    </li>

                                </ul>
                            </div>
                            {/*end col*/}

                            <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <h5 className="footer-head">Usefull Links</h5>
                                <ul className="list-unstyled footer-list mt-4">
                                    <li>
                                        <a href="/" className="text-foot">
                                            <i className="uil uil-angle-right-b me-1"></i> yBully Chrome Extension
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/yBullyy/yBully-web" className="text-foot">
                                            <i className="uil uil-angle-right-b me-1"></i> Source Code
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            {/*end col*/}


                            <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <h5 className="footer-head">Newsletter</h5>
                                <p className="mt-4">
                                    Sign up and receive the latest tips via email.
                                </p>
                                <form>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="foot-subscribe mb-3">
                                                <label className="form-label">
                                                    Write your email{" "}
                                                    <span className="text-danger">*</span>
                                                </label>
                                                <div className="form-icon position-relative">
                                                    <i
                                                        data-feather="mail"
                                                        className="far fa-envelope icon-sm icons"
                                                    ></i>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        id="emailsubscribe"
                                                        className="form-control ps-5 rounded"
                                                        placeholder="Your email : "
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="d-grid">
                                                <input
                                                    type="submit"
                                                    id="submitsubscribe"
                                                    name="send"
                                                    className="btn btn-soft-primary"
                                                    value="Subscribe"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/*end row*/}
                    </div>
                </div>
                {/*end col*/}
            </div>
            {/*end row*/}
        </div>
        {/*end container*/}

        {/* <div className="footer-py-30 footer-bar">
            <div className="container text-center">
                <div className="row align-items-center">
                    <div className="col-sm-6">
                        <div className="text-sm-start">
                            <p className="mb-0">
                                © yBully.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
    </footer>
);

export default Footer;