import React from "react";
import "../css/style.css";
import Explore from "./components/Explore";
import Features from "./components/Features";
import Navbar from "./components/Navbar";
import SlantLine from "./components/SlantLine";
import Team from "./components/Team";
import Footer from "./components/Footer";
import Banner from "./components/Banner";

const Home = () => (
	// Navbar STart
	<div>
		<Navbar />
		<Banner />
        <Features />
        <Explore />
        <Team />
		<SlantLine colorClass="text-light" />
		
		{/* Contact US Section */}
		<section className="section bg-light">
		</section>
        
		<SlantLine colorClass="text-footer" />
        
        <Footer />
	</div>
);

export default Home;
