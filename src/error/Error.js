import React from "react";
import { Link } from "react-router-dom";

const Error = () => (
    <>
        <div class="back-to-home rounded d-none d-sm-block">
            <Link to="/" >
                <div class="btn btn-icon btn-soft-primary"><i data-feather="home" class="fas fa-home icons"></i></div>
            </Link>
        </div>

        <section class="bg-home d-flex align-items-center">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8 col-md-12 text-center">
                        <img src="images/.main/404.svg" class="img-fluid" alt="" />
                        <div class="text-uppercase mt-4 display-3">Oh ! no</div>
                        <div class="text-capitalize text-dark mb-4 error-page">Page Not Found</div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12 text-center">
                        <Link to="/" >
                            <div class="btn btn-primary mt-4 ms-2">Go To Home</div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    </>
);

export default Error;