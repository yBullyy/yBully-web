import React from "react";
import "../css/style.min.css";
import Explore from "./components/Explore";
import Features from "./components/Features";
import Navbar from "./components/Navbar";
import SlantLine from "./components/SlantLine";
import Team from "./components/Team";
import Footer from "./components/Footer";

const Home = () => (
	// Navbar STart
	<div>
		<Navbar />
		<section className="bg-half-170 d-table w-100">
			<div className="container">
				<div className="row mt-5 align-items-center">
					<div className="col-lg-7 col-md-7">
						<div className="title-heading me-lg-4">
							<h1 className="heading mb-3">
								Bullying stops here !{/* <br />  */}
								{/* <span className="text-primary">yBully</span>  */}
							</h1>
							<p className="para-desc text-muted">
								Download yBully extension today and get rid of all the bully
								tweets on twitter.
							</p>
							<div className="mt-4">
								<a href="/" className="btn btn-primary mt-2 me-2">
									<i className="fas fa-download"></i> Download Now
								</a>
								{/* <a href="/" className="btn btn-outline-primary mt-2">
									<i className="uil uil-book-alt"></i> Documentation
								</a> */}
							</div>
						</div>
					</div>
					<div className="col-lg-5 col-md-5 mt-4 pt-2 mt-sm-0 pt-sm-0">
						<img src="images/.main/Startup_SVG.svg" alt="" />
					</div>
				</div>
			</div>
		</section>


        <Features />
        <Explore />
        <Team />

		<div className="position-relative">
			<div className="shape overflow-hidden text-light">
                <SlantLine />
			</div>
		</div>

		<section className="section bg-light">
		</section>

		<div className="position-relative">
			<div className="shape overflow-hidden text-footer">
                <SlantLine />
			</div>
		</div>
        
        <Footer />
	</div>
);

export default Home;
