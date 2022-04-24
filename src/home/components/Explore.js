import React, { useState } from "react";
import { useAlert } from 'react-alert';
import ReactLoading from 'react-loading';

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

const Explore = () => {
	const [text, setText] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	
	const alert = useAlert();

	const onPredictBtnClick = async () => {
		try {
			setIsLoading(true);
			const response = await fetch(API_ENDPOINT, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ 'data': [text] }),
			});
			const data = await response.json();
			setIsLoading(false);
			let confidence = data.predictions[0].confidence;
			let confidenceRoundOff = Math.round(confidence * 100) / 100;
			let errorMsg = <div style={{ textTransform: 'initial' }} >Cyberbullying Text Detected! Confidence: {confidenceRoundOff} </div>
			let successMsg = <div style={{ textTransform: 'initial' }} >No Cyberbullying ! Confidence: {confidenceRoundOff} </div>
			if(confidence > 0.5) {
				alert.error(errorMsg);
			} else {
				alert.success(successMsg);
			}
			console.log(data);
		} catch (error) {
			setIsLoading(false);
			console.log({ error });
		}
	};

	return (
		<section className="section-bottom bg-light border-bottom">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-5 col-md-6 mt-4 pt-2">
						<img src="images/.main/explore_image.png" alt="" />
					</div>
					{/*end col*/}

					<div className="col-lg-7 col-md-6 mt-4 pt-2">
						<div className="section-title ms-lg-5">
							<h4 className="title mb-4">Try out now</h4>
							{/* <div className="alert bg-soft-success" role="alert">No Cyberbullying Detected.</div> */}
							{/* <div className="alert bg-soft-danger" role="alert">Cyberbullying Detected ! </div> */}
							{/* <div>
								<label className="form-label">
									Select Model <span className="badge rounded-pill bg-success">88.5%</span>
								</label>
								<div className="s-select">
									<select>
										<option value="1">Model 1</option>
										<option value="2">Model 2</option>
										<option value="3">Model 3</option>
									</select>
								</div>
							</div> */}

							{/* Form */}
							<div className="col-lg-12">
								<div className="mb-3">
									<span class="badge rounded-pill bg-success">95.26% Accuracy</span>
									<br />
									<label className="form-label">
										Enter your text
									</label>
									<div className="form-icon position-relative">
										<textarea
											type="text"
											className="form-control"
											placeholder="Type here..."
											value={text}
											onChange={(e) => setText(e.target.value)}
										/>
									</div>
								</div>
							</div>
							{/*end col*/}

							<div className="col-lg-12 mt-2 mb-0">
								<div className="d-grid">
									<button style={{ display: 'flex', justifyContent: 'center' }} onClick={onPredictBtnClick} className="btn btn-primary">
										{
											isLoading ?
											<ReactLoading type="spinningBubbles" height="32px" width="32px" />
											: 'Predict'
										}
									</button>
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
