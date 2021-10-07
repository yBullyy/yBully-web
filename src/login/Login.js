import React from "react";
import { Link } from "react-router-dom";

const Login = () => {

return (
    <div style={{ backgroundColor: '#f8f9fc' }} >
        <div class="back-to-home rounded d-none d-sm-block">
            <Link to="/" >
                <div class="btn btn-icon btn-soft-primary"><i data-feather="home" class="fas fa-home icons"></i></div>
            </Link>
        </div>

        <section class="bg-home d-flex align-items-center">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-7 col-md-6">
                        <div class="me-lg-5">   
                            <img src="images/.main/login.svg" class="img-fluid d-block mx-auto" alt="" />
                        </div>
                    </div>
                    <div class="col-lg-5 col-md-6">
                        <div class="card login-page bg-white shadow rounded border-0">
                            <div class="card-body">
                                <h4 class="card-title text-center">Admin Login</h4>  
                                <form class="login-form mt-4">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="mb-3">
                                                <label class="form-label">Your Email <span class="text-danger">*</span></label>
                                                <div class="form-icon position-relative">
                                                    <i data-feather="user" class="fea icon-sm icons fas fa-user"></i>
                                                    <input type="email" class="form-control ps-5" placeholder="Email" name="email" required="" />
                                                </div>
                                            </div>
                                        </div>{/*end col*/}

                                        <div class="col-lg-12">
                                            <div class="mb-3">
                                                <label class="form-label">Password <span class="text-danger">*</span></label>
                                                <div class="form-icon position-relative">
                                                    <i data-feather="key" class="fea icon-sm icons fas fa-key"></i>
                                                    <input type="password" class="form-control ps-5" placeholder="Password" required="" />
                                                </div>
                                            </div>
                                        </div>{/*end col*/}

                                        <div class="col-lg-12">
                                            <div class="d-flex justify-content-between">
                                                <div class="mb-3">
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                        <label class="form-check-label" for="flexCheckDefault">Remember me</label>
                                                    </div>
                                                </div>
                                                <p class="forgot-pass mb-0"><a href="auth-re-password.html" class="text-dark fw-bold">Forgot password ?</a></p>
                                            </div>
                                        </div>{/*end col*/}

                                        <div class="col-lg-12 mb-0">
                                            <div class="d-grid">
                                                <button class="btn btn-primary">Sign in</button>
                                            </div>
                                        </div>{/*end col*/}

                                        {/* <div class="col-lg-12 mt-4 text-center">
                                            <h6>Or Login With</h6>
                                            <div class="row">
                                                <div class="col-6 mt-3">
                                                    <div class="d-grid">
                                                        <a href="/" class="btn btn-light"><i class="mdi mdi-facebook text-primary"></i> Facebook</a>
                                                    </div>
                                                </div>
                                                
                                                <div class="col-6 mt-3">
                                                    <div class="d-grid">
                                                        <a href="/" class="btn btn-light"><i class="mdi mdi-google text-danger"></i> Google</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12 text-center">
                                            <p class="mb-0 mt-3"><small class="text-dark me-2">Don't have an account ?</small> <a href="auth-signup.html" class="text-dark fw-bold">Sign Up</a></p>
                                        </div> */}
                                    </div>{/*end row*/}
                                </form>
                            </div>
                        </div>{/**/}
                    </div> {/*end col*/}
                </div>{/*end row*/}
            </div> {/*end container*/}
        </section>{/*end section*/}

    </div>
);

}


export default Login;