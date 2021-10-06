import React from 'react'
import SlantLine from './SlantLine';

export default function ContactUs() {
    return (
        <>
            <SlantLine colorClass="text-light" />
            <section id="contactus" className="section bg-light">
                <div class="container">
                    <div class="row">
                        <div class="col-12 text-center">
                            <div class="section-title mb-4 pb-2">
                                <h4 class="title">Contact Us</h4>
                            </div>
                        </div>{/*end col*/}
                    </div>{/*end row*/}
                    <div class="row">
                        <div class="col-md-4">
                            <div class="card contact-card border-0 text-center features feature-clean">
                                <div class="icons text-primary text-center mx-auto">
                                    <i class="fas fa-phone-alt d-block rounded mb-0"></i>
                                </div>
                                <div class="content mt-4">
                                    <h5 class="fw-bold">Phone</h5>
                                    {/* <p class="text-muted"></p> */}
                                    <a href="tel:+91" class="text-primary">+91 12345 67890</a>
                                </div>
                            </div>
                        </div>{/*end col*/}
                        
                        <div class="col-md-4 mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <div class="card contact-card border-0 text-center features feature-clean">
                                <div class="icons text-primary text-center mx-auto">                        
                                    <i class="fas fa-envelope d-block rounded mb-0"></i>
                                </div>
                                <div class="content mt-4">
                                    <h5 class="fw-bold">Email</h5>
                                    {/* <p class="text-muted"></p> */}
                                    <a href="mailto:shahshubh1010@gmail.com" class="text-primary">shahshubh1010@gmail.com</a>
                                </div>
                            </div>
                        </div>{/*end col*/}
                        
                        <div class="col-md-4 mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <div class="card contact-card border-0 text-center features feature-clean">
                                <div class="icons text-primary text-center mx-auto">
                                    <i class="fas fa-map-marker-alt d-block rounded mb-0"></i>
                                </div>
                                <div class="content mt-4">
                                    <h5 class="fw-bold">Location</h5>
                                    <p class="text-muted">Mumbai, India</p>
                                    {/* <a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
                                        data-type="iframe" class="video-play-icon text-primary lightbox">View on Google map</a> */}
                                </div>
                            </div>
                        </div>{/*end col*/}
                    </div>{/*end row*/}
                </div>{/*end container*/}

                <div class="container mt-100 mt-60">
                    <div class="row align-items-center">
                        <div class="col-lg-5 col-md-6 pt-2 pt-sm-0 order-2 order-md-1">
                            <div class="card shadow rounded border-0">
                                <div class="card-body py-5">
                                    <h4 class="card-title">Get In Touch !</h4>
                                    <div class="custom-form mt-3">
                                        <form method="post" name="myForm" onsubmit="return validateForm()">
                                            <p id="error-msg" class="mb-0"></p>
                                            <div id="simple-msg"></div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="mb-3">
                                                        <label class="form-label">Your Name <span class="text-danger">*</span></label>
                                                        <div class="form-icon position-relative">
                                                            <i class="fas fa-user icon-sm icons"></i>
                                                            <input name="name" id="name" type="text" class="form-control ps-5" placeholder="Name :" required />
                                                        </div>
                                                    </div>
                                                </div>
            
                                                <div class="col-md-6">
                                                    <div class="mb-3">
                                                        <label class="form-label">Your Email <span class="text-danger">*</span></label>
                                                        <div class="form-icon position-relative">
                                                            <i data-feather="mail" class="fas fa-envelope icon-sm icons"></i>
                                                            <input name="email" id="email" type="email" class="form-control ps-5" placeholder="Email :" required />
                                                        </div>
                                                    </div> 
                                                </div>{/*end col*/}
            
                                                <div class="col-12">
                                                    <div class="mb-3">
                                                        <label class="form-label">Subject <span class="text-danger">*</span></label>
                                                        <div class="form-icon position-relative">
                                                            <i data-feather="book" class="far fa-sticky-note icon-sm icons"></i>
                                                            <input name="subject" id="subject" class="form-control ps-5" placeholder="subject :" required />
                                                        </div>
                                                    </div>
                                                </div>{/*end col*/}
            
                                                <div class="col-12">
                                                    <div class="mb-3">
                                                        <label class="form-label">Comments <span class="text-danger">*</span></label>
                                                        <div class="form-icon position-relative">
                                                            <i data-feather="message-circle" class="far fa-comment icon-sm icons clearfix"></i>
                                                            <textarea name="comments" id="comments" rows="4" class="form-control ps-5" placeholder="Message :" required ></textarea >
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-12">
                                                    <div class="d-grid">
                                                        <button type="submit" id="submit" name="send" class="btn btn-primary">Send Message</button>
                                                    </div>
                                                </div>{/*end col*/}
                                            </div>{/*end row*/}
                                        </form>
                                    </div>{/*end custom-form*/}
                                </div>
                            </div>
                        </div>{/*end col*/}

                        <div class="col-lg-7 col-md-6 order-1 order-md-2">
                            <div class="card border-0">
                                <div class="card-body p-0">
                                    <img src="images/contact.svg" class="img-fluid" alt="" />
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
