import React from 'react'
import SlantLine from './SlantLine';

export default function ContactUs() {
    return (
        <>
            <SlantLine colorClass="text-light" />
            <section id="contactus" className="section bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="section-title mb-4 pb-2">
                                <h4 className="title">Contact Us</h4>
                            </div>
                        </div>{/*end col*/}
                    </div>{/*end row*/}
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card contact-card border-0 text-center features feature-clean">
                                <div className="icons text-primary text-center mx-auto">
                                    <i className="fas fa-phone-alt d-block rounded mb-0"></i>
                                </div>
                                <div className="content mt-4">
                                    <h5 className="fw-bold">Phone</h5>
                                    {/* <p className="text-muted"></p> */}
                                    <a href="tel:+91" className="text-primary">+91 12345 67890</a>
                                </div>
                            </div>
                        </div>{/*end col*/}
                        
                        <div className="col-md-4 mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <div className="card contact-card border-0 text-center features feature-clean">
                                <div className="icons text-primary text-center mx-auto">                        
                                    <i className="fas fa-envelope d-block rounded mb-0"></i>
                                </div>
                                <div className="content mt-4">
                                    <h5 className="fw-bold">Email</h5>
                                    {/* <p className="text-muted"></p> */}
                                    <a href="mailto:shahshubh1010@gmail.com" className="text-primary">shahshubh1010@gmail.com</a>
                                </div>
                            </div>
                        </div>{/*end col*/}
                        
                        <div className="col-md-4 mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <div className="card contact-card border-0 text-center features feature-clean">
                                <div className="icons text-primary text-center mx-auto">
                                    <i className="fas fa-map-marker-alt d-block rounded mb-0"></i>
                                </div>
                                <div className="content mt-4">
                                    <h5 className="fw-bold">Location</h5>
                                    <p className="text-muted">Mumbai, India</p>
                                    {/* <a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
                                        data-type="iframe" className="video-play-icon text-primary lightbox">View on Google map</a> */}
                                </div>
                            </div>
                        </div>{/*end col*/}
                    </div>{/*end row*/}
                </div>{/*end container*/}

                <div className="container mt-100 mt-60">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-6 pt-2 pt-sm-0 order-2 order-md-1">
                            <div className="card shadow rounded border-0">
                                <div className="card-body py-5">
                                    <h4 className="card-title">Get In Touch !</h4>
                                    <div className="custom-form mt-3">
                                        <form method="post" name="myForm" onSubmit={() => {}}>
                                            <p id="error-msg" className="mb-0"></p>
                                            <div id="simple-msg"></div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <label className="form-label">Your Name <span className="text-danger">*</span></label>
                                                        <div className="form-icon position-relative">
                                                            <i className="fas fa-user icon-sm icons"></i>
                                                            <input name="name" id="name" type="text" className="form-control ps-5" placeholder="Name :" required />
                                                        </div>
                                                    </div>
                                                </div>
            
                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <label className="form-label">Your Email <span className="text-danger">*</span></label>
                                                        <div className="form-icon position-relative">
                                                            <i data-feather="mail" className="fas fa-envelope icon-sm icons"></i>
                                                            <input name="email" id="email" type="email" className="form-control ps-5" placeholder="Email :" required />
                                                        </div>
                                                    </div> 
                                                </div>{/*end col*/}
            
                                                <div className="col-12">
                                                    <div className="mb-3">
                                                        <label className="form-label">Subject <span className="text-danger">*</span></label>
                                                        <div className="form-icon position-relative">
                                                            <i data-feather="book" className="far fa-sticky-note icon-sm icons"></i>
                                                            <input name="subject" id="subject" className="form-control ps-5" placeholder="subject :" required />
                                                        </div>
                                                    </div>
                                                </div>{/*end col*/}
            
                                                <div className="col-12">
                                                    <div className="mb-3">
                                                        <label className="form-label">Comments <span className="text-danger">*</span></label>
                                                        <div className="form-icon position-relative">
                                                            <i data-feather="message-circle" className="far fa-comment icon-sm icons clearfix"></i>
                                                            <textarea name="comments" id="comments" rows="4" className="form-control ps-5" placeholder="Message :" required ></textarea >
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="d-grid">
                                                        <button type="submit" id="submit" name="send" className="btn btn-primary">Send Message</button>
                                                    </div>
                                                </div>{/*end col*/}
                                            </div>{/*end row*/}
                                        </form>
                                    </div>{/*end custom-form*/}
                                </div>
                            </div>
                        </div>{/*end col*/}

                        <div className="col-lg-7 col-md-6 order-1 order-md-2">
                            <div className="card border-0">
                                <div className="card-body p-0">
                                    <img src="images/contact.svg" className="img-fluid" alt="" />
                                </div>
                            </div>
                        </div>{/*end col*/}
                    </div>{/*end row*/}
                </div>{/*end container*/}

            </section>
            <SlantLine colorClass="text-footer" />
        </>
    );
}
