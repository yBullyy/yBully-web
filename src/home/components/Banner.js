import React from 'react'

export default function Banner() {
    return (
        <section className="bg-half-170 d-table w-100 banner-bg-image agency-wrapper " style={{ paddingBottom: '150px' }} >
            <div className="agency-wrapper-2" >
                <div className="container">
                    <div className="row mt-5 align-items-center">
                        <div className="col-lg-7 col-md-7">
                            <div className="title-heading me-lg-4">
                                <h1 className="heading mb-3">
                                    Bullying <span className="text-primary">STOPS</span>  here !{/* <br />  */}
                                </h1>
                                <p className="para-desc text-muted">
                                    Download yBully extension today and get rid of all the bully
                                    tweets on twitter.
                                </p>
                                <div className="mt-4">
                                    <a href="ybully_1.0.0.zip" className="btn btn-primary mt-2 me-2">
                                        <i className="fas fa-download"></i> Download Now
                                    </a>
                                    <a href="https://github.com/yBullyy" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary mt-2">
                                        <i className="fab fa-github"></i> Github
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-5 mt-4 pt-2 mt-sm-0 pt-sm-0">
                            <img src="images/.main/cyberbullying_banner.jpg" width="650" height="433" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
