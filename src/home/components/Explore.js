import React from "react";

const Explore = () => {
	return (
		<section className="section-bottom bg-light border-bottom">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-5 col-md-6 mt-4 pt-2">
						<img src="images/.main/explore_image.png"  alt="" />
					</div>
					{/*end col*/}

					<div className="col-lg-7 col-md-6 mt-4 pt-2">
						<div className="section-title ms-lg-5">
							<h4 className="title mb-4">Try out now</h4>
							{/* <div class="alert bg-soft-success" role="alert">No Cyberbullying Detected.</div> */}
							{/* <div class="alert bg-soft-danger" role="alert">Cyberbullying Detected ! </div> */}
							<div>
								<label className="form-label">
									Select Model <span class="badge rounded-pill bg-success">88.5%</span> 
								</label>
								<div class="s-select">
									<select>
										<option value="1">Model 1</option>
										<option value="2">Model 2</option>
										<option value="3">Model 3</option>
									</select>
								</div>
								
							</div>
							

							{/* Form */}
							<div className="col-lg-12">
								<div className="mb-3">
									<label className="form-label">Enter your text</label>
									<div className="form-icon position-relative">
										<textarea
											type="text"
											className="form-control"
											placeholder="Type here..."
											required=""
										/>
									</div>
								</div>
							</div>
							{/*end col*/}

							<div className="col-lg-12 mt-2 mb-0">
								<div className="d-grid">
									<button className="btn btn-primary">Predict</button>
								</div>
							</div>
						</div>
					</div>
					{/*end col*/}
				</div>
				{/*end row*/}
			</div>
			{/*end container*/}
		</section>
	);
};

export default Explore;
